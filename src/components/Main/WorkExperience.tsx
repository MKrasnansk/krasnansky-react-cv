import { Box, Typography } from "@material-ui/core";
import React from "react";

export const WorkExperience: React.FC = () => {
  return (
    <Box style={{marginBottom:50}} textAlign="center">
      <h3>My work experience.</h3>
      <Typography color="secondary">
        Just a three month praxes in Ringier axel springer on post fulstack
        webdeveloper.
      </Typography>
    </Box>
  );
};
