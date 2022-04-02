import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 15px 0 20px;
  & > input {
    border: 3px red;
    border-style: none none solid none;
    outline: none;
    padding: 12px 3px 5px 15px;
    font-size: 14px;
    width: 300px
  }

& ::placeholder {
  text-align:right;
  }
`;