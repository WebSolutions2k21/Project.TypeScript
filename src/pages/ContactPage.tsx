import React from "react";

import Navbar from "components/Navbar/Navbar";
import ContactForm from "components/ContactForm/ContactForm";
import { LogoPage } from "styles";
import { ContactPageContainer } from "styles/stylesPages/ContacPage.style";

export const ContactPage = () => {
  return (
    <>
      <Navbar />
      <ContactPageContainer>
        <LogoPage />
        <ContactForm />
      </ContactPageContainer>
    </>
  );
};
