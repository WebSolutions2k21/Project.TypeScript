import styled from "styled-components";
import { Button } from "styles";
import { Card } from "styles/Card.style";
// import { StyledInlineErrorMessage } from "components/styles";

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
`;

export const CardBox = styled(Card)`
  width: 85%;
  margin: 0 auto 40px;
`;

export const ProfilePic = styled.div`
  float: right;
`;

export const CommentInfo = styled.div`
  margin: 15px;
`;

export const OpinionAuthor = styled.p`
  margin-left: 7px;
  margin-right: 50px;
  display: inline;
  font-size: 16px;
  color: #174c6f;
`;

export const OpinionText = styled.p`
  display: inline;
  font-size: 12px;
  color: #174c6f;
  margin: auto 15px;
  display: block;
`;

export const StarsBox = styled.div`
  display: inline;
`;

export const ButtonStyle = styled(Button)`
  width: 50px;
  height: 25px;
  font-size: 14px;
  margin: 15px 20px 15px 255px;
`;
