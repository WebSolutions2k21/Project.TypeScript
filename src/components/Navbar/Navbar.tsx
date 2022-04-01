import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../../styles/Navbar.style";
import LogoImg from "../../assets/Logo.svg";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink>{t("navbar.home")}</NavbarLink>
            <NavbarLink>{t("navbar.contact")}</NavbarLink>
            <NavbarLink>{t("navbar.aboutus")}</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended>Home</NavbarLinkExtended>
          <NavbarLinkExtended>Contact</NavbarLinkExtended>
          <NavbarLinkExtended>About Us</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}
export default Navbar;
