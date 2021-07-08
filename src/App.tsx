import * as React from "react";
import "./App.scss";
// import { FooterLayout } from "./components/FooterLayout";
import { HeaderLayout } from "./components/HeaderLayout";
import { MainLayout } from "./components/MainLayout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ccc",
    },
    secondary: teal,
  },
});
export const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container style={{ background: "#464646" }} maxWidth={false}>
        <Typography
          component="div"
          style={{ backgroundColor: "#ccc", height: "100%", width: "100%" }}
        >
          <ThemeProvider theme={theme}>
            <div className="App">
              <header>
                <HeaderLayout />
              </header>
              <body style={{ background: "#333" }}>
                <MainLayout />
              </body>
              <footer>{/* <FooterLayout /> */}</footer>
            </div>
          </ThemeProvider>
        </Typography>
      </Container>
    </>
  );
};
