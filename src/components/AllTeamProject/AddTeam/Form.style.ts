import styled from "styled-components";
import { StyledInlineErrorMessage } from "styles";

export const AddNewTeamForm = styled.div`
  display: flex;
  flex-direction: column;
  align: center;
  width: 355px;
  align-items: center;
  margin-top: 10vh;
`;
export const ErrorMsg = styled(StyledInlineErrorMessage)`
  margin: 10px auto 5px 70px;
`;