import { LabelStyle } from "components/Registration/RegForm.style";
import React, { useState } from "react";
// import { Formik, Form } from "formik";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

import { Button, Input, IconEye, IconText, LogoPage, IconEyeHide, Toast, LogoPageSmall } from "styles";
// import { LogoPageSmall } from "components/styles/LogoPage.style";
// import { paths } from "config/paths";

interface IOpinions {
  content: string;
  userId: string;
  mentorId: string;
  // stars: number;
}


export const Opinions = () => {
  return (
    <>
      <h4>My Opinions</h4>
      <img></img>
      <button>Add New Opinion</button>

      <LabelStyle htmlFor="opinion">
        <LabelStyle htmlFor="topInfo">
          <IconText></IconText>
          <p>Huar D'ckhed</p>
        </LabelStyle>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque, est impedit cum</p>
        <button>Edit</button>
      </LabelStyle>

      <LabelStyle htmlFor="opinion">
        <LabelStyle htmlFor="topInfo">
          <IconText></IconText>
          <p>Cumi Msait</p>
        </LabelStyle>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque, est impedit cum</p>
        <button>Edit</button>
      </LabelStyle>

      <LabelStyle htmlFor="opinion">
        <LabelStyle htmlFor="topInfo">
          <IconText></IconText>
          <p>Bitson Mitt</p>
        </LabelStyle>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque, est impedit cum</p>
        <button>Edit</button>
      </LabelStyle>
    </>
  );
};