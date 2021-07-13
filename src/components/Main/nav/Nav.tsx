import React from "react";
import Grid from "@material-ui/core/Grid";
import { NavAbout } from "./NavAbout";
import { NavCv } from "./NavCv";
import { NavForm } from "./NavForm";

export const Nav: React.FC = () => {
  return (
    <Grid
      spacing={3}
      style={{ marginTop: 20 }}
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <NavAbout/>
      <NavCv/>
      <NavForm/>
    </Grid>
  );
};
