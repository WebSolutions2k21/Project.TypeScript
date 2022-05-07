import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import { paths } from "config/paths";
import {
  ContactFormContainer,
  Header,
  LabelStyle,
  NameDescContainer,
  Paragraf,
  Input,
  LabelContainer,
} from "./ContactForm.style";
import { Button, IconText, Line } from "styles";
import { Footer, FooterWrapperLeft, FooterWrapperRight, LinkFooter } from "styles/stylesPages/HomePage.style";

export const ContactForm = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xqkngaqb");

  if (state.succeeded) {
    return <Paragraf>{t`contactpage.text3`}</Paragraf>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ContactFormContainer>
          <Header>{t`contactpage.h1`}</Header>
          <LabelContainer>
            <LabelStyle htmlFor="email">
              <NameDescContainer>
                <IconText />
                <Paragraf>{t`contactpage.text1`}</Paragraf>
              </NameDescContainer>
            </LabelStyle>
            <Input id="email" type="email" name="email" placeholder={t`contactpage.emailplace`} />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <LabelStyle htmlFor="message">
              <NameDescContainer>
                <IconText />
                <Paragraf>{t`contactpage.text2`}</Paragraf>
              </NameDescContainer>
            </LabelStyle>
            <Input id="message" name="message" placeholder={t`contactpage.messageplace`} />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </LabelContainer>
          <Button type="submit" disabled={state.submitting}>
            {t`contactpage.button`}
          </Button>
        </ContactFormContainer>
        <Footer>
          <FooterWrapperLeft>
            <LinkFooter to={paths.signUp}>{t`footer.createAccount`}</LinkFooter>
          </FooterWrapperLeft>
          <Line />
          <FooterWrapperRight>
            <LinkFooter to={paths.home}>{t`footer.homePage`}</LinkFooter>
          </FooterWrapperRight>
        </Footer>
      </form>
    </>
  );
};
