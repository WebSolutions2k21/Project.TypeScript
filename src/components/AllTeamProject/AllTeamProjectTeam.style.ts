import styled from "styled-components";
import { Button } from "styles";

export const View = styled.div`
  margin: 20px 15px;

  vertical-align: text-bottom;
`;

export const TeamForm = styled.div`
  display: flex;
  flex-direction: column;
  align: center;
  width: 375px;
  align-items: center;
  display: inline-block;
`;

export const TeamName = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.body || "#FFFFFF"};
  border-style: none none solid none;
  color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ModalButton = styled.div`
  height: 30px;
  width: 100px;

  vertical-align: top;
  display: inline-block;
  float: right;
`;

export const Name = styled.div`
  vertical-align: top;
  display: inline-block;
  padding-bottom: 15px;
`;
export const ButtonModal = styled(Button)`
height: 30px;
width: 100px;
margin: 0 140px 0 0;
`;
