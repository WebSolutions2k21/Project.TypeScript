import { Modal } from "components";
import { Form, Formik } from "formik";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTeam } from "services/team.service";

import ITeamProject from "../ITeamProject.interface";
import { IconPassword, Label, StyledSelect, Toast } from "styles";
import { TeamForm } from "../AllTeamProjectTeam/AllTeamProjectTeam.style";
import { ButtonForm, ButtonInModal, LabelStyle, StyledInlineErrorMessageForm, StyleFromModal } from "./AddTeam.style";
import { IconText, Input, IconProject } from "styles";

import { options } from "config/languages";
import { getOnlyUsers } from "services/user.service";
import IUser from "../IUser.interface";
import { AddNewTeamValidationSchema } from "../AddTeamValidation";
import { paths } from "config/paths";
import { level } from "config/level";
import { IProgrammingLanguage } from "../IProgrammingLanguege";

import { ActiveModal } from "components/Modal/Modal.style";

export const AddNewTeam = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [idsAll, setIdsAll] = useState<Array<any>>([]);
  const [ids, setIds] = useState<Array<string>>([]);
  const places = Array(10)
    .fill(0)
    .map((e, i) => i + 1);
  let navigate = useNavigate();

  const [selectedPlaces, setSelectedPlaces] = useState(places[0]);
  const [state, setState] = useState<IProgrammingLanguage>({ nameLang: "", level: "" });

  const [currentNameLang, setCurrentNameLang] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");

  const [allLanguage, setAllLanguage] = useState<Array<IProgrammingLanguage>>([]);
  const { t } = useTranslation();

  const addLevelAndLang = () => {
    // console.log("State", state);
    // console.log("All language w add", allLanguage);
    setState(() => ({
      nameLang: currentNameLang,
      level: currentLevel,
    }));
    // console.log("czy sie dodało");

    setAllLanguage((prevState) => [...prevState, state]);
    document.body.classList.remove(ActiveModal);
  };

  useEffect(() => {
    getOnlyUsers()
      .then((response: any) => {
        setUsers(response.data);
        // console.log("response data users only", response.data);
      })
      .catch((e: Error) => {
        toast.error(t`toast.team.error`);
      });
  }, [t]);

  const usernames = users.map(({ username, _id }) => ({
    label: username,
    value: _id,
  }));
  // console.log("username", usernames);

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
      console.log("id length", ids.length + 1, selectedPlaces);
      if (ids.length + 1 <= selectedPlaces) {
        const newIds = [...ids];

        newIds.push(val.value);

        setIds(newIds);
      } else {
        console.log("nie moesz dodać");
      }
    });
  }, [idsAll]);

  // const selectUser = (event: React.ChangeEvent<HTMLInputElement>) => {
  // const selectedId = event.target.value;

  // if (ids.includes(selectedId)) {
  //   const newIds = ids.filter((id) => id !== selectedId);
  //   setIds(newIds);
  // } else {
  //   const newIds = [...ids];
  //   newIds.push(selectedId);
  //   setIds(newIds);
  // }

  // };

  const selectChange = (e: any) => {
    setSelectedPlaces(e.value);
  };

  //   console.log("value w set", idsAll)
  // idsAll.map((res) => {
  // console.log('ddd', res)
  //  })

  return (
    <>
      <Formik
        validationSchema={AddNewTeamValidationSchema()}
        initialValues={initialValues}
        onSubmit={(values) => {
          values.usersIds = ids;
          values.mentorId = localStorage.getItem("id") as string;
          values.places = selectedPlaces;
          values.programmingLanguage = allLanguage;
          console.log("values", values);

          createTeam(values).then(
            (res) => {
              console.log("res ", res);

              setTimeout(() => {
                navigate(paths.myTeam);
              }, 1500);
              toast.success(t`toast.login.success`);
            },
            (error) => {
              // switch (error.response.status) {
              //   case 400:
              //     return toast.error(t`toast.login.validation`);
              //   case 404:
              //     return toast.error(t`toast.login.notFound`);
              //   case 423:
              //     return toast.error(t`toast.login.locked`);
              //   default:
              //     return toast.error(t`toast.login.error`);
              // }
            },
          );
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

                <LabelStyle htmlFor="language">
                  <IconPassword />
                  {t`team.language`}
                </LabelStyle>
                <ul>
                  {allLanguage.length > 0 &&
                    allLanguage.map(({ nameLang, level }, index) => (
                      <li key={index}>
                        <Label htmlFor={`team-language-${index}`}>
                          {nameLang} {level}
                        </Label>
                      </li>
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
                        options={level}
                        classNamePrefix={"Select"}
                        placeholder={t`team.level`}
                        id="level"
                        onChange={(e: any) => setCurrentLevel(e.value)}
                      />
                      <ButtonInModal type="button" onClick={() => addLevelAndLang()}>
                        {t`team.button.add`}{" "}
                      </ButtonInModal>
                    </>
                  }
                  title={t`team.languageName`}
                  buttonText={t`team.button.add`}
                ></Modal>

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
                />

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
