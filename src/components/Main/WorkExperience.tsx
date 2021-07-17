import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";

export const WorkExperience: React.FC = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Card
        style={{
          marginBottom: 50,
          background: "none",
          maxWidth: "50%",
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
    </Grid>
  );
};
