import { LabelStyle } from "components/Registration/RegForm.style";
import React, { useState } from "react";
import IOpinions from "./Opinions.interface";

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
import { Navbar } from "components";
import { Modal } from "components/Modal";

export const Opinions = () => {
  return (
    <>
      <Navbar />
      <OpinionForm>
        <TopArea>
          {/* <TopText>My Opinions</TopText> */}
          {/* <ProfPic /> */}
        </TopArea>
        <Button>Add New Opinion</Button>

        {/* <Modal title={}>
          
        </Modal> */}
        

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
    </>
  );
};
