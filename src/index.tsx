import React from "react";
import ReactDOM from "react-dom";
import { Suspense } from "react";
import "./i18n";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="...is loading">
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root"),
);
