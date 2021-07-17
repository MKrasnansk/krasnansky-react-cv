import { Box, CssBaseline } from "@material-ui/core";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import "./App.scss";
import { MainLayout } from "./components/MainLayout";
import { theme } from "./theme";


export const App: React.FC = () => {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box bgcolor="text.disabled">
      <body className="App">
        <MainLayout />
      </body>
    </Box>
  </ThemeProvider>

  );
};

