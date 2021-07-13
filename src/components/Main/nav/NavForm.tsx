import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import { ContactForm } from "../ContactForm";

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
        <CardContent>
          <Accordion className={classes.root}>
            <CardActionArea>
              <AccordionSummary
                expandIcon={<FormatListBulletedIcon color="secondary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Grid container direction="row">
                  <Typography variant="h5" component="h2">
                    Kontaktný formular
                  </Typography>
                </Grid>
                <Typography component="h4">
                  Budem rád ak my pošlete správu.
                </Typography>
              </AccordionSummary>
            </CardActionArea>
            <AccordionDetails>
                <ContactForm  />
            </AccordionDetails>
          </Accordion>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Explore content
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
