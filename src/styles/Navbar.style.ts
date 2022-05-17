import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const NavbarContainer: any = styled.nav`
  width: 100vw;
  height: 80px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s linear;

  @media (min-width: 700px) {
    height: 80px;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex: 35%;
  justify-content: flex-start;
  align-items: center;
  margin-left: 31px;
  font-size: 20px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.text || "#174C6F"};
`;
export const RightContainer = styled.div`
  display: flex;
  flex: 65%;
  justify-content: flex-end;
  padding-right: 10px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  @media (min-width: 700px) {
    max-width: 1600px;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  margin-right: 20px;
`;

export const NavbarLink = styled(NavLink)`
  position: relative;
  color: #3c789e;
  text-decoration: none;
  margin-left: 15px;
  line-height: 80px;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    bottom: 22px;
    left: -130px;
    width: 100%;
    height: 3px;
    background-color: #db2490;
    transition: 0.5s linear;
  }
  &:hover::after {
    left: 0;
  }
  &[class*="active"]::after {
    content: "";
    position: absolute;
    bottom: 22px;
    left: 0px;
    width: 100%;
    height: 3px;
    background-color: #db2490;
  }

  @media (max-width: 700px) {
    display: none;
    color: white;
  }
`;
export const NavbarLogOutLink = styled(Link)`
  position: relative;
  color: #3c789e;
  text-decoration: none;
  margin-left: 15px;
  line-height: 80px;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    bottom: 22px;
    left: -130px;
    width: 100%;
    height: 3px;
    background-color: #db2490;
    transition: 0.5s linear;
  }
  &:hover::after {
    left: 0;
  }

  @media (max-width: 700px) {
    display: none;
    color: white;
  }
`;

export const NavbarLinkExtended = styled(NavLink)`
  display: flex;
  color: ${({ theme }) => theme.colors.text || "#174C6F"};
  text-decoration: none;
  line-height: 50px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.div`
  position: relative;
  top: 12px;
  left: 15px;
  width: 60px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  line-height: 80px;
  z-index: 2000;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  position: absolute;
  top: 15px;
  left: calc(100% - 226px - 20px);
  width: 226px;
  height: ${(props: { extendNavbar: boolean; isAuth: boolean }) =>
    props.extendNavbar && props.isAuth ? "435px" : "322px"};
  padding-bottom: 57px;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  z-index: 1;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const ButtonChangeLangDivWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 5px;
`;

export const ButtonChangeLang = styled.button`
  color: ${({ theme }) => theme.colors.text || "#174C6F"};
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  padding: 10px;
`;
export const ButtonNav = styled.button`
  position: relative;
  top: 5px;
  left: -2px;
  width: 61px;
  height: 53px;
  background-color: transparent;
  border: none;
`;
