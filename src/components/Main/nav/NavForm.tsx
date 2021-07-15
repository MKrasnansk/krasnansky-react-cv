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
  Dialog,
  DialogContent,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
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
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        scroll="paper"
      >
        <DialogContent style={{ background: "#2f2f2f" }}>
          <ContactForm />
        </DialogContent>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </Dialog>
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
              <ContactForm />
            </AccordionDetails>
          </Accordion>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={handleClickOpen}>
            Explore content
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
