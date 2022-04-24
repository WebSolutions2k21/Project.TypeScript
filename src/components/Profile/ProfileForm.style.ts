import styled from "styled-components";
import { Label, Foot, Button, Input } from "../../styles";

export const ProfileForm = styled.div`
    display: flex;
    flex-direction: column;
    align: center;
	  width: 355px;
    align-items: center;
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
  font-size: 14px;
  text-transform: uppercase;
  margin: 0;
  padding: 0 5px;
  width: fit-content;
  height: 25px;
`;

export const InputStyle = styled.div`
  display: flex;
  align-items: flex-end;
`
export const InputStyled = styled(Input)`
  width: auto;
`
export const InputRegular = styled(Input)`
    width: 245px;
`