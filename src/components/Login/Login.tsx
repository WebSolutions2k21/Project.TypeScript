import React, { useState } from "react";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

import { login } from "services/auth.service";
import {
  Button,
  Label,
  Input,
  StyledInlineErrorMessage,
  IconPassword,
  IconText,
  LogoPage,
} from "components/styles";
import { LoginForm } from "./Login.style";

interface ILogin {
  email: string;
  password: string;
}
const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues: ILogin = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (formValue: { email: string; password: string }) => {
    const { email, password } = formValue;

    setLoading(true);
    await login(email, password).then(
      () => {
        console.log("Tu wejdzie success");
        //Navigate to user profile
        toast.success("Successful Login!", {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 1000,
        });
      },
      (error) => {
        console.log("Tu wejdzie error");
        const resMessage = (error.response && error.response.data) || error.message || error.toString();
        console.log("Error", resMessage);
        setLoading(false);
        toast.error(resMessage, { 
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 2000 });
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
                email
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
                password
              </Label>
              <Input type="password" name="password" placeholder="Type your password" />
              <ErrorMessage name="password">
                {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
              </ErrorMessage>
              <Button type="submit" disabled={!formValue.isValid}>
                Login
              </Button>
            </LoginForm>
            <ToastContainer />
            {/* <p>Create Account | Forgot Password</p> */}
          </Form>
        );
      }}
    </Formik>
  );
};
export default Login;
