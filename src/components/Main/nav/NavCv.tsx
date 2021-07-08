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
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
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
export const NavCv: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Card className={classes.root}>
        <Link to="/cv" />
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Grid container spacing={2} direction="row-reverse">
                <FormatAlignJustifyIcon color="secondary" />
              </Grid>
              Zivotopis
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
