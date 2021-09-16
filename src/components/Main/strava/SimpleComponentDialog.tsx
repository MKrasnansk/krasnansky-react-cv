import { Card, CardActions, CardContent, Dialog, DialogTitle, Grid, Link, List, ListItem, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { StravaApiLogoIcon } from "../../Main/strava/StravaIcon";
interface Props {
	open: boolean;
	selectedValue: string;
	onClose: (value: string) => void;
	type: string;
	distance: string;
	temp: string;
	time: string;
	date: string;
	id: string;
	image: any;
	access: string;
}

export const SimpleComponentDialog = (props: Props) => {
	const { onClose, selectedValue, open, id, distance, temp, time, date, type, image, access } = props;
	const [allLaps, setAllLaps] = useState<any[]>([]);
	const handleClose = () => {
		onClose(selectedValue);
	};

	const fetchLap = useCallback(
		async (e: string) => {
			const laps: any[] = [];
			await axios.get(`https://www.strava.com/api/v3/activities/${id}/laps?access_token=${access}`).then((res) => {
				const data = res.data;
				for (let i = 0; i < data.length; i++) {
					const e = data[i];
					laps.push(e);
				}
			});

			setAllLaps(laps);
		},
		[id, access],
	);

	useEffect(() => {
		if (open) {
			fetchLap(id);
		}
	}, [open, id, fetchLap]);
	const elapsedTime = (e: any) => {
		let t = e / 60;
		let min = Math.floor(t);
		let sec: number | string = Math.floor(60 * (t - min));
		if (sec < 10) {
			sec = `0${sec}`;
		}
		const time = `${min}:${sec} min.`;
		return time;
	};

	return (
		<Dialog scroll="body" onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
			<DialogTitle id="simple-dialog-title">My strava activity from {date}</DialogTitle>
			<Card key={id}>
				{image()}
				<CardContent>
					<Grid container direction="column" style={{}} alignContent="center">
						<Typography>Date activity: {date}</Typography>
						<Typography>Type activity: {type}</Typography>
						<Typography>Distance: {distance}</Typography>
						<Typography>Average pace: {temp}</Typography>
						<Typography>Time: {time}</Typography>
						<List>
							{allLaps.map((item) => (
								<ListItem key={item.id}>
									<Typography>
										{item.name} | {(item.distance / 1000).toFixed(2) + " km"} | {elapsedTime(item.elapsed_time)}
									</Typography>
								</ListItem>
							))}
						</List>
					</Grid>
				</CardContent>
				<CardActions>
					<Grid container justifyContent="center" alignItems="center">
						<Link underline="none" href="https://www.strava.com/athletes/9737766">
							<StravaApiLogoIcon />
						</Link>
					</Grid>
				</CardActions>
			</Card>
		</Dialog>
	);
};
