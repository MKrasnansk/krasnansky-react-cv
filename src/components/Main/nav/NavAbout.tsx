import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Dialog,
  DialogContent,
  Grid,
   Typography,
  useMediaQuery,
} from "@material-ui/core";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import React, { useState } from "react";
import { theme } from "../../../theme";
import { About } from "../About";

export const NavAbout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
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
      <Card style={{ background: theme.palette.text.disabled, marginBottom: '10px' }}>
        <CardActionArea>
          <CardContent>
            <Accordion style={{ background: "none" }}>
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
                  Junior web developer{" "}
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
    </Container>
  );
};
