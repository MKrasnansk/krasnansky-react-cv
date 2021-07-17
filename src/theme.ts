import { teal } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core";

const theme = createTheme({
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
  export default theme