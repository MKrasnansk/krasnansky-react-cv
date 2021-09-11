import { Box, CssBaseline, ThemeProvider } from "@material-ui/core";
import axios, { AxiosResponse, AxiosTransformer } from "axios";
import React, { useEffect } from "react";
import "./App.scss";
import { MainLayout } from "./components/MainLayout";
import { theme } from "./theme";

export const App: React.FC = () => {
	useEffect(() => {
		axios.get("https://nodemail-email.herokuapp.com/").then(async (res: AxiosResponse<AxiosTransformer>) => {
			console.log("form status: ", res.status);
		});
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box bgcolor="text.disabled">
				<div className="App">
					<MainLayout />
				</div>
			</Box>
		</ThemeProvider>
	);
};
