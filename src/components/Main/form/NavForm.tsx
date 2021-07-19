import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { theme } from "../../../theme";
import { ContactForm } from "./ContactForm";

export const NavForm: React.FC = () => {
  return (
    <>
      <Container>
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
                  <Grid container alignContent="center" direction="row">
                    <Typography variant="h5" component="h2">
                      Contact me
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
        </Card>
      </Container>
    </>
  );
};
