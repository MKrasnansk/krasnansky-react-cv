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
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import { Curiculum } from "../Curiculum";

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
          <Curiculum />
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
                expandIcon={<FormatAlignJustifyIcon color="secondary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Grid container direction="row">
                  <Typography variant="h5" component="h2">
                    Zivotopis
                  </Typography>
                </Grid>
                <Typography component="h4">My Curriculum vitae</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Curiculum />
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
