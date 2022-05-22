import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Input, IconEye, IconPassword, IconText, LogoPage, IconEyeHide, Toast, Line } from "styles";
import {
  LoginForm,
  StyledInlineErrorMessageForm,
  View,
  LabelStyle,
  Footer,
  FooterWrapperLeft,
  LinkFooter,
  FooterWrapperRight,
  ButtonForm,
} from "./Login.style";
import ILogin from "./Login.interface";
import { paths } from "config/paths";
import { Navbar } from "components";
import { useLoginUserMutation } from "services/authApi";
import { useAppDispatch } from "app/hooks";
import { setUser } from "features/authSlice";

export const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [loginUser, { data: loginData, isSuccess: isLoginSuccess, isError: isLoginError, error: loginError }] =
    useLoginUserMutation();

  const togglePassword = () => {
    setPasswordShown((prev) => !prev);
  };

  const dispath = useAppDispatch();

  const { t } = useTranslation();
  let navigate = useNavigate();

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

  useEffect(() => {
    if (isLoginSuccess) {
      setTimeout(() => {
        dispath(setUser({ token: loginData.token, id: loginData.id, mentor: loginData.mentor }));
        loginData.mentor ? navigate(paths.mentorProfile) : navigate(paths.myProfile);
      }, 1500);

      toast.success(t`toast.login.success`);
    }
  }, [dispath, isLoginSuccess, loginData?.id, loginData?.mentor, loginData?.token, navigate, t]);

  useEffect(() => {
    if (isLoginError) {
      switch ((loginError as any).orginalStatus) {
        case 400:
          toast.error(t`toast.login.validation`);
          break;
        case 404:
          toast.error(t`toast.login.notFound`);
          break;
        case 423:
          toast.error(t`toast.login.locked`);
          break;
        default:
          toast.error(t`toast.login.error`);
      }
    }
  }, [isLoginError, loginError, t]);
  return (
    <>
      <Navbar />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={({ email, password }) => {
          loginUser({ email, password });
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, isSubmitting }) => (
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

              <ButtonForm type="submit" disabled={!isValid && !isSubmitting}>
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
