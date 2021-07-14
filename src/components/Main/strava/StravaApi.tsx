import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { ActivityComponent } from "./ActivityComponent";
// import { MapContainer, TileLayer, Popup, Polyline } from "react-leaflet";
interface Activity {
  id: number;
  type: string;
  distance: string;
  time: string;
  temp: string;
}

export const StravaApi: React.FC = () => {
  const [activities, setActivites] = useState<Activity[]>([]);
  const id: string = "68395";
  const secret: string = "f77ddbde60076ffb1398c105c7290d60c82cc249";
  const refreshToken: string = "a3a6d32724a442cfb9e3b0baecebc347b8afab77";
  const accessFinal: string = "3c60f895d2ec5b148192ea855fb7e456928ab215";
  const auth_link: string = "https://www.strava.com/oauth/token";
  const activities_link: string =
    "https://www.strava.com/api/v3/athlete/activities";

  useEffect(() => {
    async function fetchData() {
      const stravaAuthResponse = await axios.all([
        axios.post(
          `${auth_link}?client_id=${id}&client_secret=${secret}&refresh_token=${refreshToken}&grant_type=refresh_token`
        ),
      ]);
      const expire = await axios.post('https://www.strava.com/oauth/token?client_id=68395&client_secret=f77ddbde60076ffb1398c105c7290d60c82cc249&refresh_token=a3a6d32724a442cfb9e3b0baecebc347b8afab77&grant_type=refresh_token')
      console.log(expire.data.expires_at+ ' and ' +new Date().toLocaleTimeString);
      
      console.log("auth: ", stravaAuthResponse[0].data.access_token);
      const stravaActivityResponse = await axios.get(
        `${activities_link}?access_token=${accessFinal}`
      );
      console.log(stravaActivityResponse);
      const resActivites = [];
      for (let i = 0; i < 3; i += 1) {
        const id = i + 1;
        const type = stravaActivityResponse.data[i].type;
        const distance =
          (stravaActivityResponse.data[i].distance / 1000).toFixed(2) + " Km";
        const time =
          (stravaActivityResponse.data[i].moving_time / 60).toFixed(2) +
          " min.";
        const temp =
          (
            stravaActivityResponse.data[i].moving_time /
            60 /
            (stravaActivityResponse.data[i].distance / 1000)
          ).toFixed(2) + " min/km";
        resActivites.push({ type, distance, time, temp, id });
      }
      setActivites(resActivites);
    }
    fetchData();
  }, []);
  console.log(activities);

  return (
    <Grid container direction="row" spacing={4} justify="center">
      {activities.map((move) => (
        <ActivityComponent
          key={move.id}
          type={move.type}
          distance={move.distance}
          temp={move.temp}
          time={move.time}
        />
      ))}
    </Grid>
  );
};
