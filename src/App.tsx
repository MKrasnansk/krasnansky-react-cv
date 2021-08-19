import React, { useEffect } from "react";
import { Box, CssBaseline, ThemeProvider } from "@material-ui/core";
import "./App.scss";
import { MainLayout } from "./components/MainLayout";
import { theme } from "./theme";
import axios, { AxiosResponse, AxiosTransformer } from "axios";

export const App: React.FC = () => {
  useEffect(() => {
    axios
      .get("https://nodemail-email.herokuapp.com/")
      .then(async (res: AxiosResponse<AxiosTransformer>) => {
        console.log(await res.status);
        await formLogs(res.status)
        
      });
  }, []);
  const formLogs = (event:number)=>{
    if (event === 200) {
      console.log('form is ready');
    }else{
      console.log('backend is asleep');
    }
  }
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
