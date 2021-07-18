import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Typewriter from "typewriter-effect";
import { theme } from "../../theme";

export const HeaderMain: React.FC = () => {
  return (
    <>
      <Container>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          direction="row"
        >
          <h4 style={{ color: theme.palette.text.hint }}>
            Hello, I am Michal. <br />
            I am from Bratislava and I very love work with computers. <br />I
            love football, running and people like me with the same hobbies.
          </h4>
        </Grid>
        <Grid container justify="center" alignItems="center" direction="row">
          <h2
            style={{ color: theme.palette.secondary.main, textAlign: "center" }}
          >
            My main interests are:
            <Typewriter
              options={{
                strings: [
                  "React.js",
                  "Typescript",
                  "JavaScript",
                  "Nest.js",
                  "Node.js",
                  "Material-UI",
                ],
                cursor: "_",
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </Grid>
      </Container>
    </>
  );
};
