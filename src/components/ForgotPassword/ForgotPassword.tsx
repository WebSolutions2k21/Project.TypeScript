import React from "react";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { Label, IconText, LogoPage, Toast, Line, InputAtCard } from "components/styles";
import { ButtonForm, ForgotPasswordForm, StyledInlineErrorMessageForm, Footer, CardForm } from "./ForgotPassword.style";
import { sendEmail } from "services/auth.service";

export const ForgotPassword = () => {
  const { t } = useTranslation();

  const initialValues: { email: string } = {
    email: "",
  };

  const emailValidation = Yup.string()
    .email(t`user.email.validation.format`)
    .required(t`user.email.validation.requied`);

  const onSubmit = async (formValue: { email: string }) => {
    const { email } = formValue;
    console.log("form values", formValue);
    await sendEmail(email).then(
      (res) => {
        //Navigate to user profile
        console.log("success", res);
        toast.success(t`toast.sendEmail.success`);
      },
      (error) => {
        const resMessage = (error.response && error.response.data) || error.message || error.toString();
        //

        toast.error(t`toast.sendEmail.error`);
        //
        console.log("error", error);
      },
    );
  };

  return (
    <Formik initialValues={initialValues} validationSchema={emailValidation} onSubmit={onSubmit}>
      {(formValue) => {
        return (
          <Form>
            <ForgotPasswordForm>
              <LogoPage></LogoPage>
              <CardForm>
                <Label htmlFor="email">
                  <IconText />
                  {t`user.email.name`}
                </Label>
                <InputAtCard
                  type="email"
                  name="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  autoComplete="email"
                  placeholder={t`user.email.placeholder`}
                />
                <ErrorMessage name="email">
                  {(msg) => <StyledInlineErrorMessageForm>{msg}</StyledInlineErrorMessageForm>}
                </ErrorMessage>
                <ButtonForm type="submit" disabled={!formValue.isValid}>
                  {t`button.sendEmail`}
                </ButtonForm>
              </CardForm>
              <Toast />
              <Footer>
                <a href="https://brain-code.netlify.app/">{t`footer.createAccount`}</a>
                <Line />
                <a href="https://brain-code.netlify.app/">{t`footer.homePage`}</a>
              </Footer>
            </ForgotPasswordForm>
          </Form>
        );
      }}
    </Formik>
  );
};
