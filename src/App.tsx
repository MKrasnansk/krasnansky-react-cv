import { Box } from "@material-ui/core";
import * as React from "react";
import "./App.scss";
import { MainLayout } from "./components/MainLayout";
export const App: React.FC = () => {
  return (
    <Box bgcolor="text.disabled">
      <body className="App">
        <MainLayout />
      </body>
    </Box>
  );
};
