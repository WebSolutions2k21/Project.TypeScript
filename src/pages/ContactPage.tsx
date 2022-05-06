import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "components/Navbar/Navbar";
import ContactForm from "components/ContactForm/ContactForm";
import { LogoPage } from "styles";
import { ContactPageContainer } from "styles/stylesPages/ContacPage.style";

export const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar namePage={t("navbar.contact")} />
      <ContactPageContainer>
        <LogoPage />
        <ContactForm />
      </ContactPageContainer>
    </>
  );
};
