import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledInlineErrorMessage, Label, Foot } from "styles";

export const LoginForm = styled.div`
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

export const Footer = styled(Foot)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 300px;
  margin-top: 20px;
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
