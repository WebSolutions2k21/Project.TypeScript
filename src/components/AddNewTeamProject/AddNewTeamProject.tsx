import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { createTeamProject } from "services/project.service";
import { getUserTeam } from "services/userProjects.service";
import { getTeam } from "services/team.service";
import IAddNewTeamProject from "./AddNewTeamProject.interface";
import { AddNewProjectSchema } from "../AddNewProject/validate";
import { options } from "utils/languages";
import { AddNewProjectForm } from "../AddNewProject/Form.style";
import { LabelStyle, ErrorMsg, ButtonForm } from "../Registration/RegForm.style";
import { Input, StyledSelect, IconProject, IconPassword, IconText, Toast } from "styles";
import { paths } from "config/paths";


export const AddNewTeamProject = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [lngs, setLngs] = useState([]);
  const [allTeam, setAllTeam] = useState<object[]>([]);
  const [team, setTeam] = useState<string>("");
  const [mentor, setMentor] = useState("");

  useEffect(() => {
    getTeam(team)
      .then((res) => {
        setMentor(res.data.mentorId);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, [team]);

  useEffect(() => {
    getUserTeam()
      .then((res) => {
        setAllTeam(res.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);

  const teams = allTeam.map((e: any) => e);

  const onChangeInputArray = (value: any) => {
    setLngs(value.map((e: any) => e.value));
    return lngs;
  };

  const onChangeInput = (value: any) => {
    setTeam(value.value);
  };

  const initialValues: IAddNewTeamProject = {
    name: "",
    mentorId: mentor,
    teamId: "",
    language: [],
    content: "",
    description: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddNewProjectSchema()}
      onSubmit={(formValue: IAddNewTeamProject) => {
        formValue.language = lngs;
        formValue.teamId = team;
        formValue.mentorId = mentor;
        const { name, mentorId = mentor, teamId = team, language = lngs, content, description } = formValue;
        createTeamProject(name, mentorId, teamId, language, content, description).then(
          () => {
            setTimeout(() => {
              navigate(paths.myTeamProjects, { replace: true });
            }, 3000);
            toast.success(t`addNewProject.validation.success`);
          },
          ({ response: { status } }) =>
            toast.error(status === 400 ? t`addNewProject.validation.validation` : t`addNewProject.validation.error`),
        );
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => {
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <AddNewProjectForm>
              <LabelStyle htmlFor="name">
                <IconProject />
                {t`addNewProject.name`}
              </LabelStyle>
              <Input
                type="text"
                name="name"
                autoCapitalize="off"
                autoCorrect="off"
                placeholder={t`addNewProject.namePlaceholder`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                id="name"
              />
              <ErrorMsg>{errors.name && touched.name && errors.name}</ErrorMsg>

              <LabelStyle htmlFor="teamId">
                <IconText />
                {t`addNewProject.team`}
              </LabelStyle>
              <StyledSelect
                name="teamId"
                options={teams.map((e) => ({ label: e.teamName, value: e._id }))}
                classNamePrefix={"Select"}
                placeholder={t`addNewProject.teamPlaceholder`}
                id="teamId"
                onChange={onChangeInput}
              />
              <ErrorMsg>{errors.teamId && touched.teamId && errors.teamId}</ErrorMsg>

              <LabelStyle htmlFor="language">
                <IconPassword />
                {t`addNewProject.language`}
              </LabelStyle>
              <StyledSelect
                isMulti
                name="language"
                options={options}
                classNamePrefix={"Select"}
                placeholder={t`addNewProject.languagePlaceholder`}
                id="language"
                onChange={onChangeInputArray}
              />
              <ErrorMsg>{errors.language && touched.language && errors.language}</ErrorMsg>

              <LabelStyle htmlFor="content">
                <IconProject />
                {t`addNewProject.content`}
              </LabelStyle>
              <Input
                type="text"
                name="content"
                autoCapitalize="off"
                autoCorrect="off"
                placeholder={t`addNewProject.contentPlaceholder`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
                id="content"
              />
              <ErrorMsg>{errors.content && touched.content && errors.content}</ErrorMsg>

              <LabelStyle htmlFor="description">
                <IconProject />
                {t`addNewProject.description`}
              </LabelStyle>
              <Input
                type="text"
                name="description"
                autoCapitalize="off"
                autoCorrect="off"
                placeholder={t`addNewProject.descriptionPlaceholder`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                id="description"
              />
              <ErrorMsg>{errors.description && touched.description && errors.description}</ErrorMsg>

              <ButtonForm type="submit" disabled={!isValid}>
                {t`addNewProject.button`}
              </ButtonForm>

              <Toast />
            </AddNewProjectForm>
          </Form>
        );
      }}
    </Formik>
  );
};
