import { createTheme } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

export const theme = createTheme({
    palette: {
      primary: {
        main: "#ccc",
      },
      secondary: teal,
      error: {
        main: "#ccc",
      },
      text: {
          secondary: '#272727',
          disabled: '#333'
      }
    },
  });