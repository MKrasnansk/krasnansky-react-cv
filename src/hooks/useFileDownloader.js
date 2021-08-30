import React, { useState } from "react";
import { Downloader } from "../components/Downloader";

export const useFileDownloader = () => {
	const [files, setFiles] = useState(() => []);
	const download = (file) => setFiles((fileList) => [...fileList, { ...file, downloadId: Math.random() }]);
	return [(e) => download(e), files.length > 0 ? <Downloader files={files} /> : null];
};
