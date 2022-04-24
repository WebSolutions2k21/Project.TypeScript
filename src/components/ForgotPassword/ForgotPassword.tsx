import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Label, IconText, LogoPage, Toast, Line, InputAtCard } from "styles";
import { ButtonForm, ForgotPasswordForm, StyledInlineErrorMessageForm, Footer, CardForm } from "./ForgotPassword.style";
import { sendEmail } from "services/user.service";
import { paths } from "config/paths";
import IForgotPassword from "./IForgotPassword.interface";
import { Navbar } from "components";

export const ForgotPassword = () => {
  const { t } = useTranslation();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required(t`user.email.validation.requied`)
      .email(t`user.email.validation.format`),
  });

  const initialValues: IForgotPassword = {
    email: ""
  };

  return (
    <>
    <Navbar />
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={(values) => {
          sendEmail(values).then(
            () => {
              toast.success(t`toast.sendEmail.success`);
            },
            (error) => {
              switch (error.response.data) {
                case 404:
                  return toast.error(t`toast.sendEmail.notFound`);
                default:
                  return toast.error(t`toast.sendEmail.error`);
              }
            },
          );
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => (
          <ForgotPasswordForm>
            <LogoPage />
            <Form noValidate onSubmit={handleSubmit}>
              <CardForm>
                <Label htmlFor="email">
                  <IconText />
                  {t`user.email.name`}
                </Label>
                <InputAtCard
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

                <ButtonForm type="submit" disabled={!isValid}>{t`button.sendEmail`}</ButtonForm>
              </CardForm>
              <Toast />
            </Form>

            <Footer>
              <Link to={paths.signUp}>{t`footer.createAccount`}</Link>
              <Line />
              <Link to={paths.home}>{t`footer.homePage`}</Link>
            </Footer>
          </ForgotPasswordForm>
        )}
      </Formik>
    </>
  );
};
