import { LabelStyle } from "components/Registration/RegForm.style";
import React, { useState } from "react";
// import { Formik, Form } from "formik";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

import { Button, IconText, Toast } from "styles";
import { TopArea, CardBox, ButtonStyle, TopText, OpinionAuthor, OpinionText, StarsBox } from "components/Opinions/Opinions.style";
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
      <TopArea>
        <TopText>My Opinions</TopText>
        {/* <img src="/src/assets/UserAvatar 1.png"></img> */}
        <div>photo</div>
      </TopArea>
      <Button>Add New Opinion</Button>

      <CardBox>
        <IconText />
        <OpinionAuthor>Huar D'ckhed</OpinionAuthor>
        <StarsBox>*****</StarsBox>
        <OpinionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque, est impedit cum
        </OpinionText>
        <ButtonStyle>Edit</ButtonStyle>
      </CardBox>
      <CardBox>
        <IconText />
        <OpinionAuthor>Cumi Msait</OpinionAuthor>
        <StarsBox>*****</StarsBox>
        <OpinionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque, est impedit cum
        </OpinionText>
        <ButtonStyle>Edit</ButtonStyle>
      </CardBox>
      {/* <CardBox>
        <IconText></IconText>
        <p>Bitson Mitt</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque, est impedit cum</p>
        <ButtonStyle>Edit</ButtonStyle>
      </CardBox> */}
    </>
  );
};