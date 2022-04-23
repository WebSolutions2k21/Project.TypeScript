import { LabelStyle } from "components/Registration/RegForm.style";
import React, { useState } from "react";
// import { Formik, Form } from "formik";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

import { Button, IconText, Toast } from "styles";
import {
  OpinionForm,
  TopArea,
  CardBox,
  CommentInfo,
  ButtonStyle,
  TopText,
  ProfilePic,
  OpinionAuthor,
  OpinionText,
  StarsBox,
} from "components/Opinions/Opinions.style";
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
    <OpinionForm>
      <TopArea>
        <TopText>My Opinions</TopText>
        {/* <img src="/src/assets/UserAvatar 1.png"></img> */}
        <ProfilePic>photo</ProfilePic>
      </TopArea>
      <Button>Add New Opinion</Button>

      <CardBox>
        <CommentInfo>
          <IconText />
          <OpinionAuthor>Lorem Ipsum</OpinionAuthor>
          <StarsBox>*****</StarsBox>
        </CommentInfo>
        <OpinionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque, est impedit cum
        </OpinionText>
        <ButtonStyle>Edit</ButtonStyle>
      </CardBox>
      <CardBox>
        <CommentInfo>
          <IconText />
          <OpinionAuthor>Lorem Ipsum</OpinionAuthor>
          <StarsBox>*****</StarsBox>
        </CommentInfo>
        <OpinionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque, est impedit cum
        </OpinionText>
        <ButtonStyle>Edit</ButtonStyle>
      </CardBox>
      <CardBox>
        <CommentInfo>
          <IconText />
          <OpinionAuthor>Lorem Ipsum</OpinionAuthor>
          <StarsBox>*****</StarsBox>
        </CommentInfo>
        <OpinionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque, est impedit cum
        </OpinionText>
        <ButtonStyle>Edit</ButtonStyle>
      </CardBox>
    </OpinionForm>
  );
};
