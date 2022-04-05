import React from 'react';
import { Formik, Form, ErrorMessage, FormikHelpers } from 'formik';

import IRegistrationForm from './RegistrationForm.interface';
import { SignupSchema } from './validate';
import { Button, Label, Input, StyledInlineErrorMessageReg, IconPassword, IconText, FormGroup, Line, Foot } from "components/styles";
import { LogoPageSmall } from "components/styles/LogoPage.style";


export const RegistrationForm = () => {
  return (
    <Formik
    initialValues={{ 
      userName: '', 
      firstName: '', 
      lastName: '', 
      email: '', 
      password: '', 
      confirmPassword: '' 
    }}
    validationSchema={SignupSchema}
    onSubmit={(values, { setSubmitting }: FormikHelpers<IRegistrationForm>) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <FormGroup>
        <LogoPageSmall />
            <Label htmlFor="userName">
              <IconText />
              user name
              <Input
                type="text"
                name="userName"
                autoCapitalize="off"
                autoCorrect="off"                
                placeholder="Type your user name"
                />
                <ErrorMessage name="userName">
                  {(msg) => <StyledInlineErrorMessageReg>{msg}</StyledInlineErrorMessageReg>}
                </ErrorMessage>
            </Label>

            <Label htmlFor="firstName">
              <IconText />
              first name
              <Input
                type="text"
                name="firstName"
                autoCapitalize="off"
                autoCorrect="off"                
                placeholder="Type your first name"
                />
                <ErrorMessage name="firstName">
                  {(msg) => <StyledInlineErrorMessageReg>{msg}</StyledInlineErrorMessageReg>}
                </ErrorMessage>
            </Label>

            <Label htmlFor="lastName">
              <IconText />
              last name
              <Input
                type="text"
                name="lastName"
                autoCapitalize="off"
                autoCorrect="off"                
                placeholder="Type your last name"
                />
                <ErrorMessage name="lastName">
                  {(msg) => <StyledInlineErrorMessageReg>{msg}</StyledInlineErrorMessageReg>}
                </ErrorMessage>
            </Label>

            <Label htmlFor="email">
              <IconText />
              email
              <Input
                type="email"
                name="email"
                autoCapitalize="off"
                autoCorrect="off"               
                placeholder="Type your email"
                />
                <ErrorMessage name="email">
                  {(msg) => <StyledInlineErrorMessageReg>{msg}</StyledInlineErrorMessageReg>}
                </ErrorMessage>
            </Label>

            <Label htmlFor="password">
              <IconPassword /> 
              password
              <Input
                type="password"
                name="password"
                autoCapitalize="off"
                autoCorrect="off"              
                placeholder="Type your password"
                />
                <ErrorMessage name="password">
                  {(msg) => <StyledInlineErrorMessageReg>{msg}</StyledInlineErrorMessageReg>}
                </ErrorMessage>
            </Label>

            <Label htmlFor="confirmPassword">
              <IconPassword /> 
              confirm password
              <Input
                type="password"
                name="confirmPassword"
                autoCapitalize="off"
                autoCorrect="off"              
                placeholder="Type your password"
                />
                <ErrorMessage name="confirmPassword">
                  {(msg) => <StyledInlineErrorMessageReg>{msg}</StyledInlineErrorMessageReg>}
                </ErrorMessage>
            </Label>

          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>

          <Foot>
            <a href="">Login Page</a>
            <Line />
            <a href="">Home Page</a>
          </Foot>
          
        </FormGroup>
      </Form>
    )}
  </Formik>
  );
};
