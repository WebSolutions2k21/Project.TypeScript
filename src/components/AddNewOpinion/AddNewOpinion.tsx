import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";

import { RatingStar } from "rating-star";
import { AddNewOpinionSchema } from "./validate";
import { createOpinion, getMentors } from "../../services/opinion.service";
import { AddNewOpinionForm } from "./AddNewOpinion.style";
import { LabelStyle, ErrorMsg, ButtonForm } from "../Registration/RegForm.style";
import { Input, StyledSelect, IconProject, IconText, Toast } from "styles";
import IAddNewOpinion from "./AddNewOpinion.interface";
import { paths } from "config/paths";

interface IMentors {
  username: string;
  _id: string;
}

export const AddNewOpinion = () => {
  const userId = localStorage.getItem("id") as string;
  const navigate = useNavigate();
  const [mntr, setMntr] = useState<string>("");
  const [allMentors, setAllMentors] = useState<Array<IMentors>>([]);
  const [rating, setRating] = React.useState(5);

  const { t } = useTranslation();

  useEffect(() => {
    getMentors()
      .then((res) => {
        console.log("mentors", res.data);
        setAllMentors(res.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, [t]);

  const mentors = allMentors.map(({ username, _id }) => ({
    label: username,
    value: _id,
  }));

  const initialValues: IAddNewOpinion = {
    stars: 5,
    userId: userId,
    mentorId: "",
    content: "",
  };

  const onRatingChange = (score: React.SetStateAction<number>) => {
    setRating(score);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddNewOpinionSchema()}
      onSubmit={(values: IAddNewOpinion) => {
        values.mentorId = mntr;
        values.stars = rating;
        createOpinion(values).then(
          () => {
            setTimeout(() => {
              navigate(paths.myOpinions, { replace: true });
            }, 1500);
            toast.success(t`addNewOpinion.validation.success`);
          },
          ({ response: { status } }) =>
            toast.error(status === 400 ? t`addNewOpinion.validation.validation` : t`addNewOpinion.validation.error`),
        );
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => {
        return (
          <Form noValidate onSubmit={handleSubmit}>
            <AddNewOpinionForm>
           {/* TODO to do usunięcia bo to username */}
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
                options={mentors}
                classNamePrefix={"Select"}
                placeholder={t`addNewOpinion.mentorPlaceholder`}
                id="mentor"
                // onChange={onChangeInput}
                onChange={(value: any) => {
                  setMntr(value.value);
                }}
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

              <RatingStar
                colors={{ mask: "#d9248f" }}
                noBorder
                clickable
                maxScore={5}
                id="stars"
                rating={rating}
                onRatingChange={onRatingChange}
              />

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
