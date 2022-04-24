import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { login } from "services/auth.service";
import { Button, Input, IconEye, IconPassword, IconText, LogoPage, IconEyeHide, Toast, Line } from "styles";
import {
  LoginForm,
  StyledInlineErrorMessageForm,
  View,
  LabelStyle,
  Footer,
  FooterWrapperLeft,
  LinkFooter,
  FooterWrapperRight,
} from "./Login.style";
import ILogin from "./Login.interface";
import { paths } from "config/paths";
import { Navbar } from "components";

export const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  let navigate = useNavigate();

  const togglePassword = () => {
    setPasswordShown((prev) => !prev);
  };

  const { t } = useTranslation();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t`user.email.validation.format`)
      .required(t`user.email.validation.requied`),
    password: Yup.string().required(t`user.password.validation.requied`),
  });

  const initialValues: ILogin = {
    email: "",
    password: "",
  };

  return (
    <>
      <Navbar />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          login(values).then(
            ({ mentor }) => {
              setTimeout(() => {
                mentor ? navigate(paths.mentorProfile) : navigate(paths.myProfile);
              }, 1500);
              toast.success(t`toast.login.success`);
            },
            (error) => {
              console.log("error", error.response.status);
              console.log("error", error.response.status);
              switch (error.response.status) {
                case 400:
                  return toast.error(t`toast.login.validation`);
                case 404:
                  return toast.error(t`toast.login.notFound`);
                case 423:
                  return toast.error(t`toast.login.locked`);
                default:
                  return toast.error(t`toast.login.error`);
              }
            },
          );
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <LoginForm>
              <LogoPage />
              <LabelStyle htmlFor="email">
                <IconText />
                {t`user.email.name`}
              </LabelStyle>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder={t`user.email.placeholder`}
                id="email"
              />
              <StyledInlineErrorMessageForm>
                {errors.email && touched.email && errors.email}
              </StyledInlineErrorMessageForm>

              <LabelStyle htmlFor="password">
                <IconPassword />
                {t`user.password.name`}
              </LabelStyle>
              <View>
                <Input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder={t`user.password.placeholder`}
                  id="password"
                />
                {values.password.length > 0 ? (
                  <>{passwordShown ? <IconEye onClick={togglePassword} /> : <IconEyeHide onClick={togglePassword} />}</>
                ) : (
                  ""
                )}
              </View>
              <StyledInlineErrorMessageForm>
                {errors.password && touched.password && errors.password}
              </StyledInlineErrorMessageForm>

              <ButtonForm type="submit" disabled={!isValid}>
                {t`button.login`}
              </ButtonForm>
              <Toast />
              <Footer>
                <FooterWrapperLeft>
                  <LinkFooter to={paths.signUp}>{t`footer.createAccount`}</LinkFooter>
                </FooterWrapperLeft>
                <Line />
                <FooterWrapperRight>
                  <LinkFooter to={paths.sendNewPassword}>{t`footer.forgotPassword`}</LinkFooter>
                </FooterWrapperRight>
              </Footer>
            </LoginForm>
          </Form>
        )}
      </Formik>
    </>
  );
};
