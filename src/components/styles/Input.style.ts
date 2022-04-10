import styled from "styled-components";
import { Field } from "formik";

export const Input = styled(Field)`
  border: 1px solid ${({ theme }) => theme.colors.body || "#FFFFFF"};
  border-style: none none solid none;
  background: none;
  outline: none;
  font-size: 14px;
  width: 235px;
  height: 30px;
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.body || "#FFFFFF"};

  &::placeholder {
    color: ${({ theme }) => theme.colors.body || "#FFFFFF"};
    text-align: right;
  }
  & > img {
    padding-right: 10px;
  }
`;

export const InputAtCard = styled(Input)`
border-color: ${({ theme }) => theme.colors.text || "#174C6F"};
color: ${({ theme }) => theme.colors.text || "#174C6F"};
&::placeholder {
  color: ${({ theme }) => theme.colors.text || "#174C6F"};
};
width: 265px;
`;