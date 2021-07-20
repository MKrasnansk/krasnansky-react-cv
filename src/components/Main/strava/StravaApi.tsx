import { Container, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityComponent } from "./ActivityComponent";
interface Activity {
  id: number;
  type: string;
  distance: string;
  time: string;
  temp: string;
  date: string
}
const id = String(process.env.REACT_APP_STRAVA_ID);
const secret = process.env.REACT_APP_STRAVA_SECRET;
const refreshToken = process.env.REACT_APP_STRAVA_REFRESH_TOKEN;
const accessToken = process.env.REACT_APP_STRAVA_ACCESS_TOKEN;
const auth_link = "https://www.strava.com/oauth/token";
const activities_link = "https://www.strava.com/api/v3/athlete/activities";

export const StravaApi: React.FC = () => {
  const [activities, setActivites] = useState<Activity[]>([]);
  useEffect(() => {
    const matches = window.innerWidth > 760
    async function fetchData() {
      const stravaAuthResponse = await axios.all([
        axios.post(
          `${auth_link}?access_token=${accessToken}&client_id=${id}&client_secret=${secret}&refresh_token=${refreshToken}&grant_type=refresh_token`
        ),
      ]);
      const accessFinal: string = `${stravaAuthResponse[0].data.access_token}`;
      // eslint-disable-next-line
      const accessRefresh = await axios.post(
        `${auth_link}?access_token=${accessFinal}&client_id=${id}&client_secret=${secret}&refresh_token=${refreshToken}&grant_type=refresh_token`
      );
      const stravaActivityResponse = await axios.get(
        `${activities_link}?access_token=${accessFinal}`
      );
      const resActivites = [];
      let numberOfActivities: number = 3
      if (matches) {
        numberOfActivities = 7
      }
      for (let i = 0; i < numberOfActivities ; i += 1) {
        const id = i + 1;
        const date = stravaActivityResponse.data[i].start_date_local.slice(0, 10)
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
        resActivites.push({ type, distance, time, temp, id, date });
      }
      setActivites(resActivites);
    }
    fetchData();
  }, []);
  return (
    <>
      <Container maxWidth="md">
        <Grid container direction="row" spacing={2} justifyContent="center">
          {activities.map((move) => (
            <ActivityComponent
              key={move.id}
              date={move.date}
              type={move.type}
              distance={move.distance}
              temp={move.temp}
              time={move.time}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};
export const MemoizedStravaApi = React.memo(StravaApi);
