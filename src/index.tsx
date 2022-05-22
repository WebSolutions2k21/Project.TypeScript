import React from "react";
import ReactDOM from "react-dom";
import { Suspense } from "react";
import "./i18n";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { store } from "app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback="...is loading">
        <Router>
          <App />
        </Router>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
