import { Modal } from "components";
import { Form, Formik } from "formik";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTeam } from "services/team.service";

import ITeamProject from "../ITeamProject.interface";
import { IconPassword, StyledSelect, Toast, IconText, Input, IconProject } from "styles";
import { TeamForm } from "../AllTeamProjectTeam/AllTeamProjectTeam.style";
import {
  ButtonForm,
  ButtonInModal,
  ClosedButton,
  LabelLang,
  LabelStyle,
  StyledDiv,
  StyledInlineErrorMessageForm,
  StyledLi,
  StyleFromModal,
} from "./AddTeam.style";

import { options } from "config/languages";
import { getOnlyUsers } from "services/user.service";
import IUser from "../IUser.interface";
import { AddNewTeamValidationSchema } from "./AddTeamValidation";
import { paths } from "config/paths";
import { level } from "config/level";
import { IProgrammingLanguage } from "../IProgrammingLanguege";

export const AddNewTeam = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [idsAll, setIdsAll] = useState<Array<any>>([]);
  const [ids, setIds] = useState<Array<string>>([]);
  const places = Array(10)
    .fill(0)
    .map((e, i) => i + 1);
  let navigate = useNavigate();

  const [selectedPlaces, setSelectedPlaces] = useState(0);

  const [currentNameLang, setCurrentNameLang] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");

  const [userData, setUserData] = useState<Array<IProgrammingLanguage>>([]);

  const [programmingLanguage, setLanguages] = useState<Array<IProgrammingLanguage>>([]);
  const { t } = useTranslation();

  useEffect(() => {
    getOnlyUsers()
      .then((response: any) => {
        setUsers(response.data);
      })
      .catch(() => {
        toast.error(t`toast.team.errorUsers`);
      });
  }, [users, t]);

  const usernames = users.map(({ username, _id }) => ({
    label: username,
    value: _id,
  }));

  const initialValues: ITeamProject = {
    teamName: "",
    usersIds: [],
    mentorId: "",
    programmingLanguage: [],
    status: true,
    places: 0,
    description: "",
  };

  useEffect(() => {
    idsAll.map((val: any) => {
      const newIds = [...ids];
      if (ids.length <= selectedPlaces) {
        newIds.push(val.value);
        setIds(newIds);
      }
      return ids;
    });
    checkCurrentPlaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsAll, selectedPlaces]);

  const checkCurrentPlaces = () => ids.length >= selectedPlaces;

  const handleClick = () => {
    setLanguages((prevState) => [{ nameLang: currentNameLang, level: currentLevel }, ...prevState]);
  };

  const deleteLanguage = (itemIndex: number, array: any) => {
    let languages = array;
    languages.splice(itemIndex, 1);
    if (array === programmingLanguage) {
      setLanguages([...languages]);
    } else if (array === userData) {
      setUserData([...languages]);
    }
  };

  return (
    <>
      <Formik
        validationSchema={AddNewTeamValidationSchema()}
        initialValues={initialValues}
        onSubmit={(values) => {
          values.usersIds = ids;
          values.mentorId = localStorage.getItem("id") as string;
          values.places = selectedPlaces;
          values.programmingLanguage = programmingLanguage;
          createTeam(values)
            .then((response: any) => {
              setTimeout(() => {
                navigate(paths.myTeam);
              }, 1500);
              toast.success(t`toast.team.successAdd`);
            })
            .catch((error) => {
              console.log("error", error.response.status);
              return error.response.status === 423
                ? toast.error(t`toast.team.errorExist`)
                : toast.error(t`toast.team.errorAdd`);
            });
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {
              <TeamForm>
                <LabelStyle htmlFor="teamName">
                  <IconProject />
                  {t`team.teamName.name`}
                </LabelStyle>
                <Input
                  type="text"
                  name="teamName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.teamName}
                  placeholder={t`team.teamName.placeholder`}
                  id="teamName"
                />
                <StyledInlineErrorMessageForm>
                  {errors.teamName && touched.teamName && errors.teamName}
                </StyledInlineErrorMessageForm>
                <LabelStyle htmlFor="teamName">
                  <IconProject />
                  {t`team.description`}
                </LabelStyle>
                <Input
                  type="text"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  placeholder={t`team.description`}
                  id="description"
                />
                <StyledInlineErrorMessageForm>
                  {errors.description && touched.description && errors.description}
                </StyledInlineErrorMessageForm>
                <LabelStyle htmlFor="places">
                  <IconText />
                  {t`team.places.name`}
                </LabelStyle>
                <StyledSelect
                  name="places"
                  options={places.map((e) => ({ label: e, value: e }))}
                  classNamePrefix={"Select"}
                  placeholder={t`team.places.placeholder`}
                  id="places"
                  onChange={(e: any) => {
                    setSelectedPlaces(e.value);
                  }}
                />
                {selectedPlaces === 0 ? (
                  <>
                    <LabelStyle htmlFor="users">{t`team.closeInformation`}</LabelStyle>
                  </>
                ) : (
                  ""
                )}
                {ids.length >= selectedPlaces && selectedPlaces > 0 ? (
                  <>
                    <LabelStyle htmlFor="users">{t`team.closeInformationEnd`}</LabelStyle>
                  </>
                ) : (
                  ""
                )}
                <LabelStyle htmlFor="users">
                  <IconText />
                  {t`team.users`}
                </LabelStyle>

                <StyledSelect
                  name="users"
                  options={usernames}
                  classNamePrefix={"Select"}
                  id="users"
                  isMulti
                  placeholder={t`team.usersPlaceholder`}
                  onChange={(values: any) => {
                    setIdsAll(values);
                  }}
                  isDisabled={checkCurrentPlaces() ? true : false}
                />

                <LabelStyle htmlFor="language">
                  <IconPassword />
                  {t`team.language`}
                </LabelStyle>

                <ul>
                  {programmingLanguage.length > 0 &&
                    programmingLanguage.map(({ nameLang, level }, index) => (
                      <StyledLi key={index}>
                        <LabelLang htmlFor={`team-language-${index}`}>
                          {nameLang} {level}
                        </LabelLang>
                        <ClosedButton onClick={() => deleteLanguage(index, programmingLanguage)} />
                      </StyledLi>
                    ))}
                </ul>
                <Modal
                  children={
                    <StyledDiv>
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
                        options={level}
                        classNamePrefix={"Select"}
                        placeholder={t`team.level`}
                        id="level"
                        onChange={(e: any) => setCurrentLevel(e.value)}
                      />
                    </StyledDiv>
                  }
                  childrenButton={
                    <ButtonInModal type="button" onClick={handleClick}>
                      {t`team.button.add`}
                    </ButtonInModal>
                  }
                  title={t`team.languageName`}
                  buttonText={t`team.button.add`}
                ></Modal>
                <ButtonForm type="submit" disabled={!isValid}>
                  {t`team.button.addTeam`}
                </ButtonForm>
                <Toast />
              </TeamForm>
            }
          </Form>
        )}
      </Formik>
    </>
  );
};
