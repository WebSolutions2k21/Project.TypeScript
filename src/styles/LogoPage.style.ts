import styled from "styled-components";
import logo from "assets/BrainCodeLogo.png";

export const LogoPage = styled.img.attrs({
  src: `${logo}`,
})`
  margin: 30px 0 20px 0;
  width: 245px;
`;

export const LogoPageSmall = styled.img.attrs({
  src: `${logo}`,
})`
  margin: 20px 160px 5px 0;
  width: 120px;
`;
