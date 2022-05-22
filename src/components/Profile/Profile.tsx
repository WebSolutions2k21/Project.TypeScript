import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "components";
import { ProfileSchema } from "./validate";
import ProfileInterface from "./Profile.interface";
import { ProfileForm, LabelStyle, ErrorMsg, Footer, InputStyled,  EditButton } from "./ProfileForm.style";
import { IconText, Input, Label, IconEye, IconEyeHide, CloseButton } from "../../styles";
import { LogoPageSmall } from "../../styles/LogoPage.style";
import { paths } from "../../config/paths";
import { getUserID } from "services/auth.service";
import { getUser, updateUserData, updateUserLang, changePassword} from "services/user.service";
import { IProgrammingLanguage } from "components/Team/IProgrammingLanguege";
import { ButtonInModal, StyleFromModal } from "components/Team/AddTeam/AddTeam.style";
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

  const [oldPassShown, setOldPassShown] = useState(false);
  const toggleOldPass = () => {
    setOldPassShown((prev) => !prev);
  };

  const [passShown, setPassShown] = useState(false);
  const togglePass = () => {
    setPassShown((prev) => !prev);
  };
  
  const [conPassShown, setConPassShown] = useState(false);
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
      })
      .catch((e: Error) => {
        toast.error(t`profile.error`);
      });
  }, [email, firstname, id, lastname, t, username]);

  const [currentNameLang, setCurrentNameLang] = useState();
  const [currentLevel, setCurrentLevel] = useState();
  const [state, setState] = useState<IProgrammingLanguage>({ nameLang: currentNameLang , level: currentLevel });
  const [programmingLanguage, setLanguages] = useState<Array<IProgrammingLanguage>>([]);

  const handleClick = () => {
    setState(() => ({
      nameLang: currentNameLang,
      level: currentLevel,
    }));
    setLanguages((prevState) => [...prevState, state]);
    console.log(programmingLanguage);
  };

  const initialValues: ProfileInterface = {
    username: username,
    email: email,
    firstname: firstname,
    lastname: lastname,
    programmingLanguage: programmingLanguage,
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const setPassword = () => {
    setRequest(true);
    setOldPassword(oldPassword);
    setNewPassword(newPassword);
    setConfirmNewPassword(confirmNewPassword);
  }

  const deleteLanguage = (index: number) => {
    programmingLanguage.splice(index,1);
    console.log(programmingLanguage);
    setLanguages(programmingLanguage);
  }

  return (
    <>
    <Formik 
      initialValues={initialValues} 
      validationSchema={ProfileSchema()}
      onSubmit={(values) => {
        values.firstname = firstname;
        values.lastname = lastname;
        values.programmingLanguage = programmingLanguage;
        if(request){
          updateUserData(firstname, lastname);
          changePassword(values.oldPassword, values.newPassword, values.confirmNewPassword);
          updateUserLang(programmingLanguage).then(
            () => {
                navigate(paths.myProfile);
            }
          );
        } else {
          updateUserData(firstname, lastname);
          updateUserLang(programmingLanguage).then(
            () => {
                navigate(paths.myProfile);
            }
          );
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
                <>
                      <Input
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
                      <Input
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
                      <Input
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
                  </>
                 }
                title={t`setNewPassword.title2`} 
                buttonText={t`profile.button_change_password`} 
                childrenButton={ 
                <ButtonInModal type="button" onClick={() => setPassword()}>
                {t`setNewPassword.button2`}{" "}
                </ButtonInModal>
                }                  
              ></Modal>

               <LabelStyle htmlFor="programming_language">
                <IconText />
                {t`profile.programming_language`}
              </LabelStyle>
              <ul>
                  {programmingLanguage.length > 0 &&
                    programmingLanguage.map(({ nameLang, level }, index) => (
                      !nameLang && !level ? 
                      (deleteLanguage(index))
                      :(
                      <li key={index}>
                        <Label htmlFor={`team-language-${index}`}>
                          {nameLang} {level}
                        </Label>
                        <CloseButton onClick={() => deleteLanguage(index)}/>
                      </li>
                      )
                    ))}
                </ul>
              <Modal
                  children={
                    <>
                      <StyleFromModal
                        name="language"
                        options={options}
                        classNamePrefix={"Select"}
                        placeholder={t`team.languagePlaceholder`}
                        id="language"
                        onChange={(e: any) => setCurrentNameLang(e.value)}
                      />
                      <StyleFromModal
                        name="level"
                        options={level_profile}
                        classNamePrefix={"Select"}
                        placeholder={t`team.level`}
                        id="level"
                        onChange={(e: any) => setCurrentLevel(e.value)}
                      />
                    </>
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
      </>
  );
};