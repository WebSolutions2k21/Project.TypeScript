import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { paths } from "config/paths";
import { RatingStar } from "rating-star";

import { getAllOpinions } from "services/opinion.service";
import IOpinions from "./Opinions.interface";

import { IconText, Toast } from "styles"; //+ Button
import {
  AddOpinionButton,
  OpinionForm,
  CardBox,
  CommentInfo,
  ButtonStyle,

  OpinionAuthor,
  OpinionText,
} from "components/Opinions/Opinions.style";

export const Opinions = () => {
  const [allUsersOpinions, setAllUsersOpinions] = useState<Array<IOpinions>>([]);
  const [rating] = React.useState(5);
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

  const navigateToAddOpinion = () => {
    navigate(paths.addOpinion);
  };

  const navigateToEditOpinion = () => {
    navigate(paths.editOpinion);
  };
    

  return (
    <>
      <OpinionForm>
        <AddOpinionButton type="submit" onClick={navigateToAddOpinion}>{t`opinions.button.addNew`}</AddOpinionButton>

        {allUsersOpinions &&
          allUsersOpinions.map((opinion, index) => (
            <CardBox key={index}>
              <CommentInfo>
                <IconText />
                {/* //TODO zmienić uid na wyswietlanie username */}
                <OpinionAuthor>{opinion.userId}</OpinionAuthor>
         
                <RatingStar
                  colors={{ mask: "#d9248f" }}
                  noBorder
                  numberOfStar={opinion.stars}
                  id="stars"
                  rating={rating}
                />
              </CommentInfo>
              <OpinionText>{opinion.content}</OpinionText>
              <ButtonStyle type="submit" onClick={navigateToEditOpinion}>{t`opinions.button.edit`}</ButtonStyle>
            </CardBox>
          ))}
      </OpinionForm>
      <Toast />
    </>
  );
};
