import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";

import { AddNewOpinionSchema } from "./validate";
import { getMentors } from "../../services/opinion.service"; //+ createOpinion to import
import { AddNewOpinionForm } from "./AddNewOpinion.style";
import { LabelStyle, ErrorMsg, ButtonForm } from "../Registration/RegForm.style";
import { Input, StyledSelect, IconProject, IconText, Toast } from "styles";
import IAddNewOpinion from "./AddNewOpinion.interface";


const user = localStorage.getItem("user") as string;

export const AddNewOpinion = () => {
  // const navigate = useNavigate();
  
  // TODO: wybor w react-select
  // const [selectedValue, setSelectedValue] = useState("true");
  // const selectChange = (obj: any) => {
  //   setSelectedValue(obj.value);
  // };
  // TODO
  
  const [allMentors, setAllMentors] = useState([]);
  const { t } = useTranslation();
  
  useEffect(() => {
    getMentors()
      .then((res) => {
        setAllMentors(res.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, [t]);

  const mentors = allMentors.map((e: any) => e.username);

  const initialValues: IAddNewOpinion = {
    // username: "",
    userId: user,
    mentorId: "",
    content: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddNewOpinionSchema()}
      onSubmit={(formValue: IAddNewOpinion) => {
        // TODO:
      //    createOpinion(username, userId, mentorId, content).then(
      //     () => {
      //       setTimeout(() => {
      //         navigate(paths.myOpinions, { replace: true });
      //       }, 3000);
      //       toast.success(t`addNewOpinion.validation.success`);
      //     },
      //     ({ response: { status } }) =>
      //       toast.error(status === 400 ? t`addNewOpinion.validation.validation` : t`addNewOpinion.validation.error`),
      //   );
       }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => {
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <AddNewOpinionForm>
              {/* <LabelStyle htmlFor="username">
                <IconText />
                {t`addNewOpinion.username`}
              </LabelStyle>
              <Input
                type="text"
                id="username"
                autoCapitalize="off"
                autoCorrect="off"
                placeholder={t`addNewOpinion.usernamePlaceholder`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <ErrorMsg>{errors.username && touched.username && errors.username}</ErrorMsg> */}

              <LabelStyle htmlFor="mentor">
                <IconText />
                {t`addNewOpinion.mentor`}
              </LabelStyle>
              <StyledSelect
                name="mentor"
                options={mentors.map((e) => ({ label: e, value: e }))}
                classNamePrefix={"Select"}
                placeholder={t`addNewOpinion.mentorPlaceholder`}
                id="mentor"
              />

              <LabelStyle htmlFor="content">
                <IconProject />
                {t`addNewOpinion.content`}
              </LabelStyle>
              <Input
                type="text"
                name="content"
                placeholder={t`addNewOpinion.contentPlaceholder`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
                id="content"
              />
              <ErrorMsg>{errors.content && touched.content && errors.content}</ErrorMsg>

              <ButtonForm type="submit" disabled={!isValid}>
                {t`addNewOpinion.button`}
              </ButtonForm>

              <Toast />
            </AddNewOpinionForm>
          </Form>
        );
      }}
    </Formik>
  );
};
