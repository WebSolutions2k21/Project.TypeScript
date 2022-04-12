import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Spin as Hamburger } from "hamburger-react";
import { paths } from "config/paths";
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
  ButtonChangeLang,
  ButtonChangeLangDivWrapper,
} from "../styles/Navbar.style";
import { Navlink } from "components/styles/Icon.style";

const lngs = {
  en: { nativeName: "English" },
  pl: { nativeName: "Polish" },
};

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to={paths.contact}>{t("navbar.contact")}</NavbarLink>
            <NavbarLink to={paths.aboutUs} onClick={() => setNavText(i18n.t("navbar.aboutus"))}>
              {t("navbar.aboutus")}
            </NavbarLink>
            <NavbarLink to={paths.login} onClick={() => setNavText(i18n.t("navbar.login"))}>
              {t("navbar.login")}
            </NavbarLink>
            <NavbarLink to={paths.signUp}>{t("navbar.signin")}</NavbarLink>
            <NavbarLink to={paths.home}>{t("navbar.home")}</NavbarLink>
            <OpenLinksButton>
              <Hamburger toggled={extendNavbar} toggle={setExtendNavbar} color="#3C789E" />
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to={paths.contact}>
            <Navlink />
            {t("navbar.contact")}
          </NavbarLinkExtended>
          <NavbarLinkExtended to={paths.aboutUs}>
            <Navlink />
            {t("navbar.aboutus")}
          </NavbarLinkExtended>
          <NavbarLinkExtended to={paths.login}>
            <Navlink />
            {t("navbar.login")}
          </NavbarLinkExtended>
          <NavbarLinkExtended to={paths.signUp}>
            <Navlink />
            {t("navbar.signin")}
          </NavbarLinkExtended>
          <NavbarLinkExtended to={paths.home}>
            <Navlink />
            {t("navbar.home")}
          </NavbarLinkExtended>

          <ButtonChangeLangDivWrapper>
            {Object.keys(lngs).map((lng) => (
              <ButtonChangeLang
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
                }}
                type="submit"
                onClick={() => {
                  i18n.changeLanguage(lng);
                }}
              >
                {lng}
              </ButtonChangeLang>
            ))}
          </ButtonChangeLangDivWrapper>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};
export default Navbar;
