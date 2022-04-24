import styled from "styled-components";
import { Button, Star, ProfilePic, Arrow, Bin } from "styles";
import { Card } from "styles/Card.style";

export const OpinionForm = styled.div`
  display: flex;
  flex-direction: column;
  align: center;
  align-items: center;
`;

export const TopArea = styled.div`
  margin: 50px 5% 0 10%;
  width: 85%;
`;

export const TopText = styled.h3`
  font-weight: 400;
  font-size: 20px;
  color: #174c6f;
  float: left;
  line-height: 50px;
`;

export const CardBox = styled(Card)`
  width: 85%;
  margin: 0 auto 40px;
  // background: rgba(255, 85, 185, 0.12);
`;

export const ProfPic = styled(ProfilePic)`
  float: right;
  width: 60px;
`;

export const CommentInfo = styled.div`
  margin: 15px 10px;
`;

export const OpinionAuthor = styled.p`
  margin-left: 7px;
  margin-right: 50px;
  display: inline;
  font-size: 16px;
  color: #174c6f;
`;

export const StarsBox = styled.div`
  display: inline;
`;

export const StarsIcon = styled(Star)`
  margin: 0 3px;
`;

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
  display: inline;
  margin: 0;
  right: 45px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
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
