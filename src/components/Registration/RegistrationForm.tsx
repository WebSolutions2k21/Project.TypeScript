import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { SignupSchema } from "./validate";
import IRegistration from "./Registration.interface";
import { RegForm, View, LabelStyle, ErrorMsg, ButtonForm } from "./RegForm.style";
import { Input, IconPassword, IconText, Line, Foot, IconEye, IconEyeHide, Toast } from "styles";
import { LogoPageSmall } from "styles/LogoPage.style";
import { register } from "services/auth.service";
import { paths } from "config/paths";

export const RegistrationForm = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();

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
    email: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema()}
        onSubmit={(formValue: IRegistration) => {
          const { username, email, password, confirmpassword, firstname, lastname } = formValue;
          register(username, email, password, confirmpassword, firstname, lastname).then(
            () => {
              setTimeout(() => {
                navigate(paths.login, { replace: true });
              }, 3000);
              toast.success(t`toast.registration.success`);
            },
            ({ response: { status } }) =>
              toast.error(status === 400 ? t`toast.registration.validation` : t`toast.registration.error`),
          );
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => {
          return (
            <Form noValidate onSubmit={handleSubmit}>
              <RegForm>
                <LogoPageSmall />

                <LabelStyle htmlFor="username">
                  <IconText />
                  {t`registration.userName.name`}
                </LabelStyle>
                <Input
                  type="text"
                  name="username"
                  autoCapitalize="off"
                  autoCorrect="off"
                  placeholder={t`registration.userName.placeholder`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  id="username"
                />
                <ErrorMsg>{errors.username && touched.username && errors.username}</ErrorMsg>

                <LabelStyle htmlFor="firstname">
                  <IconText />
                  {t`registration.firstName.name`}
                </LabelStyle>
                <Input
                  type="text"
                  name="firstname"
                  autoCapitalize="off"
                  autoCorrect="off"
                  placeholder={t`registration.firstName.placeholder`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                  id="firstname"
                />
                <ErrorMsg>{errors.firstname && touched.firstname && errors.firstname}</ErrorMsg>

                <LabelStyle htmlFor="lastname">
                  <IconText />
                  {t`registration.lastName.name`}
                </LabelStyle>
                <Input
                  type="text"
                  name="lastname"
                  autoCapitalize="off"
                  autoCorrect="off"
                  placeholder={t`registration.lastName.placeholder`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                  id="lastname"
                />
                <ErrorMsg>{errors.lastname && touched.lastname && errors.lastname}</ErrorMsg>

                <LabelStyle htmlFor="email">
                  <IconText />
                  {t`registration.email.name`}
                </LabelStyle>
                <Input
                  type="email"
                  name="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  placeholder={t`registration.email.placeholder`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  id="email"
                />
                <ErrorMsg>{errors.email && touched.email && errors.email}</ErrorMsg>

                <LabelStyle htmlFor="password">
                  <IconPassword />
                  {t`registration.password.name`}
                </LabelStyle>
                <View>
                  <Input
                    type={passShown ? "text" : "password"}
                    name="password"
                    autoCapitalize="off"
                    autoCorrect="off"
                    placeholder={t`registration.password.placeholder`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    id="password"
                  />
                  {values.password.length > 0 ? (
                    <>{passShown ? <IconEye onClick={togglePass} /> : <IconEyeHide onClick={togglePass} />} </>
                  ) : (
                    ""
                  )}
                </View>
                <ErrorMsg>{errors.password && touched.password && errors.password}</ErrorMsg>

                <LabelStyle htmlFor="confirmpassword">
                  <IconPassword />
                  {t`registration.confirmPassword.name`}
                </LabelStyle>
                <View>
                  <Input
                    type={conPassShown ? "text" : "password"}
                    name="confirmpassword"
                    autoCapitalize="off"
                    autoCorrect="off"
                    placeholder={t`registration.password.placeholder`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmpassword}
                    id="confirmpassword"
                  />
                  {values.confirmpassword.length > 0 ? (
                    <>{conPassShown ? <IconEye onClick={toggleConPass} /> : <IconEyeHide onClick={toggleConPass} />} </>
                  ) : (
                    ""
                  )}
                </View>
                <ErrorMsg>{errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}</ErrorMsg>

                <ButtonForm type="submit" disabled={!isValid}>
                  {t`registration.button.name`}
                </ButtonForm>
                <Toast />

                <Foot>
                  <Link to={paths.login}>{t`registration.foot.login`}</Link>
                  <Line />
                  <Link to={paths.home}>{t`registration.foot.home`}</Link>
                </Foot>
              </RegForm>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
