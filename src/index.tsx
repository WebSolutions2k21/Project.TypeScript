import React from "react";
import ReactDOM from "react-dom";
import { Suspense } from "react";
import "./i18n";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "state/store";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="...is loading">
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root"),
);
