import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

export const HeaderMain: React.FC = () => {
  return (
    <div>
      <Container>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          direction="row"
        >
          <h1>Hi, I am Michal</h1>
        </Grid>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          direction="row"
        >
          <p>
            So, i am from Bratislava. Very love working on computers and my main
            interest is React.js, JS/TS, Nest.js, node.js. I love football, running and people like me with the same hobbies.
          </p>
        </Grid>
      </Container>
    </div>
  );
};
