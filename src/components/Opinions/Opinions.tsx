import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { paths } from "config/paths";

import { Modal } from "components/Modal";
import { getAllOpinions } from "services/opinion.service";
import { LabelStyle } from "components/Registration/RegForm.style";
import IOpinions from "./Opinions.interface";

import { Button, IconText, Toast } from "styles";
import {
  AddOpinionButton,
  OpinionForm,
  // TopArea,
  CardBox,
  CommentInfo,
  ButtonStyle,
  // TopText,
  // ProfPic,
  // ButtonsArea,
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

export const Opinions = () => {
  const [allUsersOpinions, setAllUsersOpinions] = useState<Array<IOpinions>>([]);

  let navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    getAllOpinions()
      .then((response: any) => {
        setAllUsersOpinions(response.data);
      })
      .catch((e: Error) => {
        toast.error(t`toast.opinion.error`);
      });
  }, [t]);
  return (
    <>
      <Navbar />
      <OpinionForm>
        {/* <TopArea> */}
          {/* <TopText>My Opinions</TopText> */}
          {/* <ProfPic /> */}
        {/* </TopArea> */}
        {/* <Button>Add New Opinion</Button> */}
        <AddOpinionButton>Add New Opinion</AddOpinionButton>

        {/* <Modal title={}>
          
        </Modal> */}
        {allUsersOpinions &&
          allUsersOpinions.map((opinion, index) => (
            <CardBox key={index}>
              <CommentInfo>
                <IconText />
                <OpinionAuthor>{opinion.username}</OpinionAuthor>
                <StarsBox>
                  <StarsIcon />
                  <StarsIcon />
                  <StarsIcon />
                  <StarsIcon />
                  <StarsIcon />
                </StarsBox>
              </CommentInfo>
              <OpinionText>{opinion.content}</OpinionText>
              {/* <ButtonsArea> */}
                {/* <ArrowBtn>
                  <ArrowIco />
                </ArrowBtn>
                <ButtonSave>save</ButtonSave>
                <BinButton>
                  <BinIco />
                </BinButton>
                <ButtonStyle>edit</ButtonStyle> */}
              {/* </ButtonsArea> */}
            </CardBox>
          ))}

      </OpinionForm>
      <Toast />
    </>
  );
};
