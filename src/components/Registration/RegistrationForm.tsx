import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import IRegistrationForm from './RegistrationForm.interface';
import { SignupSchema } from './validate';
import { RegForm, ErrorMsg, View } from './RegForm.style';
import { Button, Label, Input, IconPassword, IconText, Line, Foot, IconEye, IconEyeHide } from "components/styles";
import { LogoPageSmall } from "components/styles/LogoPage.style";
import { register } from 'services/auth.service';


export const RegistrationForm = () => {
  const { t } = useTranslation();

  const [passShown, setPassShown] = useState(false);
  const togglePass = () => {
    setPassShown((prev) => !prev);
  };

  const [conPassShown, setConPassShown] = useState(false);
  const toggleConPass = () => {
    setConPassShown((prev) => !prev);
  };

  const initialValues: IRegistrationForm = {
    userName: '', 
    firstName: '', 
    lastName: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  };

  const onSubmit = async (formValue: { 
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string; }) => {
    const { userName, firstName, lastName, email, password, confirmPassword } = formValue;

    await register(userName, firstName, lastName, email, password, confirmPassword)
      .then(
        () => {
          // Send email
          console.log("działa")
          toast.success("działa");
        },
        (error) => {
          const resMessage = (error.response && error.response.data) || error.message || error.toString();
          console.log("nie działa")
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
    <Formik
    initialValues={initialValues}
    validationSchema={SignupSchema()}
    onSubmit={onSubmit}
    >
    {( formValue ) => (
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
                  {(msg) => <ErrorMsg>{msg}</ErrorMsg>}
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
                  {(msg) => <ErrorMsg>{msg}</ErrorMsg>}
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
                  {(msg) => <ErrorMsg>{msg}</ErrorMsg>}
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
                  {(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                </ErrorMessage>
            </Label>

            <Label htmlFor="password">
              <IconPassword /> 
              {t`registration.password.name`}
              <View>
                <Input
                  type={passShown ? "text" : "password"}
                  name="password"
                  autoCapitalize="off"
                  autoCorrect="off"              
                  placeholder={t`registration.password.placeholder`}
                  />
                  {formValue.values.password.length > 0 ? (
                    <>
                      {passShown ? <IconEye onClick={togglePass} /> : <IconEyeHide onClick={togglePass} />}{" "}
                    </>
                  ) : (
                    ""
                  )}
                <ErrorMessage name="password">
                  {(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                </ErrorMessage>
              </View>
            </Label>

            <Label htmlFor="confirmPassword">
              <IconPassword /> 
              {t`registration.confirmPassword.name`}
              <View>
                <Input
                  type={conPassShown ? "text" : "password"}
                  name="confirmPassword"
                  autoCapitalize="off"
                  autoCorrect="off"              
                  placeholder={t`registration.password.placeholder`}
                  />
                  {formValue.values.confirmPassword.length > 0 ? (
                    <>
                      {conPassShown ? <IconEye onClick={toggleConPass} /> : <IconEyeHide onClick={toggleConPass} />}{" "}
                    </>
                  ) : (
                    ""
                  )}
                <ErrorMessage name="confirmPassword">
                  {(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                </ErrorMessage>
              </View>
            </Label>

          <Button type="submit" disabled={!formValue.isValid}>
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
