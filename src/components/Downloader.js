import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, Container, LinearProgress, Typography } from "@material-ui/core";
import axios from "axios";

export const files = [
	{
		name: "cv-Krasnansky.pdf",
		thumb: "https://files.fm/down.php?cf&i=p9rpfs95k&n=cv-krasnansky-21-sk.pdf",
		file: "https://files.fm/down.php?cf&i=p9rpfs95k&n=cv-krasnansky-21-sk.pdf" + Math.random(),
		filename: "cv-krasnansky.pdf",
	},
];
export const Downloader = (remove) => {
	return (
		<Container maxWidth="xs">
			<Card>
				<CardHeader>
					<Typography>Downloader</Typography>
				</CardHeader>
				<CardContent>
					{files.map((file, idx) => (
						<DownloadItem key={idx} removeFile={() => remove(file.dovnloadId)} {...file} />
					))}
				</CardContent>
			</Card>
		</Container>
	);
};
export const DownloadItem = ({ name, file, filename, removeFile }) => {
	const [downloadInfo, setDownloadInfo] = useState({
		progress: 0,
		completed: false,
		total: 0,
		loaded: 0,
	});
	useEffect(() => {
		const options = {
			onDownloadProgress: (progressEvent) => {
				const { loaded, total } = progressEvent;
				setDownloadInfo({
					progress: Math.floor((loaded * 100) / total),
					loaded,
					total,
					completed: false,
				});
			},
		};
		axios
			.get(file, {
				responseType: "blob",
				...options,
			})
			.then(function (response) {
				const url = window.URL.createObjectURL(
					new Blob([response.data], {
						type: response.headers["content-type"],
					}),
				);
				const link = document.createElement("a");
				link.href = url;
				link.setAttribute("download", filename);
				document.body.appendChild(link);
				link.click();
				setDownloadInfo((info) => ({
					...info,
					completed: true,
				}));
			});
	}, [file, filename]);

	const formatBytes = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
	return (
		<li>
			<Typography>{name}</Typography>
			{downloadInfo.loaded > 0 && (
				<>
					<span>{formatBytes(downloadInfo.loaded)}</span>/ {formatBytes(downloadInfo.total)}
				</>
			)}
			{downloadInfo.loaded === 0 && <>Initializing...</>}

			<div>{downloadInfo.completed && <span>Completed</span>}</div>
			<div>
				<LinearProgress variant="determinate" value={downloadInfo.progress} />
				{/* <ProgresBar variant="success" now={downloadInfo.progress} striped={true} label={`${downloadInfo.progress}%`} /> */}
			</div>
		</li>
	);
};
