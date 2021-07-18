import React from "react";
import { NavAbout } from "./NavAbout";
import { NavCv } from "./NavCv";
import { NavForm } from "./NavForm";

export const Nav: React.FC = () => {
  return (
    <>
      <NavAbout />
      <NavCv />
      <NavForm />
    </>
  );
};
