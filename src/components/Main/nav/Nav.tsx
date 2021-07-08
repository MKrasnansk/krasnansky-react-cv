import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NavAbout } from "./NavAbout";
import { NavCv } from "./NavCv";
import { NavForm } from "./NavForm";
import { Curiculum } from "../../views/Curiculum";
import { ContactForm } from "../../views/ContactForm";
import { AboutMe } from "../../views/AboutMe";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;
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
      <Router>
        <StyledLink to="/">
          <Grid container>
            <NavAbout />
          </Grid>
        </StyledLink>
        <StyledLink to="/cv">
          <Grid container zeroMinWidth>
            <NavCv />
          </Grid>
        </StyledLink>
        <StyledLink to="/form">
          <Grid container zeroMinWidth>
            <NavForm />
          </Grid>
        </StyledLink>
        <Switch>
          <Route component={AboutMe} path="/" exact />
          <Route component={Curiculum} path="/cv" />
          <Route component={ContactForm} path="/form" />
        </Switch>
      </Router>
    </Grid>
  );
};
