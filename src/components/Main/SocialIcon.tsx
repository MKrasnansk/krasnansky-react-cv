import React from "react";
import { Box, Fab, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { StravaIcon } from "./StravaIcon";
export const SocialIcon: React.FC = () => {
  return (
    <>
      <Grid container item xs={12} justifyContent="center">
        <Box style={{ position: "relative" }}>
          <Fab
            href={"https://www.facebook.com/miso.krasnansky/"}
            size="small"
            variant="round"
          >
            <FacebookIcon />
          </Fab>
          <Fab
            href={"https://www.instagram.com/fafo_oo/"}
            size="small"
            variant="round"
          >
            <InstagramIcon />
          </Fab>
          <Fab size="large" href={"https://www.strava.com/athletes/9737766"}>
            <StravaIcon />
          </Fab>
          <Fab
            href={
              "https://www.linkedin.com/in/michal-kras%C5%88ansk%C3%BD-24a4b41b0/"
            }
            size="small"
            variant="round"
          >
            <LinkedInIcon />
          </Fab>
          <Fab
            href={"https://github.com/MKrasnansk"}
            size="small"
            variant="round"
          >
            <GitHubIcon />
          </Fab>
        </Box>
      </Grid>
    </>
  );
};
