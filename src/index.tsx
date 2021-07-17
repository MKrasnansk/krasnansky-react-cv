import * as React from "react";
import { App } from "./App";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")  
);
