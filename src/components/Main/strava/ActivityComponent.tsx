import {
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
      textAlign: 'center',
      background: "#2f2f2f",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {type}
          </Typography>
          <Typography variant="h5" component="h2">
            {distance}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {time}
          </Typography>
          <Typography variant="body2" component="p">
            {temp}
          </Typography>
        </CardContent>
      </Card>
  );
};
