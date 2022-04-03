import React from "react";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { login } from "../../services/auth.service";

import { Button, Label, Input, StyledInlineErrorMessage, IconPassword, IconText } from "components/styles";

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
    password: Yup.string().min(5).required("Required"),
  });

  const onSubmit = (formValue: { email: string; password: string }) => {
    const { email, password } = formValue;
    login(email, password).then(() => {
      alert("You are login");
    });
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formValue) => {
        return (
          <Form>
            <Label htmlFor="email">
              <IconText />
              Email
              <Input
                type="email"
                name="email"
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="email"
                placeholder="your email"

              />
              <ErrorMessage name="email">
                {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
              </ErrorMessage>
            </Label>
            <Label htmlFor="password">
              <IconPassword />
              Password
              <Input type="text" name="password" placeholder="your password" />
              <ErrorMessage name="password">
                {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
              </ErrorMessage>
            </Label>

            <Button type="submit" disabled={!formValue.isValid}>
              Login
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default Login;
