import React, { useState } from "react";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { login } from "services/auth.service";
import {
  Button,
  Label,
  Input,
  IconEye,
  IconPassword,
  IconText,
  LogoPage,
  IconEyeHide,
  Toast,
  Line,
  Foot,
} from "components/styles";
import { LoginForm, StyledInlineErrorMessageForm, View } from "./Login.style";
import ILogin from "./Login.interface";


export const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown((prev) => !prev);
  };

  const { t } = useTranslation();

  const initialValues: ILogin = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t`user.email.validation.format`)
      .required(t`user.email.validation.requied`),
    password: Yup.string().required(t`user.password.validation.requied`),
  });

  const onSubmit = async (formValue: { email: string; password: string }) => {

    await login(formValue).then(
      () => {
        //Navigate to user profile
        toast.success(t`toast.login.success`);
      },
      (error) => {
        const resMessage = (error.response && error.response.data) || error.message || error.toString();
        switch (resMessage) {
          case '"password" length must be at least 8 characters long':
            return toast.error(t`toast.login.length`);
          default:
            return toast.error(t`toast.login.error`);
        }
      },
    );
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formValue) => {
        return (
          <Form>
            <LoginForm>
              <LogoPage></LogoPage>
              <Label htmlFor="email">
                <IconText />
                {t`user.email.name`}
              </Label>
              <Input
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
              <Label htmlFor="password">
                <IconPassword />
                {t`user.password.name`}
              </Label>
              <View>
                <Input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder={t`user.password.placeholder`}
                />
                {formValue.values.password.length > 0 ? (
                  <>
                    {passwordShown ? <IconEye onClick={togglePassword} /> : <IconEyeHide onClick={togglePassword} />}{" "}
                  </>
                ) : (
                  ""
                )}
              </View>
              <ErrorMessage name="password">
                {(msg) => <StyledInlineErrorMessageForm>{msg}</StyledInlineErrorMessageForm>}
              </ErrorMessage>
              <Button type="submit" disabled={!formValue.isValid}>
                {t`button.login`}
              </Button>
              <Foot>
                <a href="https://brain-code.netlify.app/">{t`footer.createAccount`}</a>
                <Line />
                <a href="https://brain-code.netlify.app/">{t`footer.forgotPassword`}</a>
              </Foot>
            </LoginForm>
            <Toast />
          </Form>
        );
      }}
    </Formik>
  );
};
export default Login;
