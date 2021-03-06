import styled from "styled-components";
import { Button } from "styles";

export const View = styled.div`
  width: 325px;
`;

export const TeamForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align: center;
  width: 375px;
  align-items: center;
  gap: 10px;
`;

export const TeamName = styled.div`
  display: grid;
  grid-template-columns: 275px 50px;
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

export const ButtonInModal = styled(Button)`
  height: 30px;
  width: 100px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
`;
export const ButtonForm = styled(Button)`
  margin-top: 30px;
  margin-bottom: 20px;
`;
