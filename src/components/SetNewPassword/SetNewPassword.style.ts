import styled from "styled-components";
import { Button, Foot } from "styles";

export const Title = styled.div`
  color: #174c6f;
  font-size: 20px;
  padding-bottom: 35px;
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
