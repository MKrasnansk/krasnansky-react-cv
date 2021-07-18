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
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import { Curiculum } from "../Curiculum";
import { theme } from "../../../theme";

export const NavCv: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Container>
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
        <Card
          style={{
            background: theme.palette.text.disabled,
            marginBottom: "10px",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Accordion style={{ background: "none" }}>
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
                  <Typography component="h4">Curriculum vitae</Typography>
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
      </Container>
    </>
  );
};
