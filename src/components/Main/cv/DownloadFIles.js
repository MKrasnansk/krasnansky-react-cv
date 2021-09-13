import React from "react";
import { Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import { useFileDownloader } from "../../../hooks/useFileDownloader";
import GetAppIcon from "@material-ui/icons/GetApp";
import { files } from "../../Downloader";

export const DownloadFiles = () => {
	const [downloadFile, downloaderComponentUI] = useFileDownloader();
	const download = (file) => downloadFile(file);
	return (
		<>
			<Grid container item justifyContent="center" style={{ marginTop: 20 }} alignItems="center">
				{files.map((file, idx) => (
					<Card key={idx}>
						<CardContent style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
							<Typography>Moje CV si môžte stiahnut ako PDF</Typography>
						</CardContent>
						<CardActions disableSpacing style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
							<GetAppIcon onClick={() => download(file)} />
						</CardActions>
					</Card>
				))}
				{downloaderComponentUI}
			</Grid>
		</>
	);
};
