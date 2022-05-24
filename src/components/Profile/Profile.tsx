import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "components";
import { ProfileSchema } from "./validate";
import ProfileInterface from "./Profile.interface";
import { ProfileForm, LabelStyle, ErrorMsg, Footer, InputStyled,  EditButton, ButtonInPassModal, InputStyledElement, StyledDiv, StyleFromModalTeam, ClosedButton, LabelLang, StyledLi } from "./ProfileForm.style";
import { IconText, Input, IconEye, IconEyeHide } from "../../styles";
import { LogoPageSmall } from "../../styles/LogoPage.style";
import { paths } from "../../config/paths";
import { getUserID } from "services/auth.service";
import { getUser, updateUserData, updateUserLang, changePassword} from "services/user.service";
import { IProgrammingLanguage } from "components/Team/IProgrammingLanguege";
import { ButtonInModal} from "components/Team/AddTeam/AddTeam.style";
import { options } from "config/languages";
import { level_profile } from "config/level_profile";


export const Profile = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();

  const [id, setID] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [request, setRequest] = useState(false);
  const [currentNameLang, setCurrentNameLang] = useState();
  const [currentLevel, setCurrentLevel] = useState();
  const [programmingLanguage, setLanguages] = useState<Array<IProgrammingLanguage>>([]);
  const [userData, setUserData] = useState<Array<IProgrammingLanguage>>([]);
  const [oldPassShown, setOldPassShown] = useState(false);
  const [passShown, setPassShown] = useState(false);
  const [conPassShown, setConPassShown] = useState(false);
  
  const toggleOldPass = () => {
    setOldPassShown((prev) => !prev);
  };

  const togglePass = () => {
    setPassShown((prev) => !prev);
  };
  
  const toggleConPass = () => {
    setConPassShown((prev) => !prev);
  };
  
  useEffect(() => {
    setID(getUserID());
    getUser(id)
    .then((response: any) => {
        setUserName (response.data.username);
        setEmail(response.data.email);
        setFirstName(response.data.firstname);
        setLastName(response.data.lastname);
        const data = response.data.programmingLanguage.filter((e:any) => delete e._id)
        setUserData(data);
      })
      .catch((e: Error) => {
        toast.error(t`profile.error`);
      });
  }, [email, firstname, id, lastname, t, username]);

  const handleClick = () => {
    setLanguages((prevState) => [{ nameLang: currentNameLang, level: currentLevel }, ...prevState]);

  };

  const initialValues: ProfileInterface = {
    username: username,
    email: email,
    firstname: firstname,
    lastname: lastname,
    programmingLanguage: userData,
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    userData: [],
  };

  const setPassword = () => {
    setRequest(true);
    setOldPassword(oldPassword);
    setNewPassword(newPassword);
    setConfirmNewPassword(confirmNewPassword);
  }

  const deleteLanguage = ( itemIndex: number, array: any) => {
    let languages = array;
    languages.splice(itemIndex, 1);
    if(array === programmingLanguage) {
      setLanguages([...languages]);
    } else if(array === userData) {
      setUserData([...languages]);
    }
    

  }

  return (
    <Formik 
      initialValues={initialValues} 
      validationSchema={ProfileSchema()}
      onSubmit={(values) => {
        values.firstname = firstname;
        values.lastname = lastname;
        values.programmingLanguage = programmingLanguage;
        values.userData = userData;
        if(request){
          updateUserData(firstname, lastname);
          changePassword(values.oldPassword, values.newPassword, values.confirmNewPassword);
          updateUserLang(programmingLanguage, userData).then(() => navigate(paths.myProfile));
          setLanguages([]);
          window.location.reload();
          } else {
          updateUserData(firstname, lastname);
          updateUserLang(programmingLanguage, userData).then(() => navigate(paths.myProfile));
          setLanguages([]);
          window.location.reload();
        }
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

                <LabelStyle htmlFor="password">
                <IconText />
                {t`profile.password`}
                </LabelStyle>
                <Modal
                children={
                <StyledDiv>
                      <InputStyledElement
                        type={passShown ? "text" : "password"}
                        name="oldPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.oldPassword}
                        placeholder={t`setNewPassword.setOldPasswordPlaceholder`}
                        id="oldPassword"
                      />
                      {values.oldPassword.length > 0 ? (
                        <>{oldPassShown ? <IconEye onClick={toggleOldPass} /> : <IconEyeHide onClick={toggleOldPass} />} </>
                      ) : (
                        ""
                      )}
                      <InputStyledElement
                        type={passShown ? "text" : "password"}
                        name="newPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.newPassword}
                        placeholder={t`setNewPassword.setNewPasswordPlaceholder`}
                        id="newPassword" />
                      {values.newPassword.length > 0 ? (
                        <>{passShown ? <IconEye onClick={togglePass} /> : <IconEyeHide onClick={togglePass} />} </>
                      ) : (
                        ""
                      )}
                      <InputStyledElement
                        type={passShown ? "text" : "password"}
                        name="confirmNewPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmNewPassword}
                        placeholder={t`setNewPassword.confirmPasswordPlaceholder`}
                        id="confirmNewPassword" />
                      {values.confirmNewPassword.length > 0 ? (
                        <>{conPassShown ? <IconEye onClick={toggleConPass} /> : <IconEyeHide onClick={toggleConPass} />} </>
                      ) : (
                        ""
                      )}
                  </StyledDiv>
                 }
                title={t`setNewPassword.title2`} 
                buttonText={t`profile.button_change_password`} 
                childrenButton={ 
                <ButtonInPassModal type="button" onClick={() => setPassword()}>
                {t`setNewPassword.button2`}{" "}
                </ButtonInPassModal>
                }                  
              ></Modal>

               <LabelStyle htmlFor="programming_language">
                <IconText />
                {t`profile.programming_language`}
              </LabelStyle>
              {userData ? (
              <ul>
                  {userData.length > 0 &&
                    userData.map(({ nameLang, level }, index) => (
                      <StyledLi key={index}>
                          <LabelLang htmlFor={`team-language-${index}`}>
                            {nameLang} {level}
                          </LabelLang>
                          <ClosedButton onClick={() => deleteLanguage(index, userData)}/>
                      </StyledLi>
                      )
                    )}
              </ul> )
              :("")}
              <ul>
                  {programmingLanguage.length > 0 &&
                    programmingLanguage.map(({ nameLang, level }, index) => (
                      <StyledLi key={index}>
                          <LabelLang htmlFor={`team-language-${index}`}>
                           {nameLang} {level}
                          </LabelLang>
                          <ClosedButton onClick={() => deleteLanguage(index, programmingLanguage)}/>
                      </StyledLi>
                      )
                    )}
                </ul>
              <Modal
                  children={
                    <StyledDiv>
                      <StyleFromModalTeam
                        name="language"
                        options={options}
                        classNamePrefix={"Select"}
                        placeholder={t`team.languagePlaceholder`}
                        id="language"
                        onChange={(e: any) => setCurrentNameLang(e.value)}
                      />
                      <StyleFromModalTeam
                        name="level"
                        options={level_profile}
                        classNamePrefix={"Select"}
                        placeholder={t`team.level`}
                        id="level"
                        onChange={(e: any) => setCurrentLevel(e.value)}
                      />
                    </StyledDiv>
                  }
                  childrenButton={
                    <ButtonInModal type="button" onClick={handleClick}>
                      {t`team.button.add`}{" "}
                    </ButtonInModal>
                  }
                  title={t`team.languageName`}
                  buttonText={t`team.button.add`}
                ></Modal>
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
  );
};