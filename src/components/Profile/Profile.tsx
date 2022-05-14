import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios/instanceAxios";

import { ProfileSchema } from "./validate";
import ProfileInterface from "./Profile.interface";
import { ProfileForm, View, LabelStyle, ErrorMsg, Footer, InputStyled,  EditButton } from "./ProfileForm.style";
import { IconPassword, IconText, Line, IconEye, IconEyeHide, Toast, Input } from "../../styles";
import { LogoPageSmall } from "../../styles/LogoPage.style";
import { paths } from "../../config/paths";
import { getUserID } from "services/auth.service";
import { getUser } from "services/user.service"


export const Profile = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();

  // const [passShown, setPassShown] = useState(false);
  // const togglePass = () => {
  //   setPassShown((prev) => !prev);
  // };

  const [id, setID] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  
  useEffect(() => {
    setID(getUserID());
    getUser(id)
    .then((response: any) => {
        setUserName (response.data.username);
        setEmail(response.data.email);
        setFirstName(response.data.firstname);
        setLastName(response.data.lastname);
      })
      .catch((e: Error) => {
        toast.error(t`profile.error`);
      });
  }, [email, firstname, id, lastname, t, username]);

  const initialValues: ProfileInterface = {
    username: username,
    email: email,
    firstname: "",
    lastname: "",
    programming_languages: [],
  };

  const updateUserData = async (
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    programming_languages: Array<T>
  ) => {
    return await axios
      .patch(`/users/${id}`, {
        firstname,
        lastname,
        username,
        email,
        programming_languages
      })
      .then((res) => {
        return res.data;
      });
  };

  return (
    <>
    <Formik 
      initialValues={initialValues} 
      validationSchema={ProfileSchema()}
      onSubmit={(formValue: ProfileInterface) => {
        const { firstname, lastname } = formValue;
        updateUserData(firstname, lastname, username, email, programming_languages).then(
          () => {
              navigate(paths.myProfile);
          }
        );
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
  
              <Input
                  type="text"
                  name="username"
                  autoCapitalize="off"
                  autoCorrect="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={username}
                  id="username"
              />

              <LabelStyle htmlFor="email">
                <IconText />
                {t`profile.useremail`}
              </LabelStyle>
              <Input
                  type="email"
                  name="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={email}
                  id="email"
              />              
              <LabelStyle htmlFor="firstname">
                <IconText />
                {t`profile.firstname`}
              </LabelStyle>

              <InputStyled
                  type="text"
                  name="firstname"
                  autoCapitalize="off"
                  autoCorrect="off"
                  placeholder={firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                  id="firstname"
              />

              <ErrorMsg>
                {errors.firstname && touched.firstname && errors.firstname}
              </ErrorMsg>
              

              <LabelStyle htmlFor="lastname">
                <IconText />
                {t`profile.lastname`}
              </LabelStyle>
            
                <InputStyled
                  type="text"
                  name="lastname"
                  autoCapitalize="off"
                  autoCorrect="off"
                  placeholder={lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                  id="lastname"
                />
               
                <ErrorMsg>
                {errors.lastname && touched.lastname && errors.lastname}
                </ErrorMsg>

                <LabelStyle htmlFor="programming_language">
                <IconText />
                {t`profile.programming_language`}
              </LabelStyle>
            
                <InputStyled
                  type="text"
                  name="programming_language"
                  autoCapitalize="off"
                  autoCorrect="off"
                  placeholder={programming_language}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.programming_languages}
                  id="programming_language"
                />
               
                {/* <ErrorMsg>
                {errors.programming_language && touched.programming_language && errors.programming_language}
                </ErrorMsg> */}

              {/* <LabelStyle htmlFor="password">
                <IconPassword />
                {t`profile.password`}
              </LabelStyle> */}
            
              {/* <View>
                <Input
                  type={passShown ? "text" : "password"}
                  name="password"
                  autoCapitalize="off"
                  autoCorrect="off"
                //   placeholder={t`registration.password.placeholder`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // value={password}
                  id="password"
                />
                  {values.password.length > 0 ? (
                    <>{passShown ? <IconEye onClick={togglePass} /> : <IconEyeHide onClick={togglePass} />} </>
                  ) : (
                    ""
                  )}
              </View>
            
              <ErrorMsg>
                {errors.password && touched.password && errors.password}
              </ErrorMsg> */}
              < EditButton type="submit" disabled={!isValid}>
              {t`profile.button`}
                </ EditButton>
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
};
