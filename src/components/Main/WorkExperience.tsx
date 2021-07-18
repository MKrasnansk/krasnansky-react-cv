import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { theme } from "../../theme";

export const WorkExperience: React.FC = () => {
  return (
    <Card
      style={{
        marginTop: '10px',
        marginBottom: '50px',
        background: theme.palette.text.disabled,
        textAlign: "center",
      }}
    >
      <CardContent>
        <h3>My work experience.</h3>
        <Typography color="secondary">
          Three months of practice in Ringier axel springer on post fulstack
          webdeveloper.
        </Typography>
      </CardContent>
    </Card>
  );
};
