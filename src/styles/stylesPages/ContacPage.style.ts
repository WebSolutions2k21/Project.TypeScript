import styled from "styled-components";
import { Link } from "react-router-dom";
import { Foot } from "styles/Foot.style";

export const ContactPageContainer: any = styled.div`
  width: 100vw;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    max-width: 1600px;
    margin: auto;
  }
`;
