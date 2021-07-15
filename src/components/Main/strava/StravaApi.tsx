import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { ActivityComponent } from "./ActivityComponent";
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
  const code: string = "13099208d6c33a576ffdc40bb9f1971ca4b5e181";
  const refreshToken: string = "9a1b1f9114a5588294bf1599f31e7c938b490759";
  const auth_link: string = "https://www.strava.com/oauth/token";
  const activities_link: string =
    "https://www.strava.com/api/v3/athlete/activities";
  const accessFinal: string = "8abc29ec007d034e08c4f8533e81913e38ddc933";
  useEffect(() => {
    async function fetchData() {
      const stravaAuthResponse = await axios.all([
        axios.post(
          `${auth_link}?access_token=${accessFinal}&client_id=${id}&client_secret=${secret}&refresh_token=${refreshToken}&grant_type=refresh_token`
        ),
      ]);
      const expire = await axios.post(
        `${auth_link}?client_id=${id}&client_secret=${secret}&refresh_token=${refreshToken}&grant_type=refresh_token`
      );
      const stravaActivityResponse = await axios.get(
        `${activities_link}?access_token=${accessFinal}`
      );
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
