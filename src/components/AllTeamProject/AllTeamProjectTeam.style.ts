import styled from "styled-components";
import { Button } from "styles";

export const View = styled.div`
  margin: 20px 15px;
  width: 325px;
`;

export const TeamForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: inline-block;
  float: right;
  margin: -15px 0;
`;

export const Name = styled.div`
  display: inline-block;
`;

export const ButtonModal = styled(Button)`
  height: 30px;
  width: 100px;
  margin: 0 280px 0 0;
`;
