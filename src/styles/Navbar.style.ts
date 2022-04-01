import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer: any = styled.nav`
  width: 100%;
  height: ${(props: { extendNavbar: boolean }) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s linear;

  @media (min-width: 700px) {
    height: 80px;
    background-color: transparent;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  flex: 30%;
  justify-content: flex-start;
  margin-left: 10px;
`;
export const RightContainer = styled.div`
  display: flex;
  flex: 70%;
  justify-content: flex-end;
  padding-right: 30px;
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
`;

export const NavbarLink = styled.div`
  position: relative;
  color: #3c789e;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin-left: 15px;
  line-height: 80px;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    bottom: 22px;
    left: -100px;
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
export const NavbarLinkExtended = styled.div`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin-left: 15px;
  line-height: 80px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  line-height: 80px;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
