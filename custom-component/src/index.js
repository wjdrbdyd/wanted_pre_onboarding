import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle";
const mainColor = {
  buttonColor: "#4900ce",
  boxShadow: [
    "0px 1px 2px black inset",
    "0px 2px 3px rgba(0, 0, 0, 0.5) inset",
  ],
  textShadow: "2px 3px 5px rgba(0, 0, 0, 0.5)",
  borderColor: "rgba(0, 0, 0, 0.2)",
};
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainColor}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
