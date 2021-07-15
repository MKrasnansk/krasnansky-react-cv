import { Box, Typography } from "@material-ui/core";
import React from "react";

export const WorkExperience: React.FC = () => {
  return (
    <Box style={{marginBottom:50}} textAlign="center">
      <h3>My work experience.</h3>
      <Typography color="secondary">
        Three months of practice in Ringier axel springer on post fulstack
        webdeveloper.
      </Typography>
    </Box>
  );
};
