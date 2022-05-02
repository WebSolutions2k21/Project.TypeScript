import React, { useState } from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { validation } from "./validate";
import ISetNewPassword from "./SetNewPassword.interface";
import { changePassword } from "services/user.service";
import { paths } from "config/paths";
import { Navbar } from "components";
import { Title, ButtonForm, Footer } from "./SetNewPassword.style";
import { Input, IconPassword, IconText, LogoPageMedium, IconEye, IconEyeHide, Line, Toast } from "styles";
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

  const [oldPassShown, setOldPassShown] = useState(false);
  const toggleOldPass = () => {
    setOldPassShown((prev) => !prev);
  };

  const [passShown, setPassShown] = useState(false);
  const togglePass = () => {
    setPassShown((prev) => !prev);
  };

  const [conPassShown, setConPassShown] = useState(false);
  const toggleConPass = () => {
    setConPassShown((prev) => !prev);
  };

  const initialValues: ISetNewPassword = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  return (
    <>
      <Navbar />
      <Formik
        validationSchema={validation()}
        initialValues={initialValues}
        onSubmit={(values: ISetNewPassword) => {
          const { oldPassword, newPassword, confirmNewPassword } = values;
          changePassword(oldPassword, newPassword, confirmNewPassword).then(
            () => {
              setTimeout(() => {
                navigate(paths.login, { replace: true });
              }, 3000);
              toast.success(t`setNewPassword.success`);
            },
            ({ response: { status } }) =>
            console.log(status)
          )
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <LoginForm>
              <LogoPageMedium />

              <Title>{t`setNewPassword.title`}</Title>

              <LabelStyle htmlFor="oldPassword">
                <IconText />
                {t`setNewPassword.setOldPassword`}
              </LabelStyle>
              <View>
                <Input
                  type={oldPassShown ? "text" : "password"}
                  name="oldPassword"
                  autoCapitalize="off"
                  autoCorrect="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.oldPassword}
                  placeholder={t`setNewPassword.setOldPasswordPlaceholder`}
                  id="oldPassword"
                />
                {values.oldPassword.length > 0 ? (
                  <>{oldPassShown ? <IconEye onClick={toggleOldPass} /> : <IconEyeHide onClick={toggleOldPass} />} </>
                ) : (
                  ""
                )}
              </View>
              <StyledInlineErrorMessageForm>
                {errors.oldPassword && touched.oldPassword && errors.oldPassword}
              </StyledInlineErrorMessageForm>


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
                {t`setNewPassword.button`}
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
