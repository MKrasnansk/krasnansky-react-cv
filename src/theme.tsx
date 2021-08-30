import { teal } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#ccc",
			dark: "#002884",
			contrastText: "#fff",
			light: "#757ce8",
		},
		secondary: teal,
		error: {
			main: "#ccc",
		},
		text: {
			primary: "#d2cccc",
			secondary: "#272727",
			disabled: "#333",
			hint: "#b39c9c",
		},
	},
	transitions: {
		create: () => "none",
	},
});
