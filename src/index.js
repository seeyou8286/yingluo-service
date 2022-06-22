import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Wenyue from "./font/WenYue_GuDianMingChaoTi_JRFC.otf";

const hashHistory = createBrowserHistory();

const theme = createTheme({
  typography: {
    fontFamily: "WenYue GuDianMingChaoTi JRFC" 
    // fontFamily: "FZXiaoBiaoSong-B05S",
  },
});

console.log("started");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter history={hashHistory}>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
