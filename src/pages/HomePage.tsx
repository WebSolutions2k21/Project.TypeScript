
import React from "react";
import { useTranslation } from "react-i18next";
import { paths } from "config/paths";
import { BraincodeMain, Button, HatMain, Line, TeacherMain } from "../styles";
import {
  Footer,
  FooterWrapperLeft,
  FooterWrapperRight,
  Header,
  HomePageContainer,
  LinkButton,
  LinkFooter,
  PictureWrapper,
} from "styles/stylesPages/HomePage.style";
import { Navbar } from "components";

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <HomePageContainer>
        <BraincodeMain />
        <Header>{t("homepage.h1")}</Header>
        <Button>
          <LinkButton to={paths.login}>{t("homepage.button")}</LinkButton>
        </Button>
        <PictureWrapper>
          <TeacherMain />
          <HatMain />
        </PictureWrapper>
        <Header>{t("homepage.text")}</Header>
        <Footer>
          <FooterWrapperLeft>
            <LinkFooter to={paths.signUp}>{t`footer.createAccount`}</LinkFooter>
          </FooterWrapperLeft>
          <Line />
          <FooterWrapperRight>
            <LinkFooter to={paths.login}>{t`footer.login`}</LinkFooter>
          </FooterWrapperRight>
        </Footer>
      </HomePageContainer>
    </>
  );
};

