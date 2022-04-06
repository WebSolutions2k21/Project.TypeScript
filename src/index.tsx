import React from "react";
import ReactDOM from "react-dom";
import { Suspense } from "react";
import "./i18n";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root"),
);
