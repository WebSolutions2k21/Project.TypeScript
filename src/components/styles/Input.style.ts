import styled from "styled-components";
import { Field } from "formik";

export const Input = styled(Field)`
  border: 1px solid #ffffff;
  border-style: none none solid none;
  background: none;
  outline: none;
  font-size: 14px;
  width: 235px;
  height: 30px;
  padding: 10px 0;
  color: #ffffff;

  &::placeholder {
    color: #ffffff;
    text-align: right;
  }
`;
