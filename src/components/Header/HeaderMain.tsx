import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Typewriter from "typewriter-effect";

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
          <h4>
            <Typewriter
              options={{
                strings: ["Hello, I am Michal."],
                autoStart: true,
                loop: true,
                delay: 300,
                cursor: "_",
              }}
            />
            I am from Bratislava and I very love work with computers. <br />
            I love football, running and people like me with the same hobbies.
          </h4>
        </Grid>
        <Grid container justify="center" alignItems="center" direction="row">
          <h3 style={{ color: "#1de9b6", textAlign: "center" }}>
           <i> 
            My main interests are </i>
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
          </h3>
        </Grid>
      </Container>
    </div>
  );
};
