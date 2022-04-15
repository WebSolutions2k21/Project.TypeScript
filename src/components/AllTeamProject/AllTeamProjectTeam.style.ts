import styled from "styled-components";

export const TitlePage = styled.div`
  position: relative;
  margin: 20px 5px;
  & > img {
    position: absolute;
    top: 25%;
    right: -40%;
    cursor: pointer;
  }

  & > h1 {
    position: absolute;
    color: ${({ theme }) => theme.colors.text || "#174C6F"};
    font-size: 20px;
    font-wight: 200;
    line-height: 21px;
    font-style: normal;
    font-weight: 400;
    padding: 10px;
  }
`;


export const View = styled.div`
 
  margin: 120px 5px;
  
  
  }

  & > h1 {
    position: absolute;
    color: ${({ theme }) => theme.colors.text || "#174C6F"};
    font-size: 20px;
    font-wight: 200;
    line-height: 21px;
    font-style: normal;
    font-weight: 400;
    padding: 10px;
  }
`;