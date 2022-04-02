import styled from "styled-components";

export const Label = styled.label`
  align-self: flex-start;
  position: relative;
  margin-bottom: -15px;
  color: #174C6F;

  & > img {
    padding-right: 10px;
  }
`;

export const Int = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const IntAll = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Btn = styled.div`
  & > button {
    background-color: #D9248F;
    color: #FFFFFF;
    border: 2px solid #D9248F;
    border-radius: 5px;
    height: 40px;
    width: 200px;
    font-size: 20px;
  }
`;
