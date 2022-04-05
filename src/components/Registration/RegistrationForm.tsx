import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from "yup";

import IRegistrationForm from './RegistrationForm.interface';
import { Button, Label, Input, StyledInlineErrorMessage, IconPassword, IconText, FormGroup } from "components/styles";
import { SignupSchema } from './validate';


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
                  {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
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
                  {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
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
                  {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
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
                autoComplete="email"                
                placeholder="Type your email"
                />
                <ErrorMessage name="email">
                  {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
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
                  {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
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
                  {(msg) => <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>}
                </ErrorMessage>
            </Label>

          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </FormGroup>
      </Form>
    )}
  </Formik>
  );
};
