import { Card, CardActionArea, CardContent, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import FootballCelebraSvg from "../../../assets/img/FootballCelebraSvg";
import FreeStyleSvg from "../../../assets/img/FreeStyleSvg";
import SocSvg from "../../../assets/img/SocSvg";
import SprintSvg from "../../../assets/img/SprintSvg";
import { SimpleComponentDialog } from "./SimpleComponentDialog";

const useStyles = makeStyles({
	root: {
		fontSize: "10px",
		maxWidth: "100px",
		textAlign: "center",
		background: "#2f2f2f",
	},
});

interface Props {
	type: string;
	distance: string;
	temp: string;
	time: string;
	date: string;
	id: string;
	access: string;
}

export const ActivityComponent: React.FC<Props> = (props) => {
	const { type, distance, temp, time, date, id, access } = props;
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(id);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value: string) => {
		setOpen(false);
		setSelectedValue(value);
	};

	const imageFn = () => {
		const imgNum = Math.floor(Math.random() * 4);

		if (imgNum === 0) {
			return <SocSvg />;
		} else if (imgNum === 1) {
			return <FreeStyleSvg />;
		} else if (imgNum === 2) {
			return <SprintSvg />;
		} else {
			return <FootballCelebraSvg />;
		}
	};

	return (
		<>
			<SimpleComponentDialog id={id} access={access} image={imageFn} date={date} type={type} distance={distance} temp={temp} time={time} selectedValue={selectedValue} open={open} onClose={handleClose} />
			<Card className={classes.root}>
				<CardActionArea onClick={handleClickOpen}>
					<CardContent style={{ padding: "10px" }}>
						<Typography variant="caption">{date}</Typography> <br />
						<Typography color="error" variant="caption">
							{type}
						</Typography>{" "}
						<br />
						<Typography variant="caption">{distance}</Typography> <br />
						<Typography color="error" variant="caption">
							{time}
						</Typography>
						<br />
						<Typography variant="caption">{temp}</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	);
};
