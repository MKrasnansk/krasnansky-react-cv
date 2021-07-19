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
  date: string
}

export const ActivityComponent: React.FC<Props> = (props) => {
  const { type, distance, temp, time, date } = props;
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent style={{padding: '10px'}}>
          <Typography variant="caption">{date}</Typography> <br />
          <Typography  color="error" variant="caption">{type}</Typography> <br />
          <Typography variant="caption">
            {distance}
          </Typography>{" "}
          <br />
          <Typography  color="error" variant="caption">{time}</Typography>
          <br />
          <Typography variant="caption">
            {temp}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
