import React from "react";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { createProject } from "services/project.service";
import IAddNewProject from "./AddNewProject.interface";
import { paths } from "config/paths";
import { AddNewProjectSchema } from "./validate";
import { AddNewProjectForm } from "./Form.style";
import { LabelStyle, ErrorMsg } from "../Registration/RegForm.style";
import { Button, Input, StyledSelect, IconProject, IconText } from "styles";

const options = [
  { value: "true", label: "Open project" },
  { value: "false", label: "Close project" },
];

export const AddNewProject = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();

  const initialValues: IAddNewProject = {
    name: "",
    // mentorId: "",
    content: "",
    // status: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddNewProjectSchema()}
      // onSubmit={(formValue: IAddNewProject) => {
      //   const { name, mentor, content, status } = formValue;
      //   createProject(name, mentor, content, status).then(
      //     () => {
      //       setTimeout(() => {
      //         navigate(paths.login, { replace: true })
      //       }, 3000);
      //       toast.success(t`toast.registration.success`)
      //     },
      //     ({ response: { status } }) => toast.error(status === 400 ? t`toast.registration.validation` : t`toast.registration.error`)
      //   )
      // }}

      onSubmit={(values) => {
        console.log("values przed create", values);
        createProject(values).then(
          (res) => {
            console.log(" values", res.data);
            setTimeout(() => {
              navigate(paths.myProjects, { replace: true });
            }, 3000);

            toast.success(t`toast.registration.success`);
          },
          (error) => {
            console.log("error w add", error)
            // switch (error.response.status) {

            //   case 400:
            //     return toast.error(t`toast.login.validation`);
              // case 404:
              //   return toast.error(t`toast.login.notFound`);
              // case 423:
              //   return toast.error(t`toast.login.locked`);
            //   default:
            //     return toast.error(t`toast.login.error`);
            // }
          },
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

              <LabelStyle htmlFor="mentor">
                <IconText />
                {t`addNewProject.mentor`}
              </LabelStyle>
              {/* <StyledSelect
                name="mentor"
                classNamePrefix={"Select"}
                placeholder={t`addNewProject.mentorPlaceholder`}
                id="mentor"
              /> */}

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

              <LabelStyle htmlFor="status">
                <IconProject />
                {t`addNewProject.status`}
              </LabelStyle>
              {/* <StyledSelect
                name="status"
                options={options}
                classNamePrefix={"Select"}
                placeholder={t`addNewProject.statusPlaceholder`}
                value={values.status}
                id="status"
              /> */}

              <Button type="submit" disabled={!isValid}>
                {t`addNewProject.button`}
              </Button>
            </AddNewProjectForm>
          </Form>
        );
      }}
    </Formik>
  );
};
