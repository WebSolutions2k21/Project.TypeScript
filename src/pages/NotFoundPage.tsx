import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "components/Navbar/Navbar";

import { Line, Page404 } from "../styles";
import { Footer, FooterWrapperLeft, FooterWrapperRight, Header, LinkFooter } from "styles/stylesPages/HomePage.style";
import { Page404Wrapper } from "styles/stylesPages/Page404.style";
import { paths } from "config/paths";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <Page404Wrapper>
        <Page404 />
        <Header>{t("404page.page")}</Header>
        <Footer>
          <FooterWrapperLeft>
            <LinkFooter to={paths.signUp}>{t`footer.createAccount`}</LinkFooter>
          </FooterWrapperLeft>
          <Line />
          <FooterWrapperRight>
            <LinkFooter to={paths.sendNewPassword}>{t`footer.forgotPassword`}</LinkFooter>
          </FooterWrapperRight>
        </Footer>
      </Page404Wrapper>
    </>
  );
};
