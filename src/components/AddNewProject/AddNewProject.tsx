import React from "react";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import { toast } from "react-toastify";

import IAddNewProject from "./AddNewProject.interface";
import { AddNewProjectSchema } from "./validate";
import { AddNewProjectForm } from "./Form.style";
import { LabelStyle, ErrorMsg } from "../Registration/RegForm.style";
import { Button, Input, StyledSelect, IconProject, IconText } from "styles";


const options = [
  { value: "true", label: "Open project" },
  { value: "false", label: "Close project" }
];


export const AddNewProject = () => {

  const { t } = useTranslation();

  const initialValues: IAddNewProject = {
    name: "",
    mentor: [],
    content: "",
    status: [],
  };

  return (
    <Formik
      initialValues={initialValues} 
      validationSchema={AddNewProjectSchema()} 
      onSubmit={(formValue) => {
        // const { name, mentor, content, status } = formValue;
        console.log(formValue)
      }}>
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
            <ErrorMsg>
              {errors.name && touched.name && errors.name}
            </ErrorMsg>


            <LabelStyle htmlFor="mentor">
            <IconText />
              {t`addNewProject.mentor`}
            </LabelStyle>
            <StyledSelect 
            name="mentor"
            options={values.mentor}
            classNamePrefix={'Select'}
            placeholder={t`addNewProject.mentorPlaceholder`}
            id="mentor"
            />


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
            <ErrorMsg>
              {errors.content && touched.content && errors.content}
            </ErrorMsg>


            <LabelStyle htmlFor="status">
            <IconProject />
              {t`addNewProject.status`}
            </LabelStyle>
            <StyledSelect 
            name="status"
            options={options}
            classNamePrefix={'Select'}
            placeholder={t`addNewProject.statusPlaceholder`}
            id="status"
            />


            <Button type="submit" disabled={!isValid}>
            {t`addNewProject.button`} 
            </Button>

        </AddNewProjectForm>
      </Form>
      )}}
    </Formik>
  )
}