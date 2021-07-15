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
        <Grid style={{ padding: 0 , margin: 0 }}
          container
          justify="flex-end"
          alignItems="flex-end"
          direction="column"
        >
          <h6 style={{ padding: 0 , margin: 0 }}>{new Date().toLocaleDateString()}</h6>
          <h3 style={{ padding: 0 , margin: 0 }}>{timer.time.toLocaleTimeString()}</h3>
        </Grid>
      </Box>
    </Grid>
  );
};
