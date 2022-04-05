import styled from "styled-components";

export const Button = styled.button`
  margin: 40px;
  background-color: #d9248f;
  border: 2px solid #d9248f;
  border-radius: 5px;
  height: 40px;
  width: 200px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  color: ${({ color }) => color || "#FFFFFF"};
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;
