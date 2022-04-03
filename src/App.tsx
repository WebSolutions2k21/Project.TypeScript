import React from "react";

import { ThemeProvider } from "styled-components";
import { RegistrationForm } from "./components";
import Footer from "components/Footer";
import GlobalStyles from "components/styles/Global";

import Login from "components/Login/LoginForm";

export const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Login />
      <RegistrationForm />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
