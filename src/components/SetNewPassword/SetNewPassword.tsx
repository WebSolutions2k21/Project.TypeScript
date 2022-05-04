import React, { useState } from "react";
import { Formik, Form } from "formik";
// import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";

import { validation } from "./validate";
import ISetNewPassword from "./SetNewPassword.interface";
import { paths } from "config/paths";
import { Navbar } from "components";
import { Title, ButtonForm, Footer } from "./SetNewPassword.style";
import { Input, IconPassword, IconText, LogoPage, IconEye, IconEyeHide, Line } from "styles";
import {
  LoginForm,
  StyledInlineErrorMessageForm,
  LabelStyle,
  FooterWrapperLeft,
  LinkFooter,
  FooterWrapperRight,
  View,
} from "../Login/Login.style";

export const SetNewPassword = () => {
  const { t } = useTranslation();
  // let navigate = useNavigate();

  const [passShown, setPassShown] = useState(false);
  const togglePass = () => {
    setPassShown((prev) => !prev);
  };

  const [conPassShown, setConPassShown] = useState(false);
  const toggleConPass = () => {
    setConPassShown((prev) => !prev);
  };

  const initialValues: ISetNewPassword = {
    password: "",
    confirmpassword: "",
  };

  return (
    <>
      <Navbar />
      <Formik
        validationSchema={validation()}
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <LoginForm>
              <LogoPage />

              <Title>{t`setNewPassword.title`}</Title>

              <LabelStyle htmlFor="password">
                <IconText />
                {t`setNewPassword.setNewPassword`}
              </LabelStyle>
              <View>
                <Input
                  type={passShown ? "text" : "password"}
                  name="password"
                  autoCapitalize="off"
                  autoCorrect="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder={t`setNewPassword.setNewPasswordPlaceholder`}
                  id="password"
                />
                {values.password.length > 0 ? (
                  <>{passShown ? <IconEye onClick={togglePass} /> : <IconEyeHide onClick={togglePass} />} </>
                ) : (
                  ""
                )}
              </View>
              <StyledInlineErrorMessageForm>
                {errors.password && touched.password && errors.password}
              </StyledInlineErrorMessageForm>

              <LabelStyle htmlFor="confirmpassword">
                <IconPassword />
                {t`setNewPassword.confirmPassword`}
              </LabelStyle>
              <View>
                <Input
                  type={conPassShown ? "text" : "password"}
                  name="confirmpassword"
                  autoCapitalize="off"
                  autoCorrect="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmpassword}
                  placeholder={t`setNewPassword.confirmPasswordPlaceholder`}
                  id="confirmPassword"
                />
                {values.confirmpassword.length > 0 ? (
                  <>{conPassShown ? <IconEye onClick={toggleConPass} /> : <IconEyeHide onClick={toggleConPass} />} </>
                ) : (
                  ""
                )}
              </View>
              <StyledInlineErrorMessageForm>
                {errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}
              </StyledInlineErrorMessageForm>

              <ButtonForm type="submit" disabled={!isValid}>
                {t`setNewPassword.button`}
              </ButtonForm>
              {/* <Toast /> */}
              <Footer>
                <FooterWrapperLeft>
                  <LinkFooter to={paths.login}>{t`registration.foot.login`}</LinkFooter>
                </FooterWrapperLeft>
                <Line />
                <FooterWrapperRight>
                  <LinkFooter to={paths.home}>{t`registration.foot.home`}</LinkFooter>
                </FooterWrapperRight>
              </Footer>
            </LoginForm>
          </Form>
        )}
      </Formik>
    </>
  );
};
