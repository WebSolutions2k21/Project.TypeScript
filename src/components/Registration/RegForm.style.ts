import styled from "styled-components";

export const RegForm = styled.div`
    display: flex;
    flex-direction: column;
    align: center;
	width: 355px;
    align-items: center;
`;

export const ErrorMsg = styled.div`
  color:${({ theme }) => theme.colors.warning || "#FF0000"} ;
  align-self: flex-start;
  font-size: 12px;
`;

export const View = styled.div`
position: relative;

& > img {
  position: absolute;
  top: 25%;
  right: 3%;
  cursor: pointer;
  }
`;