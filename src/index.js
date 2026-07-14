import App from "./App"
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global-styles.css";

const rootElement = document.querySelector("#root");

const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)