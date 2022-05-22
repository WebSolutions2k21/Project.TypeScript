import styled from "styled-components";
import { Button, Arrow, Bin } from "styles"; //+ ProfilePic
import { Card } from "styles/Card.style";

export const OpinionForm = styled.div`
  // display: flex;
  // flex-direction: column;
  // align: center;
  // align-items: center;
  width: 85vw;
  max-width: 700px;
  margin: 0 auto;
`;

export const AddOpinionButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const CardBox = styled(Card)`
  width: 85%;
  margin: 20px auto;
  padding: 10px;
  // margin: 0 auto 40px;
  // background: rgba(255, 85, 185, 0.12);
`;

export const CommentInfo = styled.div`
  font-size: clamp(0.8125rem, 0.7589rem + 0.2679vw, 1rem);
  display: flex;
  align-items: center;
  margin: 15px 10px;
  /* @media (max-width: 576px) {
    font-size: 13px;
  } */
`;

export const OpinionAuthor = styled.p`
  margin-left: 7px;
  margin-right: auto;
  display: inline;
  color: #174c6f;
`;

// export const StarsBox = styled.div`
//   display: inline;
// `;

// export const StarsIcon = styled(Star)`
//   margin: 0 3px;
//   @media (max-width: 576px) {
//     width: 13px;
//   }
// `;

export const OpinionText = styled.p`
  display: inline;
  font-size: 12px;
  color: #174c6f;
  margin: auto 15px;
  display: block;
`;

export const ButtonsArea = styled.div`
  // background-color: blue;
  height: 60px;
`;

export const ArrowBtn = styled.button`
  border: none;
  background-color: transparent;
  display: inline;
  margin: 0 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: none;
`;

export const ArrowIco = styled(Arrow)``;

export const BinButton = styled(Button)`
  width: 25px;
  height: 25px;
  margin: 0;
  position: absolute;
  top: 50%;
  right: 45px;
  transform: translateY(-50%);
  display: none;
`;

export const BinIco = styled(Bin)``;

export const ButtonStyle = styled(Button)`
  text-transform: uppercase;
  border: #c4c4c4;
  width: 50px;
  height: 25px;
  font-size: 14px;
  display: block;
  // display: inline;
  margin: 10px;
  margin-left: auto;
  // right: 45px;
  // top: 50%;
  // transform: translateY(-50%);
  // position: absolute;
  // display: none;
  &:hover {
  }
`;

export const ButtonSave = styled(ButtonStyle)`
  display: inline;
  margin: 0;
  position: absolute;
  top: 50%;
  right: 85px;
  transform: translateY(-50%);
  display: none;
`;
