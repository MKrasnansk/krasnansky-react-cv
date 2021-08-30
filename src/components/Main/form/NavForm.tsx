import React, { Fragment } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Card, CardActionArea, CardContent, Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { theme } from "../../../theme";
import { ContactForm } from "./ContactForm";

export const NavForm: React.FC = () => {
	const desktop = useMediaQuery("(min-width:500px)");

	return (
		<Fragment>
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
								<AccordionSummary expandIcon={<FormatListBulletedIcon color="secondary" />}>
									<Grid container alignContent="center" direction="row">
										<Typography variant="h5" component="h2">
											Contact me
										</Typography>
									</Grid>
									{desktop && <Typography component="h4">I will be grateful for your message.</Typography>}
								</AccordionSummary>
							</CardActionArea>
							<AccordionDetails>
								<ContactForm />
							</AccordionDetails>
						</Accordion>
					</CardContent>
				</Card>
			</Container>
		</Fragment>
	);
};
