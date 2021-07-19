import React from "react";
import { NavAbout } from "../about/NavAbout";
import { NavCv } from "../cv/NavCv";
import { NavForm } from "../form/NavForm";

export const Nav: React.FC = () => {
  return (
    <>
      <NavAbout />
      <NavCv />
      <NavForm />
    </>
  );
};
