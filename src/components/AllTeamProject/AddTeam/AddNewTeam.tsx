import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ITeamProject from "../ITeamProject.interface";
import { createTeam } from "services/team.service";
import { paths } from "config/paths";
import { AddNewTeamForm, ErrorMsg } from "./Form.style";
import { IconProject, Input } from "styles";
import { LabelStyle } from "components/Registration/RegForm.style";

export const AddTeam = () => {
  let navigate = useNavigate();

  const { t } = useTranslation();

  const validationSchema = Yup.object({
    // email: Yup.string()
    //   .email(t`user.email.validation.format`)
    //   .required(t`user.email.validation.requied`),
    // password: Yup.string().required(t`user.password.validation.requied`),
  });

  const initialValues: ITeamProject = {
    teamName: "",
    usersIds: [],
    mentorId: "",
    programmingLanguage: [{ level: "", nameLang: "" }],
    status: true,
  };

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          createTeam(values).then(
            () => {
              setTimeout(() => {
               navigate(paths.teamProjects) ;
              }, 1500);
              toast.success(t`toast.login.success`);
            },
            (error) => {
             console.log(error)
            },
          );
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <AddNewTeamForm>
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
              value={values.teamName}
              id="name"
            />
            <ErrorMsg>
              {errors.teamName && touched.teamName && errors.teamName}
            </ErrorMsg>

            </AddNewTeamForm>
          </Form>
        )}
      </Formik>
    </>
  );
};
