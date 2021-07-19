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
  Grid,
  Typography,
} from "@material-ui/core";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import React, { useState } from "react";
import { theme } from "../../../theme";
import { About } from "./About";
import { AboutDialog } from "./AboutDialog";

export const NavAbout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  return (
    <>
      <Container>
        <AboutDialog isOpen={isOpen} onNo={closeDialog} />
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
                  expandIcon={<FingerprintIcon color="secondary" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Grid container direction="row">
                    <Typography variant="h5" component="h2">
                      About me
                    </Typography>
                  </Grid>
                  <Typography component="h4">Junior web developer </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <About />
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={openDialog}
            >
              Read more
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};
