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
  const [openCv, setOpenCv] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const handleClickOpenCv = () => {
    setOpenCv(true);
  };

  const handleCloseCv = () => {
    setOpenCv(false);
  };
  return (
    <>
      <Container>
        <Dialog
          fullScreen={fullScreen}
          open={openCv}
          onClose={handleCloseCv}
          aria-labelledby="responsive-dialog-title"
          scroll="paper"
        >
          <DialogContent style={{ background: "#2f2f2f" }}>
            <Curiculum />
          </DialogContent>
          <Button onClick={handleCloseCv} color="primary" autoFocus>
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
            <Button size="small" color="primary" onClick={handleClickOpenCv}>
              Explore content
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};
