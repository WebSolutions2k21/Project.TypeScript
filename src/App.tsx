import React from "react";

import { ThemeProvider } from "styled-components";
import Footer from "components/Footer";
import { RegistrationForm, Login } from "components";
import {GlobalStyles, theme} from "components/styles/Global";




function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Login /> */}

      {/* <p>Registration</p> */}

      <RegistrationForm />
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
