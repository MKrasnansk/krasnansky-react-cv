import { CardMedia, Container, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
  root: {
    background: "none",
  },
  media: {
    padding: 10,
    maxWidth: "100px",
    alignContent: "center",
    alignItems: "center",
  },
});
export const NextGoals: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <h3 style={{ textAlign: "center" }}>My next goals.</h3>
      <Grid direction="row" container justify="center">
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
      </Grid>
    </Container>
  );
};
