import styled from "styled-components";
import { StyledInlineErrorMessage, Label, Foot } from "styles";

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align: center;
  width: 375px;
  align-items: center;
`;

export const View = styled.div`
  position: relative;

  & > img {
    position: absolute;
    top: 25%;
    right: 3%;
    cursor: pointer;
  }
`;

export const StyledInlineErrorMessageForm = styled(StyledInlineErrorMessage)`
  margin: 10px auto 5px 70px;
<<<<<<< HEAD
=======
`;

export const LabelStyle = styled(Label)`
  margin: 10px auto 5px 70px;
`;

export const Footer = styled(Foot)`
  margin-top: 20px;
>>>>>>> 458115a691287347e66a24951099e86045ea8b9f
`;