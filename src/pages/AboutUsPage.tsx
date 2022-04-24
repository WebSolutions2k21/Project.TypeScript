import React from "react";
import { useTranslation } from "react-i18next";
import { paths } from "config/paths";
import {
  AboutUsPageContainer,
  DescriptionContainer,
  Footer,
  FooterWrapperLeft,
  FooterWrapperRight,
  Header,
  LinkFooter,
  ProfilDesc,
  ProfilDescContainer,
  ProfilDescText,
  WhiteCard,
} from "styles/stylesPages/AboutUsPage.style";
import { HatMainSmall, Line, LogoPageSmall, TeacherSmall } from "styles";
import { Navbar } from "components";

export const AboutUsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <AboutUsPageContainer>
        <LogoPageSmall />
        <DescriptionContainer>
          <Header>{t("aboutus.description")}</Header>
          <Header>{t("aboutus.h1")}</Header>
        </DescriptionContainer>
        <WhiteCard>
          <ProfilDescContainer>
            <TeacherSmall />
            <ProfilDesc>{t("aboutus.mentor")}</ProfilDesc>
          </ProfilDescContainer>
          <ProfilDescText>{t("aboutus.text1")} </ProfilDescText>
        </WhiteCard>
        <WhiteCard>
          <ProfilDescContainer>
            <HatMainSmall />
            <ProfilDesc>{t("aboutus.student")}</ProfilDesc>
          </ProfilDescContainer>
          <ProfilDescText>{t("aboutus.text2")} </ProfilDescText>
        </WhiteCard>
        <Footer>
          <FooterWrapperLeft>
            <LinkFooter to={paths.signUp}>{t`footer.createAccount`}</LinkFooter>
          </FooterWrapperLeft>
          <Line />
          <FooterWrapperRight>
            <LinkFooter to={paths.home}>{t`footer.homePage`}</LinkFooter>
          </FooterWrapperRight>
        </Footer>
      </AboutUsPageContainer>
    </>
  );
};
