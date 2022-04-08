import styled from "styled-components";

export const StyledInlineErrorMessage = styled.div`
  color:${({ theme }) => theme.colors.warning || "#FF0000"} ;
  align-self: flex-start;
  font-size: 14px;
`;

export const StyledInlineErrorMessageReg = styled.div`
  color: #d9248f;
  align-self: flex-start;
  font-size: 12px;
`;
