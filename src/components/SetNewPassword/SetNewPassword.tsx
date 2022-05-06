import React, { useState } from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { validation } from "./validate";
import ISetNewPassword from "./SetNewPassword.interface";
import { SetNewPass } from "services/user.service";
import { paths } from "config/paths";
import { Navbar } from "components";
import { Title, ButtonForm, Footer } from "../ChangePassword/ChangePassword.style";
import { Input, IconPassword, IconText, LogoPage, IconEye, IconEyeHide, Line, Toast } from "styles";
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
  const navigate = useNavigate();

  const [passShown, setPassShown] = useState(false);
  const togglePass = () => {
    setPassShown((prev) => !prev);
  };

  const [conPassShown, setConPassShown] = useState(false);
  const toggleConPass = () => {
    setConPassShown((prev) => !prev);
  };

  const initialValues: ISetNewPassword = {
    newPassword: "",
    confirmNewPassword: "",
  };

  return (
    <>
      <Navbar />
      <Formik
        validationSchema={validation()}
        initialValues={initialValues}
        onSubmit={({ newPassword, confirmNewPassword }: ISetNewPassword) => {
          SetNewPass(newPassword, confirmNewPassword).then(
            () => {
              setTimeout(() => {
                navigate(paths.login, { replace: true });
              }, 2000);
              toast.success(t`setNewPassword.success`);
            },
            ({ response: { status } }) =>
              toast.error(status === 400 ? t`setNewPassword.badRequest` : t`setNewPassword.error`),
          );
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <LoginForm>
              <LogoPage />

              <Title>{t`setNewPassword.title2`}</Title>

              <LabelStyle htmlFor="newPassword">
                <IconText />
                {t`setNewPassword.setNewPassword`}
              </LabelStyle>
              <View>
                <Input
                  type={passShown ? "text" : "password"}
                  name="newPassword"
                  autoCapitalize="off"
                  autoCorrect="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPassword}
                  placeholder={t`setNewPassword.setNewPasswordPlaceholder`}
                  id="newPassword"
                />
                {values.newPassword.length > 0 ? (
                  <>{passShown ? <IconEye onClick={togglePass} /> : <IconEyeHide onClick={togglePass} />} </>
                ) : (
                  ""
                )}
              </View>
              <StyledInlineErrorMessageForm>
                {errors.newPassword && touched.newPassword && errors.newPassword}
              </StyledInlineErrorMessageForm>

              <LabelStyle htmlFor="confirmNewPassword">
                <IconPassword />
                {t`setNewPassword.confirmPassword`}
              </LabelStyle>
              <View>
                <Input
                  type={conPassShown ? "text" : "password"}
                  name="confirmNewPassword"
                  autoCapitalize="off"
                  autoCorrect="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmNewPassword}
                  placeholder={t`setNewPassword.confirmPasswordPlaceholder`}
                  id="confirmNewPassword"
                />
                {values.confirmNewPassword.length > 0 ? (
                  <>{conPassShown ? <IconEye onClick={toggleConPass} /> : <IconEyeHide onClick={toggleConPass} />} </>
                ) : (
                  ""
                )}
              </View>
              <StyledInlineErrorMessageForm>
                {errors.confirmNewPassword && touched.confirmNewPassword && errors.confirmNewPassword}
              </StyledInlineErrorMessageForm>

              <ButtonForm type="submit" disabled={!isValid}>
                {t`setNewPassword.button2`}
              </ButtonForm>
              <Toast />
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