import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { ProfileSchema } from "./validate";
import ProfileInterface from "./Profile.interface";
import { ProfileForm, View, LabelStyle, ErrorMsg, Footer, EditButton, InputStyle, InputStyled, InputRegular } from "./ProfileForm.style";
import { Button, IconPassword, IconText, Line, IconEye, IconEyeHide, Toast } from "../../styles";
import { LogoPageSmall } from "../../styles/LogoPage.style";
import { getCurrentUser } from "../../services/auth.service";
import { paths } from "../../config/paths";


export const Profile = () => {
  const { t } = useTranslation();

  const [passShown, setPassShown] = useState(false);
  const togglePass = () => {
    setPassShown((prev) => !prev);
  };
  
  const initialValues: ProfileInterface = {
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  };

  return (
    <>
    <Formik 
      initialValues={initialValues} 
      validationSchema={ProfileSchema()} 
      onSubmit={(formValue: ProfileInterface) => {
        const { username, email, firstname, lastname, password } = formValue;
        // register(username, email, password, confirmpassword, firstname, lastname).then(
        //   () => {
        //     setTimeout(() => {
        //       navigate(paths.login, { replace: true })
        //     }, 3000);
        //     toast.success(t`toast.registration.success`)
        //   },
        //   ({ response: { status } }) => toast.error(status === 400 ? t`toast.registration.validation` : t`toast.registration.error`) 
        // );
      }}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => {
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <ProfileForm>
              <LogoPageSmall />
              <LabelStyle htmlFor="username">
                <IconText />
                {t`profile.username`}
              </LabelStyle>
              <InputStyle>
              <InputRegular
                  type="text"
                  name="username"
                  autoCapitalize="off"
                  autoCorrect="off"
                //   placeholder={t`registration.userName.placeholder`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  id="username"
              />
            </InputStyle>
              <ErrorMsg>
                {errors.username && touched.username && errors.username}
              </ErrorMsg>

              <LabelStyle htmlFor="email">
                <IconText />
                {t`profile.useremail`}
              </LabelStyle>
              <InputRegular
                  type="email"
                  name="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                //   placeholder={t`registration.email.placeholder`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  id="email"
              />
              <ErrorMsg>
                {errors.email && touched.email && errors.email}
              </ErrorMsg>
              

              <LabelStyle htmlFor="firstname">
                <IconText />
                {t`profile.firstname`}
              </LabelStyle>
              <InputStyle>
              <InputStyled
                  type="text"
                  name="firstname"
                  autoCapitalize="off"
                  autoCorrect="off"
                //   placeholder={t`registration.firstName.placeholder`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                  id="firstname"
              />
              <EditButton type="submit" disabled={!isValid}>
              {t`profile.button`}
                </EditButton>
                </InputStyle>
              <ErrorMsg>
                {errors.firstname && touched.firstname && errors.firstname}
              </ErrorMsg>
              

              <LabelStyle htmlFor="lastname">
                <IconText />
                {t`profile.lastname`}
              </LabelStyle>
              <InputStyle>
                <InputStyled
                  type="text"
                  name="lastname"
                  autoCapitalize="off"
                  autoCorrect="off"
                //   placeholder={t`registration.lastName.placeholder`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                  id="lastname"
                />
                <EditButton type="submit" disabled={!isValid}>
              {t`profile.button`}
                </EditButton>
                </InputStyle>
                <ErrorMsg>
                {errors.lastname && touched.lastname && errors.lastname}
                </ErrorMsg>

              <LabelStyle htmlFor="password">
                <IconPassword />
                {t`profile.password`}
              </LabelStyle>
              <InputStyle>
              <View>
                <InputStyled
                  type={passShown ? "text" : "password"}
                  name="password"
                  autoCapitalize="off"
                  autoCorrect="off"
                //   placeholder={t`registration.password.placeholder`}
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
              <EditButton type="submit" disabled={!isValid}>
              {t`profile.button`}
                </EditButton>
            </InputStyle>
              <ErrorMsg>
                {errors.password && touched.password && errors.password}
              </ErrorMsg>

                  <Footer>
                    <Link to={paths.home}>{t`registration.foot.home`}</Link>
                  </Footer>
                </ProfileForm>
              </Form>
            );
          }
        }
      </Formik>
      </>
  );

//   return (
//     <>
//     <Formik
//     initialValues={(formValue: ProfileInterface) => {
//         let { username, email, firstname, lastname, password } = formValue;
//         getCurrentUser();
//       }}>
//     validationSchema={ProfileSchema()} 
//     onSubmit={(formValue: ProfileInterface) => {
//       let { username, email, firstname, lastname, password } = formValue;
//       getCurrentUser();
//     }}>
//       </Formik>
//       </>
//   );
};

// return (
//     <Form noValidate onSubmit={handleSubmit}>
//       <RegForm>
//         <LogoPageSmall />

//         <LabelStyle htmlFor="username">
//           <IconText />
//           {t`registration.userName.name`}
//         </LabelStyle>
//         <Input
//             type="text"
//             name="username"
//             autoCapitalize="off"
//             autoCorrect="off"
//             placeholder={t`registration.userName.placeholder`}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.username}
//             id="username"
//         />
//           </RegForm>
//         </Form>
//       );
//     }
//   }