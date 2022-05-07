import React from "react";
import { useTranslation } from "react-i18next";
import { Navbar, ContactForm } from "components";
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
