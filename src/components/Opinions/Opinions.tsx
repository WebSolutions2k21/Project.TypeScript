import { LabelStyle } from "components/Registration/RegForm.style";
import React, { useState } from "react";

import { Button, IconText, Toast } from "styles";
import {
  OpinionForm,
  TopArea,
  CardBox,
  CommentInfo,
  ButtonStyle,
  TopText,
  ProfPic,
  ButtonsArea,
  ButtonSave,
  BinButton,
  BinIco,
  ArrowBtn,
  ArrowIco,
  OpinionAuthor,
  OpinionText,
  StarsBox,
  StarsIcon,
} from "components/Opinions/Opinions.style";

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
        <ProfPic />
      </TopArea>
      <Button>Add New Opinion</Button>

      <CardBox>
        <CommentInfo>
          <IconText />
          <OpinionAuthor>Lorem Ipsum</OpinionAuthor>
          <StarsBox>
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
          </StarsBox>
        </CommentInfo>
        <OpinionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque, est impedit cum
        </OpinionText>
        <ButtonsArea>
          <ArrowBtn>
            <ArrowIco />
          </ArrowBtn>
          <ButtonSave>save</ButtonSave>
          <BinButton>
            <BinIco />
          </BinButton>
          <ButtonStyle>edit</ButtonStyle>
        </ButtonsArea>
      </CardBox>

      <CardBox>
        <CommentInfo>
          <IconText />
          <OpinionAuthor>Lorem Ipsum</OpinionAuthor>
          <StarsBox>
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
          </StarsBox>
        </CommentInfo>
        <OpinionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque, est impedit cum
        </OpinionText>
        <ButtonsArea>
          <ButtonStyle>edit</ButtonStyle>
        </ButtonsArea>
      </CardBox>

      <CardBox>
        <CommentInfo>
          <IconText />
          <OpinionAuthor>Lorem Ipsum</OpinionAuthor>
          <StarsBox>
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
          </StarsBox>
        </CommentInfo>
        <OpinionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque, est impedit cum
        </OpinionText>
        <ButtonsArea>
          <ButtonStyle>edit</ButtonStyle>
        </ButtonsArea>
      </CardBox>
    </OpinionForm>
  );
};
