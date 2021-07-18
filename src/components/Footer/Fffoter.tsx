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
    <>
      <AppBar style={{ background: "none" }} position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Grid container direction="row">
              <Typography variant="caption" color="inherit">
                © 2021 Júl | mailtrap | Strava API | Michal Krasňanský
              </Typography>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
