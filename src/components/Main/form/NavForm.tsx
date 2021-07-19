import React, { useState } from "react";
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
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { theme } from "../../../theme";
import { ContactForm } from "./ContactForm";
import { FormDialog } from "./FormDialog";


export const NavForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <Container>
        <FormDialog isOpen={isOpen}  onNo={closeDialog} />
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
                >
                  <Grid container direction="row">
                    <Typography variant="h5" component="h2">
                      Contact form
                    </Typography>
                  </Grid>
                  <Typography component="h4">
                    I will be grateful for your message.
                  </Typography>
                </AccordionSummary>
              </CardActionArea>
              <AccordionDetails>
                <ContactForm />
              </AccordionDetails>
            </Accordion>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={openDialog}>
              Explore form
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};
