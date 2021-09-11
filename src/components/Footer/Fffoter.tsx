import { AppBar, Container, Grid, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export const Fffoter: React.FC = () => {
	return (
		<>
			<AppBar style={{ background: "none" }} position="static" color="primary">
				<Container maxWidth="xl">
					<Toolbar>
						<Grid container direction="row">
							<Typography variant="caption" color="inherit">
								© 2021 Júl | nodemailer | Strava API | Michal Krasňanský
							</Typography>
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};
