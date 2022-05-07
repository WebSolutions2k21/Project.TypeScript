import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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
  OpenLinksButton,
  NavbarLinkExtended,
  ButtonChangeLang,
  ButtonChangeLangDivWrapper,
  ButtonNav,
} from "styles/Navbar.style";
import { Navlink, Navline, UserAvatar } from "styles/Icon.style";
import { isMentorLogged, isUserLogged, logout } from "services/auth.service";

const lngs = {
  en: { nativeName: "English" },
  pl: { nativeName: "Polish" },
};
interface NPage {
  namePage?: string;
}

export const Navbar = ({ namePage }: NPage) => {
  const { t, i18n } = useTranslation();
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [isAuth, setIsAuth] = useState(isUserLogged());
  const [isAuthMentor, setIsAuthMentor] = useState(isMentorLogged());

  const handleCloseNavMenu = () => {
    setExtendNavbar(false);
  };
  const handleToggle = () => {
    setExtendNavbar(!extendNavbar);
  };

  const logoutHandler = () => {
    logout();
    setIsAuth(false);
    setIsAuthMentor(false);
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar} isAuth={isAuth}>
      <NavbarInnerContainer>
        <LeftContainer>{namePage}</LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to={paths.contact}>{t("navbar.contact")}</NavbarLink>
            <NavbarLink to={paths.aboutUs}>{t("navbar.aboutus")}</NavbarLink>
            {!isAuth && <NavbarLink to={paths.login}>{t("navbar.login")}</NavbarLink>}
            {!isAuth && <NavbarLink to={paths.signUp}>{t("navbar.signin")}</NavbarLink>}
            <NavbarLink to={paths.home}>{t("navbar.home")}</NavbarLink>
            {isAuth && !isAuthMentor && (
              <NavbarLink onClick={handleCloseNavMenu} to={paths.myProfile}>
                {t("navbar.myprofile")}
              </NavbarLink>
            )}
            {isAuth && isAuthMentor && (
              <NavbarLink onClick={handleCloseNavMenu} to={paths.mentorProfile}>
                {t("navbar.myprofile")}
              </NavbarLink>
            )}
            {isAuth && (
              <NavbarLink onClick={handleCloseNavMenu} to={paths.myOpinions}>
                {t("navbar.myopinions")}
              </NavbarLink>
            )}
            {isAuth && (
              <NavbarLink onClick={handleCloseNavMenu} to={paths.myNotifications}>
                {t("navbar.notifications")}
              </NavbarLink>
            )}
            {isAuthMentor && (
              <NavbarLink onClick={handleCloseNavMenu} to={paths.mentorNotification}>
                {t("navbar.notifications")}
              </NavbarLink>
            )}
            {isAuth && !isAuthMentor && (
              <NavbarLink onClick={logoutHandler} to={paths.home}>
                {t("navbar.logout")}
              </NavbarLink>
            )}
            {isAuth && isAuthMentor && (
              <NavbarLink onClick={logoutHandler} to={paths.home}>
                {t("navbar.logout")}
              </NavbarLink>
            )}
            <OpenLinksButton>
              {!isAuth && (
                <Hamburger toggled={extendNavbar} toggle={setExtendNavbar} label="Show menu" color="#3C789E" />
              )}
              {isAuth && !isAuthMentor && (
                <ButtonNav onClick={handleToggle}>
                  <UserAvatar />
                </ButtonNav>
              )}
              {isAuthMentor && (
                <ButtonNav onClick={handleToggle}>
                  <UserAvatar />
                </ButtonNav>
              )}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && !isAuth && !isAuthMentor && (
        <NavbarExtendedContainer extendNavbar={extendNavbar} isAuth={isAuth}>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.contact}>
            <Navlink />
            {t("navbar.contact")}
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.aboutUs}>
            <Navlink />
            {t("navbar.aboutus")}
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.login}>
            <Navlink />
            {t("navbar.login")}
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.signUp}>
            <Navlink />
            {t("navbar.signin")}
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.home}>
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
      {extendNavbar && isAuth && !isAuthMentor && (
        <NavbarExtendedContainer extendNavbar={extendNavbar} isAuth={isAuth}>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.myProfile}>
            <Navlink />
            {t("navbar.myprofile")}
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.myProjects}>
            <Navlink />
            {t("navbar.myproject")}
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.myOpinions}>
            <Navlink />
            {t("navbar.myopinions")}
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.mentorNotification}>
            <Navlink />
            {t("navbar.notifications")}
          </NavbarLinkExtended>
          <Navline />
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.contact}>
            <Navlink />
            {t("navbar.contact")}
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.aboutUs}>
            <Navlink />
            {t("navbar.aboutus")}
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => {
              logoutHandler();
              handleCloseNavMenu();
            }}
            to={paths.home}
          >
            <Navlink />
            {t("navbar.logout")}
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
      {extendNavbar && isAuth && isAuthMentor && (
        <NavbarExtendedContainer extendNavbar={extendNavbar} isAuth={isAuth}>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.mentorProfile}>
            <Navlink />
            {t("navbar.myprofile")}
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.myProjects}>
            <Navlink />
            {t("navbar.myproject")}
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.myOpinions}>
            <Navlink />
            {t("navbar.myopinions")}
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.myNotifications}>
            <Navlink />
            {t("navbar.notifications")}
          </NavbarLinkExtended>
          <Navline />
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.contact}>
            <Navlink />
            {t("navbar.contact")}
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.aboutUs}>
            <Navlink />
            {t("navbar.aboutus")}
          </NavbarLinkExtended>
          <NavbarLinkExtended
            onClick={() => {
              logoutHandler();
              handleCloseNavMenu();
            }}
            to={paths.home}
          >
            <Navlink />
            {t("navbar.logout")}
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
