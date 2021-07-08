import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: "lg",
      background: "#2f2f2f",
      flexGrow: 1,
      marginTop: 10,
    },
  })
);
export const NavForm: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Card className={classes.root}>
        <Link to="/form" />
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Grid container spacing={2} direction="row-reverse">
                <FormatListBulletedIcon color="secondary" />
              </Grid>
              Kontaktný formular
            </Typography>

            <Typography variant="body2" color="secondary" component="p">
              Budem rád ak my pošlete správu. Či už len nejaký Váš postreh alebo
              pracovnú ponuku. Vopred vám veľmi ďakujem. Vážim si to.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Explore content
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
