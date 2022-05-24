import styled from "styled-components";
import { Label, Foot, Button, Input, CloseButton } from "../../styles";
import { StyledSelect } from "styles";

export const ProfileForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
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
  margin: 20px auto 10px 57px;
`;

export const Footer = styled(Foot)`
  margin-top: 20px;
`;

export const EditButton = styled(Button)`
  margin-top: 20px;
`;

export const InputStyledElement = styled(Input)`
  color: black;
  &::placeholder {
    text-align: left;
    color: #e1e1e1;
    border: 1px solid #e1e1e1;
  }
`;
export const InputStyled = styled(Input)`
  &::placeholder {
    text-align: left;
  }
`;
export const ButtonInPassModal = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  max-width: 100px;
`;
export const StyledDiv = styled.div`
  min-height: 130px;
`;
export const StyleFromModalTeam = styled(StyledSelect)`
  .Select__placeholder {
    color: "#e1e1e1";
  }
`;
export const ClosedButton = styled(CloseButton)`
  height: 12px;
  width: 12px;
  margin-left: 10px;
`;
export const LabelLang = styled(Label)`
  background: #fff;
  border-radius: 12px;
  padding: 3px 15px;
`;
export const StyledLi = styled.li`
  margin-bottom: 10px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  transition: all 150ms;
`;
