import { Box, Fab, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import { StravaIcon } from "../Main/strava/StravaIcon";
export const SocialIcon: React.FC = () => {
	return (
		<>
			<Grid container item xs={12} justifyContent="center">
				<Box style={{ position: "relative" }}>
					<Fab size="small" href={"https://www.strava.com/athletes/9737766"}>
						<StravaIcon />
					</Fab>
					<Fab href={"https://www.linkedin.com/in/michal-kras%C5%88ansk%C3%BD-24a4b41b0/"} size="small" variant="circular">
						<LinkedInIcon />
					</Fab>
					<Fab href={"https://github.com/MKrasnansk"} size="small" variant="circular">
						<GitHubIcon />
					</Fab>
					<Fab href={"https://www.patreon.com/mkrasnansky"} size="small" variant="circular">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 612 792">
							<g>
								<path
									d="M390.6,129.2c-119.1,0-216,97-216,216.2c0,118.8,96.9,215.5,216,215.5c118.7,0,215.3-96.7,215.3-215.5
		C605.9,226.2,509.3,129.2,390.6,129.2L390.6,129.2z"
								/>
								<polygon points="6.1,705 111.6,705 111.6,129.2 6.1,129.2 6.1,705 	" />
							</g>
						</svg>
					</Fab>
					<Fab href={"https://www.instagram.com/fafo_oo/"} size="small" variant="circular">
						<InstagramIcon />
					</Fab>
					<Fab href={"https://www.facebook.com/miso.krasnansky/"} size="small" variant="circular">
						<FacebookIcon />
					</Fab>
				</Box>
			</Grid>
		</>
	);
};
