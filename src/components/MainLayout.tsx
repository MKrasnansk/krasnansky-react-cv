import * as React from "react";
import { Nav } from "./Main/nav/Nav";
import HeaderChip from "./Main/HeaderChip";
import { Oclock } from "./Main/Oclock";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {  Box, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import { GalleryCard } from "./Main/GalleryCard";
import { Certification } from "./Main/Certification";
import { OtherChips } from "./Main/OtherChips";
import { NextGoals } from "./Main/NextGoals";
import { HeaderMain } from "./Header/HeaderMain";
import { SocialIcon } from "./Main/SocialIcon";
import { Fffoter } from "./Footer/Fffoter";
import { WorkExperience } from "./Main/WorkExperience";
import { StravaApi } from "./Main/strava/StravaApi";

export const MainLayout: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ccc",
      },
      secondary: teal,
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Container disableGutters={false} maxWidth="lg">
            <Typography
              component="div"
              style={{
                backgroundColor: "#272727",
                height: "100%",
                padding: "0 5rem",
              }}
            >
              <main>
                <header>
                  <Oclock />
                  <HeaderMain />
                </header>
                <article>
                  <Nav />
                  <HeaderChip />
                  <OtherChips />
                  <Box textAlign="center">
                    <h3>My works</h3>
                    <GalleryCard />
                  </Box>
                  <Box textAlign="center">
                    <h3>My mastered courses.</h3>
                    <Certification />
                  </Box>
                  <Box margin="2" textAlign="center">
                    <h3>My next goals.</h3>
                    <NextGoals />
                  </Box>
                  <WorkExperience />
                </article>
              </main>
              <footer>
                <SocialIcon />
                <StravaApi />
                <Fffoter />
              </footer>
            </Typography>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
};
