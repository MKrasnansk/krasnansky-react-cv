import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, CardMedia, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "none",
    flexGrow: 1,
  },
  media: {
    padding: 10,
    maxHeight: "20%",
    maxWidth: "20%",
    alignContent: "center",
    alignItems: "center",
  },
});
export const NextGoals: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      spacing={3}
      justify="center"
      alignItems="center"
    >
      <Grid item xs>
        <Box textAlign="center">
          <Card className={classes.root}>
            <CardContent>
              <Typography color="primary" gutterBottom>
                Senior React Developer
              </Typography>
            </CardContent>
            <Grid container justify="center">
              <CardMedia
                className={classes.media}
                component="img"
                image="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                title="nest"
              />
            </Grid>
          </Card>
        </Box>
      </Grid>
      <Grid item xs>
        <Box textAlign="center">
          <Card className={classes.root}>
            <CardContent>
              <Typography color="primary" gutterBottom>
                Senior Nest Developer
              </Typography>
            </CardContent>
            <Grid container justify="center">
              <CardMedia
                className={classes.media}
                component="img"
                image="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg"
                title="react"
              />
            </Grid>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};
