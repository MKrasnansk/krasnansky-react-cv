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
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import { About } from "../About";

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
          <About />
        </DialogContent>
        <Button onClick={handleClose} color="primary" autoFocus>
            Ok
          </Button>
      </Dialog>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Accordion className={classes.root}>
              <AccordionSummary
                expandIcon={<FingerprintIcon color="secondary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Grid container direction="row">
                  <Typography variant="h5" component="h2">
                    About me
                  </Typography>
                </Grid>
                <Typography component="h4">
                  I am junior fulstack developer{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <About />
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleClickOpen}>
            Explore content
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
