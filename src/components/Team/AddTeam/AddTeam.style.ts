import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledInlineErrorMessage, Label, Button, StyledSelect, CloseButton } from "styles";

export const TeamForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  align-items: center;
  margin: auto;
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
`;

export const LabelStyle = styled(Label)`
  margin: 10px auto 5px 70px;
`;

export const ButtonForm = styled(Button)`
  margin: 40px;
`;

export const FooterWrapperLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 150px;
`;
export const FooterWrapperRight = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 150px;
`;
export const LinkFooter: any = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.colors.body || "#fff"};
  line-height: 36px;
  text-decoration: none;
`;

export const ButtonInModal = styled(Button)`
  height: 30px;
  width: 100px;
  margin: 10px auto;
  display: flex;
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

export const ClosedButton = styled(CloseButton)`
  height: 12px;
  width: 12px;
  margin-left: 10px;
`;
export const LabelLang = styled(Label)`
  background: ${({ theme }) => theme.colors.body || "#FFFFFF"};
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

export const StyleFromModal = styled(StyledSelect)`
  .Select__control {
    color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
  }

  .Select__placeholder {
    color: ${({ theme }) => theme.colors.text || "#174C6F"};
  }
`;
