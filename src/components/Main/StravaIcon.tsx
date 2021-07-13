import React from "react";
import { Box, Grid } from "@material-ui/core";
import stravaLogo from "../../assets/img/Strava_Logo.svg";
export const StravaIcon: React.FC = () => {
  return (
    <Grid container justify="center">
      <Box style={{ width: 100 }}>
        <img src={stravaLogo} alt="strava" />
      </Box>
    </Grid>
  );
};
