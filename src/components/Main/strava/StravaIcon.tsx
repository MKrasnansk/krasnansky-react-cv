import React from "react";
import { Box } from "@material-ui/core";
import stravaLogo from "../../../assets/img/Strava_Logo.svg";
import stravaBtn from "../../../assets/img/btn_strava_connectwith_light.svg";
import stravaApiLogo from "../../../assets/img/api_logo_pwrdBy_strava_horiz_gray.svg";
export const StravaIcon: React.FC = () => {
	return (
		<>
			<Box style={{ width: 100 }}>
				<img src={stravaLogo} alt="strava" />
			</Box>
		</>
	);
};
export const StravaBtnIcon: React.FC = () => {
	return (
		<>
			<Box style={{ width: 100 }}>
				<img src={stravaBtn} alt="strava" />
			</Box>
		</>
	);
};
export const StravaApiLogoIcon: React.FC = () => {
	return (
		<>
			<Box style={{ width: 100 }}>
				<img src={stravaApiLogo} alt="strava" />
			</Box>
		</>
	);
};
