import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";

import "./index.css";
import App from "./App";

import GlobalStyle from "./globalStyle";
import ModalsProvider from "./Modals/ModalsProvider";

ReactModal.setAppElement("#root");

ReactDOM.render(
  <ModalsProvider>
    <GlobalStyle />
    <App />
  </ModalsProvider>,
  document.getElementById("root")
);
