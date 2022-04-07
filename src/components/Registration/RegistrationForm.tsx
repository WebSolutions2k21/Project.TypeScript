import React from 'react';
import { Formik, Form, ErrorMessage, FormikHelpers } from 'formik';
import { useTranslation } from "react-i18next";

import IRegistrationForm from './RegistrationForm.interface';
import { SignupSchema } from './validate';
import { RegForm } from './RegForm.style';
import { Button, Label, Input, StyledInlineErrorMessageReg, IconPassword, IconText, Line, Foot } from "components/styles";
import { LogoPageSmall } from "components/styles/LogoPage.style";


export const RegistrationForm = () => {
  const { t } = useTranslation();

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
    validationSchema={SignupSchema()}
    onSubmit={(values, { setSubmitting }: FormikHelpers<IRegistrationForm>) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <RegForm>
        <LogoPageSmall />
            <Label htmlFor="userName">
              <IconText />
              {t`registration.userName.name`}
              <Input
                type="text"
                name="userName"
                autoCapitalize="off"
                autoCorrect="off"                
                placeholder={t`registration.userName.placeholder`}
                />
                <ErrorMessage name="userName">
                  {(msg) => <StyledInlineErrorMessageReg>{msg}</StyledInlineErrorMessageReg>}
                </ErrorMessage>
            </Label>

            <Label htmlFor="firstName">
              <IconText />
              {t`registration.firstName.name`}
              <Input
                type="text"
                name="firstName"
                autoCapitalize="off"
                autoCorrect="off"                
                placeholder={t`registration.firstName.placeholder`}
                />
                <ErrorMessage name="firstName">
                  {(msg) => <StyledInlineErrorMessageReg>{msg}</StyledInlineErrorMessageReg>}
                </ErrorMessage>
            </Label>

            <Label htmlFor="lastName">
              <IconText />
              {t`registration.lastName.name`}
              <Input
                type="text"
                name="lastName"
                autoCapitalize="off"
                autoCorrect="off"                
                placeholder={t`registration.lastName.placeholder`}
                />
                <ErrorMessage name="lastName">
                  {(msg) => <StyledInlineErrorMessageReg>{msg}</StyledInlineErrorMessageReg>}
                </ErrorMessage>
            </Label>

            <Label htmlFor="email">
              <IconText />
              {t`registration.email.name`}
              <Input
                type="email"
                name="email"
                autoCapitalize="off"
                autoCorrect="off"               
                placeholder={t`registration.email.placeholder`}
                />
                <ErrorMessage name="email">
                  {(msg) => <StyledInlineErrorMessageReg>{msg}</StyledInlineErrorMessageReg>}
                </ErrorMessage>
            </Label>

            <Label htmlFor="password">
              <IconPassword /> 
              {t`registration.password.name`}
              <Input
                type="password"
                name="password"
                autoCapitalize="off"
                autoCorrect="off"              
                placeholder={t`registration.password.placeholder`}
                />
                <ErrorMessage name="password">
                  {(msg) => <StyledInlineErrorMessageReg>{msg}</StyledInlineErrorMessageReg>}
                </ErrorMessage>
            </Label>

            <Label htmlFor="confirmPassword">
              <IconPassword /> 
              {t`registration.confirmPassword.name`}
              <Input
                type="password"
                name="confirmPassword"
                autoCapitalize="off"
                autoCorrect="off"              
                placeholder={t`registration.password.placeholder`}
                />
                <ErrorMessage name="confirmPassword">
                  {(msg) => <StyledInlineErrorMessageReg>{msg}</StyledInlineErrorMessageReg>}
                </ErrorMessage>
            </Label>

          <Button type="submit" disabled={isSubmitting}>
          {t`registration.button.name`}
          </Button>

          <Foot>
            <a href="https://brain-code.netlify.app/">{t`registration.foot.login`}</a>
            <Line />
            <a href="https://brain-code.netlify.app/">{t`registration.foot.home`}</a>
          </Foot>
          
        </RegForm>
      </Form>
    )}
  </Formik>
  );
};
