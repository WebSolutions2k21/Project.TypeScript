import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cards};
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;