import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React, { useEffect, useState } from "react";

export const Oclock: React.FC = () => {
  const [timer, setTimer] = useState({ time: new Date() });
  useEffect(() => {
    setInterval(() => {
      setTimer({ time: new Date() });
    }, 1000);
  }, [timer]);
  return (
    <Grid container direction="row-reverse" style={{ paddingTop: 20 }}>
      <Box color="primary.main">
        <Grid
          container
          justify="flex-end"
          alignItems="flex-end"
          direction="column"
        ></Grid>

        <Grid
          container
          justify="flex-end"
          alignItems="flex-end"
          direction="column"
        >
          <span>{new Date().toLocaleDateString()}</span>
          <h1>{timer.time.toLocaleTimeString()}</h1>
        </Grid>
      </Box>
    </Grid>
  );
};
