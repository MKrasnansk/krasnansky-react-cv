import { teal } from "@material-ui/core/colors";
import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
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