import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { createProject } from "services/project.service";
import IAddNewTeamProject from "./AddNewTeamProject.interface";
// import { AddNewProjectSchema } from "./validate";
import { options } from "../../utils/languages";
import { AddNewProjectForm } from "../AddNewProject/Form.style"
import { LabelStyle, ErrorMsg, ButtonForm } from "../Registration/RegForm.style";
import { Input, StyledSelect, IconProject, IconPassword, IconText, Toast } from "styles";
import { paths } from "config/paths";

const user = localStorage.getItem("user") as string;

export const AddNewTeamProject = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [lngs, setLngs] = useState([]);

  const onChangeInputArray = (value: any) => {
    setLngs(value.map((e: any) => e.value));
    return lngs;
  };


  const initialValues: IAddNewTeamProject = {
    name: "",
    mentorId: "",
    teamId: [],
    language: [],
    content: "",
    description: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(formValue: IAddNewTeamProject) => {
        console.log(formValue)
      }}
      // validationSchema={}
      // onSubmit={(formValue) => {
      //   formValue.mentorId = mntr;
      //   formValue.language = lngs;
      //   let { name, userId, mentorId, language = lngs, content, description } = formValue;
      //   createProject(name, userId, mentorId, language, content, description).then(
      //     () => {
      //       setTimeout(() => {
      //         navigate(paths.myProjects, { replace: true });
      //       }, 3000);
      //       toast.success(t`addNewProject.validation.success`);
      //     },
      //     ({ response: { status } }) =>
      //       toast.error(status === 400 ? t`addNewProject.validation.validation` : t`addNewProject.validation.error`),
      //   );
      // }}
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
                <IconPassword />
                {t`addNewProject.team`}
              </LabelStyle>
              <StyledSelect
                isMulti
                name="teamId"
                // options={options}
                classNamePrefix={"Select"}
                placeholder={t`addNewProject.teamPlaceholder`}
                id="teamId"
                // onChange={}
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