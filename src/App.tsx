import { Box, CssBaseline, ThemeProvider } from "@material-ui/core";
import * as React from "react";
import "./App.scss";
import { MainLayout } from "./components/MainLayout";
import { theme } from "./theme";

export const App: React.FC = () => {
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
