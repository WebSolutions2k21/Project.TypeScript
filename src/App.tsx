import React from "react";

import { ThemeProvider } from "styled-components";
// import { RegistrationForm } from "./components";
import Footer from "components/Footer";
import GlobalStyles from "components/styles/Global";

import Login from "components/Login/Login";

export const theme = {
  colors: {
    primary: "#d9248f",
    warning: "#FF0000",
    text: "#174C6F",
    body: "#fff"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Login />
       {/* <RegistrationForm /> */}
      <Footer /> 
    </ThemeProvider>
  );
}

export default App;
