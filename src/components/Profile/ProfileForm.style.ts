import styled from "styled-components";
import { Label, Foot, Button, Input } from "../../styles";

export const ProfileForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  align-items: center;
  margin: auto;
`;

export const ErrorMsg = styled.div`
  color:${({ theme }) => theme.colors.warning || "#FF0000"} ;
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

export const Footer = styled(Foot)`
    margin-top: 20px;
`;

export const EditButton = styled(Button)`
  margin-top: 20px;
`;

export const InputStyled = styled(Input)`
  &::placeholder {
  text-align: left;
  }
`