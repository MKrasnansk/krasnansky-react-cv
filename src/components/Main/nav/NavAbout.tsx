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
import FingerprintIcon from "@material-ui/icons/Fingerprint";
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
export const NavAbout: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Card className={classes.root}>
        <Link to="/" />
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Grid container spacing={2} direction="row-reverse">
                <FingerprintIcon color="secondary" />
              </Grid>
              About me
            </Typography>
            <Typography variant="body2" color="secondary" component="p">
              Ahoj v oblasti webu a aplikaciji sa pohybujem už dva roky.
              Spočiatku som hľadal cestu, ako sa niekam dostať v tomto obore.
              Dnes som vo fáze, kde už viem zápasiť aj so zložitejšími procesmi.
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
