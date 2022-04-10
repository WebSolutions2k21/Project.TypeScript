<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import axios from 'axios';

// import { RegistrationForm } from "./components/Registration";
// import Footer from "components/Footer";
import { AboutUsPage } from './pages';
import { paths } from './config/paths';
=======
import React from "react";

import { ThemeProvider } from "styled-components";
import Footer from "components/Footer";
import { RegistrationForm, Login } from "components";
import {GlobalStyles, theme} from "components/styles/Global";
>>>>>>> 491ee67006a55dc330acb280019458de9187db60




function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route
       path={paths.aboutUs}
        element={
          <AboutUsPage />
        }
      />
    </Routes>
    // <div>
    //   hello!
    //   <RegistrationForm />
    //   <Footer />
    // </div>
=======
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Login />

      <p>Registration</p>

      <RegistrationForm />
      <Footer />
    </ThemeProvider>
>>>>>>> 491ee67006a55dc330acb280019458de9187db60
  );
}

export default App;
