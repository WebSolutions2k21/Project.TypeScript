import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import { SignupSchema } from "./validate";
import { RegForm, View } from "./RegForm.style";
import { Button, Label, Input, IconPassword, IconText, Line, Foot, IconEye, IconEyeHide } from "components/styles";
import { LogoPageSmall } from "components/styles/LogoPage.style";
import { register } from "services/auth.service";
import { paths } from "config/paths";

interface IRegistration {
  username: string;
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
  confirmpassword: string;
}

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

  const initialValues: IRegistration = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  return (
    <>
      <Formik 
        initialValues={initialValues} 
        validationSchema={SignupSchema()} 
        onSubmit={(formValue: IRegistration) => {
          const { username, firstname, lastname, email, password, confirmpassword } = formValue;
          register(username, email, password, confirmpassword, firstname, lastname)
          .then(
            (res) => {
              toast.success(t`toast.login.success`);
              console.log("res z serwera", res)
            },
            (error) => {
              console.log("res z serwera error", error)
              console.log("nie działa");
            },
          );
        }}
        >
          {(formValue) => {
            return (
              <Form>
                <RegForm>
                  <LogoPageSmall />
                  <Label htmlFor="username">
                    <IconText />
                    {t`registration.userName.name`}
                    <Input
                      type="text"
                      name="username"
                      autoCapitalize="off"
                      autoCorrect="off"
                      placeholder={t`registration.userName.placeholder`}
                    />
                    {/* <ErrorMessage name="username">{(msg) => <ErrorMsg>{msg}</ErrorMsg>}</ErrorMessage> */}
                  </Label>

                  <Label htmlFor="firstname">
                    <IconText />
                    {t`registration.firstName.name`}
                    <Input
                      type="text"
                      name="firstname"
                      autoCapitalize="off"
                      autoCorrect="off"
                      placeholder={t`registration.firstName.placeholder`}
                    />
                    {/* <ErrorMessage name="firstname">{(msg) => <ErrorMsg>{msg}</ErrorMsg>}</ErrorMessage> */}
                  </Label>

                  <Label htmlFor="lastname">
                    <IconText />
                    {t`registration.lastName.name`}
                    <Input
                      type="text"
                      name="lastname"
                      autoCapitalize="off"
                      autoCorrect="off"
                      placeholder={t`registration.lastName.placeholder`}
                    />
                    {/* <ErrorMessage name="lastname">{(msg) => <ErrorMsg>{msg}</ErrorMsg>}</ErrorMessage> */}
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
                    {/* <ErrorMessage name="email">{(msg) => <ErrorMsg>{msg}</ErrorMsg>}</ErrorMessage> */}
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
                        <>{passShown ? <IconEye onClick={togglePass} /> : <IconEyeHide onClick={togglePass} />} </>
                      ) : (
                        ""
                      )}
                      {/* <ErrorMessage name="password">{(msg) => <ErrorMsg>{msg}</ErrorMsg>}</ErrorMessage> */}
                    </View>
                  </Label>

                  <Label htmlFor="confirmpassword">
                  <IconPassword />
                  {t`registration.confirmPassword.name`}
                  <View>
                    <Input
                      type={conPassShown ? "text" : "password"}
                      name="confirmpassword"
                      autoCapitalize="off"
                      autoCorrect="off"
                      placeholder={t`registration.password.placeholder`}
                    />
                    {formValue.values.confirmpassword.length > 0 ? (
                      <>{conPassShown ? <IconEye onClick={toggleConPass} /> : <IconEyeHide onClick={toggleConPass} />} </>
                    ) : (
                      ""
                    )}
                    {/* <ErrorMessage name="confirmpassword">{(msg) => <ErrorMsg>{msg}</ErrorMsg>}</ErrorMessage> */}
                  </View>
                </Label>

                  <Button type="submit" disabled={!formValue.isValid}>
                    {t`registration.button.name`}
                  </Button>

                  <Foot>
                    <Link to={paths.login}>{t`registration.foot.login`}</Link>
                    <Line />
                    <Link to={paths.home}>{t`registration.foot.home`}</Link>
                  </Foot>
                </RegForm>
              </Form>
            );
          }
        }
          
      </Formik>
    </>
  );
};