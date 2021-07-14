import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

export const Fffoter: React.FC = () => {
  return (
    <AppBar style={{ background: "#333333" }} position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Grid container direction="row">
            <Typography variant="body1" color="inherit">
              © 2021 Júl
            </Typography>
          </Grid>
            <Grid container justify="center">
              <Typography variant="body1" color="inherit">
                Strava API
              </Typography>
            </Grid>
          <Grid container direction="row-reverse">
            <Typography variant="body1" color="inherit">
              Michal Krasňanský
            </Typography>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
