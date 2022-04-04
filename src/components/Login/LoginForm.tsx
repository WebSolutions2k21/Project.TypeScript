import React from "react";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

import AuthService from "../../services/auth.service";
import { Button, Label, Input, StyledInlineErrorMessage, IconPassword, IconText, FormGroup } from "components/styles";
import { LogoPage } from "components/styles/LogoPage.style";

const Login = () => {
  const initialValues: {
    email: string;
    password: string;
  } = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (formValue: { email: string; password: string }) => {
    const { email, password } = formValue;
    AuthService.login(email, password)
      .then((value) => {
        console.log("Nice, it worked!", value);
        // this.navroute.navigate(['home']);
      })
      .catch((err) => {
        console.log("Something went wrong:", err.message);
        // this.AuthError = err.message;
      });
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formValue) => {
        return (
          <Form>
            <FormGroup>
              <LogoPage></LogoPage>
              <Label htmlFor="email">
                <IconText />
                Email
              </Label>
              <Input
                type="email"
                name="email"
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="email"
                placeholder="Type your email"
              />
              <ErrorMessage name="email">
                {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
              </ErrorMessage>
              <Label htmlFor="password">
                <IconPassword />
                Password
              </Label>
              <Input type="text" name="password" placeholder="Type your password" />
              <ErrorMessage name="password">
                {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
              </ErrorMessage>
              <Button type="submit" disabled={!formValue.isValid}>
                Login
              </Button>{" "}
            </FormGroup>
            {/* <p>Create Account | Forgot Password</p> */}
          </Form>
        );
      }}
    </Formik>
  );
};
export default Login;
