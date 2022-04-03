import React from "react";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

import AuthService from "../../services/auth.service";
import { Button, Label, Input, StyledInlineErrorMessage, IconPassword, IconText, FormGroup } from "components/styles";

const Login = () => {
  const initialValues: {
    email: string;
    password: string;
  } = {
    email: "",
    password: "",
  };

  //this button will be remove (only test )
  const logOut = () => {
    AuthService.logout();
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (formValue: { email: string; password: string }) => {
    const { email, password } = formValue;
    AuthService.login(email, password).then(() => {
      // alert("You are login");
      window.location.reload();
    });
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formValue) => {
        return (
          <Form>
            <FormGroup>
            <Label htmlFor="email">
              <IconText />
              Email
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
            </Label>
            <Label htmlFor="password">
              <IconPassword />
              Password
              <Input type="text" name="password" placeholder="Type your password" />
              <ErrorMessage name="password">
                {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
              </ErrorMessage>
            </Label>

            <Button type="submit" disabled={!formValue.isValid}>
              Login
            </Button> </FormGroup>
          </Form>
        );
      }}

   
    </Formik>
  );
};
export default Login;
