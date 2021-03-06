import styled from "styled-components";
import { Foot, Label, Button } from "styles";

export const RegForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 355px;
  align-items: center;
  margin: auto;
`;

export const ErrorMsg = styled.div`
  color: ${({ theme }) => theme.colors.warning || "#FF0000"};
  align-self: flex-start;
  font-size: 12px;
  margin: 5px auto 0 60px;
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

export const LabelStyle = styled(Label)`
margin: 20px auto 0 57px;
`;

export const ButtonForm = styled(Button)`
  margin: 30px;
`;

export const Footer = styled(Foot)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 300px;
  margin-top: -10px;
`;