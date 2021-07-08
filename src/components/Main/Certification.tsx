import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import { Chip } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      display: "flex",
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  })
);

export const Certification: React.FC = () => {
  const classes = useStyles();
  const [udemy, setUdemy] = useState(true);
  const [learn, setLearn] = useState(false);
  const [mastery, setMastery] = useState(false);

  const handleUdemy = () => {
    setLearn(false);
    setMastery(false);
    setUdemy((prev) => !prev);
  };
  const handleLearn = () => {
    setUdemy(false);
    setMastery(false);
    setLearn((prev) => !prev);
  };
  const handleMastery = () => {
    setLearn(false);
    setUdemy(false);
    setMastery((prev) => !prev);
  };
  return (
    <>
      <div className={classes.root}>
        <Grid
          container={true}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={4}>
            <div className={classes.paper}>
              <Chip
                variant="default"
                size="medium"
                label="UDEMY"
                color="secondary"
                clickable
                onClick={handleUdemy}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.paper}>
              <Chip
                variant="default"
                size="medium"
                label="Learn2code"
                color="secondary"
                clickable
                onClick={handleLearn}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.paper}>
              <Chip
                variant="default"
                size="medium"
                label="Other courses"
                color="secondary"
                clickable
                onClick={handleMastery}
              />
            </div>
          </Grid>
          {udemy ? (
            <div>
              {" "}
              <Grow in={udemy}>
                <Chip
                  variant="outlined"
                  size="small"
                  label="React - The Complete Guide (incl Hooks, React Router, Redux)"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={udemy}
                style={{ transformOrigin: "0 0 0" }}
                {...(udemy ? { timeout: 1000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Master NestJS - The JavaScript Node.js Framework"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={udemy}
                style={{ transformOrigin: "0 0 0" }}
                {...(udemy ? { timeout: 2000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Understanding TypeScript - 2021 Edition"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={udemy}
                style={{ transformOrigin: "0 0 0" }}
                {...(udemy ? { timeout: 3000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="NestJS Zero to Hero - Modern TypeScript Back-end Development"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={udemy}
                style={{ transformOrigin: "0 0 0" }}
                {...(udemy ? { timeout: 4000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={udemy}
                style={{ transformOrigin: "0 0 0" }}
                {...(udemy ? { timeout: 5000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="The Complete Modern JavaScript Masterclass 2021"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={udemy}
                style={{ transformOrigin: "0 0 0" }}
                {...(udemy ? { timeout: 6000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Quasar V1: PWA (with Vue JS 2, Firebase, NodeJS & Express)"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={udemy}
                style={{ transformOrigin: "0 0 0" }}
                {...(udemy ? { timeout: 7000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Vuetify: Create an App with Vue JS & Vuex - in 5 Hours!"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={udemy}
                style={{ transformOrigin: "0 0 0" }}
                {...(udemy ? { timeout: 8000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Intro to Node JS & Express"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={udemy}
                style={{ transformOrigin: "0 0 0" }}
                {...(udemy ? { timeout: 9000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="JavaScript DOM Dynamic Web interactive content Boot Camp"
                  color="primary"
                  clickable={true}
                />
              </Grow>
            </div>
          ) : (
            <div></div>
          )}
          {learn ? (
            <div>
              {" "}
              <Grow
                in={learn}
                style={{ transformOrigin: "0 0 0" }}
                {...(learn ? { timeout: 0 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="MongoDB"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={learn}
                style={{ transformOrigin: "0 0 0" }}
                {...(learn ? { timeout: 1000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Webrebel 1; HTML, CSS & JavaScript"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={learn}
                style={{ transformOrigin: "0 0 0" }}
                {...(learn ? { timeout: 2000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="JavaScript & ES6"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={learn}
                style={{ transformOrigin: "0 0 0" }}
                {...(learn ? { timeout: 3000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="OOP"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={learn}
                style={{ transformOrigin: "0 0 0" }}
                {...(learn ? { timeout: 4000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Vue.js + SPA"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={learn}
                style={{ transformOrigin: "0 0 0" }}
                {...(learn ? { timeout: 5000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Angular 2+"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={learn}
                style={{ transformOrigin: "0 0 0" }}
                {...(learn ? { timeout: 6000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Bootstrap"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={learn}
                style={{ transformOrigin: "0 0 0" }}
                {...(learn ? { timeout: 7000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Tailwind Css"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={learn}
                style={{ transformOrigin: "0 0 0" }}
                {...(learn ? { timeout: 8000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Css preprocesory: Sass"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={learn}
                style={{ transformOrigin: "0 0 0" }}
                {...(learn ? { timeout: 9000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Git"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={learn}
                style={{ transformOrigin: "0 0 0" }}
                {...(learn ? { timeout: 10000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Adobe Illustrator, Photoshop"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={learn}
                style={{ transformOrigin: "0 0 0" }}
                {...(learn ? { timeout: 11000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Selenium"
                  color="primary"
                  clickable={true}
                />
              </Grow>
            </div>
          ) : (
            <div></div>
          )}
          {mastery ? (
            <div>
              <Grow
                in={mastery}
                style={{ transformOrigin: "0 0 0" }}
                {...(mastery ? { timeout: 0 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Úvod do OOP v JavaScripte & jQuery - itNetwork.cz"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={mastery}
                style={{ transformOrigin: "0 0 0" }}
                {...(mastery ? { timeout: 1000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Praktický úvod do Vue & Vue 3 prakticky - VzhuruDolu.cz"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={mastery}
                style={{ transformOrigin: "0 0 0" }}
                {...(mastery ? { timeout: 2000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Intro to Vue 2 & Vue 3 - VueMastery"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={mastery}
                style={{ transformOrigin: "0 0 0" }}
                {...(mastery ? { timeout: 3000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Real World Vue 3 & Tourin Vue Router"
                  color="primary"
                  clickable={true}
                />
              </Grow>
              <Grow
                in={mastery}
                style={{ transformOrigin: "0 0 0" }}
                {...(mastery ? { timeout: 4000 } : {})}
              >
                <Chip
                  variant="outlined"
                  size="small"
                  label="Vue 3 Forms"
                  color="primary"
                  clickable={true}
                />
              </Grow>
            </div>
          ) : (
            <div></div>
          )}
        </Grid>
      </div>
    </>
  );
};
