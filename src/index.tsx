import React from "react";
import ReactDOM from "react-dom";
import { Suspense } from "react";
import "./i18n";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root"),
);
