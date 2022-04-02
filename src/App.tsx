import React from 'react';
import {ThemeProvider} from 'styled-components'

import { RegistrationForm } from "./components/Registration";
import Footer from "components/Footer";
import Login from 'components/Login/Login';
import GlobalStyles from 'components/styles/Global';
import Header from 'components/Header';


export const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}


function App() {

  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyles/>
      <Header />
      hello
      <Login/>
      <RegistrationForm />
      <Footer />
    </ThemeProvider>
  );

}

export default App;
