import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Spin as Hamburger } from "hamburger-react";

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
} from "../styles/Navbar.style";
import LogoImg from "../../assets/BrainCodeLogo.png";
import { Navlink } from "components/styles/Icon.style";

const lngs = {
  en: { nativeName: "English" },
  pl: { nativeName: "Polish" },
};

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
            <NavbarLink to="/contact">{t("navbar.contact")}</NavbarLink>
            <NavbarLink to="/aboutUs">{t("navbar.aboutus")}</NavbarLink>
            <NavbarLink to="/login">{t("navbar.login")}</NavbarLink>
            <NavbarLink to="/signin">{t("navbar.signin")}</NavbarLink>
            <NavbarLink to="/">{t("navbar.home")}</NavbarLink>
            <OpenLinksButton>
              <Hamburger toggled={extendNavbar} toggle={setExtendNavbar} color="#3C789E" />
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/contact">
            <Navlink />
            {t("navbar.contact")}
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/aboutUs">
            <Navlink />
            {t("navbar.aboutus")}
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/login">
            <Navlink />
            {t("navbar.login")}
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/signin">
            <Navlink />
            {t("navbar.signin")}
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/">
            <Navlink />
            {t("navbar.home")}
          </NavbarLinkExtended>

          <div style={{ position: "absolute", bottom: "0px", right: "5px" }}>
            {Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                style={{
                  color: "#174C6F",
                  textTransform: "uppercase",
                  backgroundColor: "transparent",
                  border: "none",
                  padding: "10px",
                  fontFamily: "'Maven Pro', sans-serif",
                  fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
                }}
                type="submit"
                onClick={() => {
                  i18n.changeLanguage(lng);
                }}
              >
                {lng}
              </button>
            ))}
          </div>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}
export default Navbar;
