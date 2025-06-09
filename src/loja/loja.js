import React from "react";
import ReactDOM from "react-dom/client";
import "../loja/loja.css"; // CSS global
import App from "../loja/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);