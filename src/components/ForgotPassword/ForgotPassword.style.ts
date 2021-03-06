import styled from "styled-components";
import { StyledInlineErrorMessage, Button, Foot } from "styles";
import { Card } from "styles/Card.style";

export const ForgotPasswordForm = styled.div`
  display: flex;
  flex-direction: column;
  align: center;
  width: 375px;
  align-items: center;
  margin: auto;
`;

export const StyledInlineErrorMessageForm = styled(StyledInlineErrorMessage)`
  margin: 10px auto;
`;

export const CardForm = styled(Card)`
  width: 300px;
  hight: 250px;
  padding: 15px;
`;

export const ButtonForm = styled(Button)`
  margin: 15px 30px;
`;

export const Footer = styled(Foot)`
  margin-top: 130px;
`;
