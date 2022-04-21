import styled from "styled-components";
import { Link } from "react-router-dom";
import { Foot } from "styles/Foot.style";

export const HomePageContainer: any = styled.div`
  width: 100vw;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    max-width: 1600px;
  }
`;

export const Header: any = styled.h1`
  margin: 22px;
  color: ${({ theme }) => theme.colors.text || "#174C6F"};
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
`;

export const LinkButton: any = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.body || "#fff"};
  line-height: 36px;
  text-decoration: none;
`;
export const PictureWrapper: any = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
`;
export const Footer = styled(Foot)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;
export const FooterWrapperLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 150px;
`;
export const FooterWrapperRight = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 150px;
`;
export const LinkFooter: any = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.colors.body || "#fff"};
  line-height: 36px;
  text-decoration: none;
`;
