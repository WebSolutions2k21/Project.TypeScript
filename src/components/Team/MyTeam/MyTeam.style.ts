import styled from "styled-components";
import { StyledInlineErrorMessage, Button } from "styles";

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

export const TeamName = styled.div`
  display: grid;
  grid-template-columns: 185px 55px 55px 50px;
  justify-self: stretch;
  border: 1px solid ${({ theme }) => theme.colors.body || "#FFFFFF"};
  border-style: none none solid none;
  color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  margin: auto;
`;

export const Name = styled.div`
  display: inline-block;
  align-self: end;
`;

export const StyledInlineErrorMessageForm = styled(StyledInlineErrorMessage)`
  margin: 10px auto 5px 70px;
`;

export const ButtonForm = styled(Button)`
  margin: 40px;
`;

export const ButtonTable = styled(Button)`
  height: 30px;
  width: 50px;
  font-size: 14px;
  margin: 10px 0px 5px 0px;
`;

export const ButtonInModal = styled(Button)`
  height: 30px;
  width: 100px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
`;
