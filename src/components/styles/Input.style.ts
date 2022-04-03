import styled from "styled-components";
import { Field } from "formik";

export const Input = styled(Field)`
  margin: 5px auto;
  border-style: none none solid none;
  outline: none;
  padding: 10px;
  font-size: 14px;
  width: 95%;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px, rgb(227, 230, 232) 0px 0px 0px 3px;
    outline: none;
  }
`;
