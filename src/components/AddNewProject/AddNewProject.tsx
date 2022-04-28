import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

import { createProject, getMentors } from "services/project.service";
import IAddNewProject from "./AddNewProject.interface";
import { AddNewProjectSchema } from "./validate";
import { AddNewProjectForm } from "./Form.style";
import { LabelStyle, ErrorMsg, ButtonForm } from "../Registration/RegForm.style";
import { Input, StyledSelect, IconProject, IconText, Toast } from "styles";
import { paths } from "config/paths";


const options = [
  { value: "true", label: "Open project" },
  { value: "false", label: "Close project" }
];

const user = localStorage.getItem("user") as string;

export const AddNewProject = () => {

  let navigate = useNavigate();
  const { t } = useTranslation();


  // TODO => This section will be developed over the next month. These are just the first attempts.
  const [selectedValue, setSelectedValue] = useState("true");
  const selectChange = (obj: any) => {
    setSelectedValue(obj.value);
  }
  // TODO

  const [allMentors, setAllMentors] = useState([]);

  useEffect(() => {
    getMentors()
      .then((res) => {
        setAllMentors(res.data)
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, [])

  const mentrs = allMentors.map((e:any) => e.username);

  const initialValues: IAddNewProject = {
    name: "",
    userId: user,
    mentorId: "",
    content: "",
    status: selectedValue,
  };

  return (
    <Formik
      initialValues={initialValues} 
      validationSchema={AddNewProjectSchema()} 
      onSubmit={(formValue: IAddNewProject) => {
        let { name, userId = user, mentorId, content, status = selectedValue } = formValue;
        createProject(name, userId, mentorId, content, status).then(
          () => {
            setTimeout(() => {
              navigate(paths.myProjects, { replace: true })
            }, 3000);
            toast.success(t`addNewProject.validation.success`)
          },
          ({ response: { status } }) => toast.error(status === 400 ? t`addNewProject.validation.validation` : t`addNewProject.validation.error`) 
        )
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
            options={mentrs.map((e) => ({label: e, value: e}))}
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
            onChange={selectChange} 
            />


            <ButtonForm type="submit" disabled={!isValid}>
              {t`addNewProject.button`} 
            </ButtonForm>

            <Toast />

        </AddNewProjectForm>
      </Form>
      )}}
    </Formik>
  )
}