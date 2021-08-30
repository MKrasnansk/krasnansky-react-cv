import React, { useEffect } from "react";
import { Box, CssBaseline, ThemeProvider } from "@material-ui/core";
import "./App.scss";
import { MainLayout } from "./components/MainLayout";
import { theme } from "./theme";
import axios, { AxiosResponse, AxiosTransformer } from "axios";

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
