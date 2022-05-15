import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { createProject, getMentors } from "services/project.service";
import IAddNewProject from "./AddNewProject.interface";
import { AddNewProjectSchema } from "./validate";
import { options } from "utils/languages";
import { AddNewProjectForm } from "./Form.style";
import { LabelStyle, ErrorMsg, ButtonForm } from "../Registration/RegForm.style";
import { Input, StyledSelect, IconProject, IconPassword, IconText, Toast } from "styles";
import { paths } from "config/paths";

const user = localStorage.getItem("user") as string;

export const AddNewProject = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [lngs, setLngs] = useState([]);
  const [allMentors, setAllMentors] = useState<object[]>([]);
  const [mntr, setMntr] = useState<string>("");

  useEffect(() => {
    getMentors()
      .then((res) => {
        setAllMentors(res.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);

  interface ProgrammingLanguage {
    _id: string;
    level: string;
    nameLang: string;
  }
  interface Mentors {
    isVerified: boolean;
    isMentor: boolean;
    _id: string;
    username: string;
    firstname?: any;
    lastname: string;
    email: string;
    password: string;
    date: Date;
    programmingLanguage: ProgrammingLanguage[];
    __v: number;
  }

  interface IValue {
    value: { value: string };
  }

  const mentrs = allMentors.map((e: any) => e);

  const onChangeInputArray = (value: any) => {
    setLngs(value.map((e: any) => e.value));
    return lngs;
  };

  const onChangeInput = (value: any) => {
    setMntr(value.value);
  };

  const initialValues: IAddNewProject = {
    name: "",
    userId: user,
    mentorId: "",
    language: [],
    content: "",
    description: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddNewProjectSchema()}
      onSubmit={(formValue: IAddNewProject) => {
        formValue.mentorId = mntr;
        formValue.language = lngs;
        const { name, userId, mentorId, language = lngs, content, description } = formValue;
        createProject(name, userId, mentorId, language, content, description).then(
          () => {
            setTimeout(() => {
              navigate(paths.myProjects, { replace: true });
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

              <LabelStyle htmlFor="mentorId">
                <IconText />
                {t`addNewProject.mentor`}
              </LabelStyle>
              <StyledSelect
                name="mentorId"
                options={mentrs.map((e) => ({ label: e.username, value: e._id }))}
                classNamePrefix={"Select"}
                placeholder={t`addNewProject.mentorPlaceholder`}
                id="mentorId"
                onChange={onChangeInput}
              />
              <ErrorMsg>{errors.mentorId && touched.mentorId && errors.mentorId}</ErrorMsg>

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
