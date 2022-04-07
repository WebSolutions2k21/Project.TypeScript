import styled from "styled-components";

export const StyledInlineErrorMessage = styled.div`
  color:${({ theme }) => theme.colors.warning || "#FF0000"} ;
  align-self: flex-start;
  margin: 10px auto 5px 70px;
  font-size: 14px;
`;
