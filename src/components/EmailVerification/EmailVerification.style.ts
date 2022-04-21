import styled from "styled-components";

export const EmailVerificationForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const WhiteText = styled.div`
  color: ${({ theme }) => theme.colors.body};
  font-size: 25px;
`;
