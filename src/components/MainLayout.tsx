import { Box, Container } from "@material-ui/core";
import * as React from "react";
import { Fffoter } from "./Footer/Fffoter";
import { SocialIcon } from "./Footer/SocialIcon";
import { HeaderMain } from "./Header/HeaderMain";
import { Certification } from "./Main/Certification";
import { GalleryCard } from "./Main/gallery/GalleryCard";
import { HeaderChip } from "./Main/HeaderChip";
import { Nav } from "./Main/nav/Nav";
import { NextGoals } from "./Main/NextGoals";
import { OtherChips } from "./Main/OtherChips";
import { StravaApi } from "./Main/strava/StravaApi";
import { WorkExperience } from "./Main/WorkExperience";

export const MainLayout: React.FC = () => {
  return (
    <div>
      <Container>
        <Box bgcolor="text.secondary">
          <main>
            <header>
              <HeaderMain />
            </header>
            <article>
              <Nav />
              <HeaderChip />
              <OtherChips />
              <GalleryCard />
              <Certification />
              <NextGoals />
              <WorkExperience />
            </article>
          </main>
          <footer>
            <SocialIcon />
            <StravaApi />
            <Fffoter />
          </footer>
        </Box>
      </Container>
    </div>
  );
};
