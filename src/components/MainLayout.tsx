import * as React from "react";
import { Box, Container } from "@material-ui/core";
import { Fffoter } from "./Footer/Fffoter";
import { HeaderMain } from "./Header/HeaderMain";
import { Certification } from "./Main/Certification";
import { GalleryCard } from "./Main/GalleryCard";
import { HeaderChip } from "./Main/HeaderChip";
import { Nav } from "./Main/nav/Nav";
import { NextGoals } from "./Main/NextGoals";
import { Oclock } from "./Main/Oclock";
import { OtherChips } from "./Main/OtherChips";
import { SocialIcon } from "./Main/SocialIcon";
import { StravaApi } from "./Main/strava/StravaApi";
import { WorkExperience } from "./Main/WorkExperience";

export const MainLayout: React.FC = () => {
  return (
    <div>
    <Container>
      <Box bgcolor="text.secondary">
        <main>
          <header>
            <Oclock />
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
          <Fffoter  />
        </footer>
      </Box>
    </Container>
    </div>
  );
};
