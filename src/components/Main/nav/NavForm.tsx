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
  Container,
  Dialog,
  DialogContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { ContactForm } from "../ContactForm";
import { theme } from "../../../theme";

export const NavForm: React.FC = () => {
  const [openForm, setOpenForm] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpenForm = () => {
    setOpenForm(true);
  };
  const handleCloseForm = () => {
    setOpenForm(false);
  };
  return (
    <>
      <Container>
        <Dialog
          fullScreen={fullScreen}
          open={openForm}
          onClose={handleCloseForm}
          aria-labelledby="responsive-dialog-title"
          scroll="paper"
        >
          <DialogContent style={{ background: "#2f2f2f" }}>
            <ContactForm />
          </DialogContent>
          <Button onClick={handleCloseForm} color="primary" autoFocus>
            Close
          </Button>
        </Dialog>
        <Card
          style={{
            background: theme.palette.text.disabled,
            marginBottom: "10px",
          }}
        >
          <CardContent>
            <Accordion style={{ background: "none" }}>
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
            <Button size="small" color="primary" onClick={handleClickOpenForm}>
              Explore content
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};
