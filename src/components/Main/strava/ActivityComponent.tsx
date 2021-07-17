import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    fontSize: "10px",
    maxWidth: "100px",
    textAlign: "center",
    background: "#2f2f2f",
  },
});

interface Props {
  type: string;
  distance: string;
  temp: string;
  time: string;
}

export const ActivityComponent: React.FC<Props> = (props) => {
  const { type, distance, temp, time } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="caption">{type}</Typography> <br />
        <Typography variant="caption" color="error">
          {distance}
        </Typography>{" "}
        <br />
        <Typography variant="caption">{time}</Typography>
        <br />
        <Typography variant="caption" color="error">
          {temp}
        </Typography>
      </CardContent>
    </Card>
  );
};
