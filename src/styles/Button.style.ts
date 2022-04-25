import styled from "styled-components";

export const Button = styled.button`
  
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  height: 40px;
  width: 200px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;
