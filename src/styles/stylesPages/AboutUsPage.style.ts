import styled from "styled-components";
import { Link } from "react-router-dom";
import { Foot } from "styles/Foot.style";

export const AboutUsPageContainer: any = styled.div`
  position: relative;
  top: -33px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  background-color: transparent;
  z-index: -1;

  @media (min-width: 700px) {
    position: static;
    max-width: 1600px;
    margin: auto;
  }
`;
export const DescriptionContainer: any = styled.div`
  max-width: 340px;
`;

export const Header: any = styled.h1`
  margin: 20px 25px;
  color: ${({ theme }) => theme.colors.text || "#174C6F"};
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  text-align: justify;
  letter-spacing: 2px;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
`;
export const WhiteCard: any = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px;
  max-width: 322px;
  min-height: 120px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
export const ProfilDescContainer: any = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 13px 15px 10px;
`;
export const ProfilDesc: any = styled.h2`
  color: ${({ theme }) => theme.colors.text || "#174C6F"};
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
`;
export const ProfilDescText: any = styled.p`
  margin: 0 15px 15px;
  color: ${({ theme }) => theme.colors.text || "#174C6F"};
  font-size: 13.5px;
  line-height: 21px;
  text-align: justify;
  font-weight: 400;
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
  margin: -20px auto 20px;
  max-width: 340px;
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
