import React, { useEffect, useState } from "react";
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
  NavbarLogOutLink,
} from "styles/Navbar.style";
import { Navlink, Navline, UserAvatar } from "styles/Icon.style";
import { isMentorLogged, isUserLogged } from "services/auth.service";
import { useAppDispatch } from "app/hooks";
import { logout, setUser } from "features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "services/authApi";
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
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthMentor, setIsAuthMentor] = useState(false);


  let navigate = useNavigate();
  const dispatch = useDispatch();

  // const [loginUser, { data: loginData, isSuccess: isLoginSuccess, isError: isLoginError, error: loginError }] =
  // useLoginUserMutation();
  
  




  console.log("navbar")
  // const { user: currentUser } = useSelector((state: any) => state.authApi);

 const [loginUser, { data, isLoading, error, isError, isSuccess }] =
    useLoginUserMutation();
  useEffect(() => {


  console.log("Data", data.isMentor);
  if (isError) {
    // toast({
    //   title: (error as any).data.message,
    //   status: "error",
    //   duration: 5000,
    // });
    // if ((error as any).data.message === "User not Verified") {
    //   navigate("/send-verify-mail", {
    //     state: { email },
    //   });
    // }
  }
  if (isSuccess) {
    dispatch(setUser({ token: data.token, id: data.id, isMentor:data.isMentor }));
    // navigate("/");
    console.log("mentor", data.isMentor)
    localStorage.setItem("mentor", data.isMentor);
  }



    // dispath(setUser(user));
    // dispatch(setUser({ token: loginData.token, id: loginData.id, isMentor: loginData.isMentor }));
    // console.log("is Mentor",  loginData.isMentor )
    // if (currentUser) {
    //   dispatch(currentUser)

    //   setIsAuth(!currentUser.isMentor);
    //   setIsAuthMentor(currentUser.isMentor);
    // }
  }, [dispatch]);

  // console.log("currentUser login", user);

  // const mapStateToProps = (state: any) => ({
  //   authToken: state.loginUser && state.loginUser.token,

  // });

  // console.log("map", mapStateToProps);
  const handleCloseNavMenu = () => {
    setExtendNavbar(false);
  };
  const handleToggle = () => {
    setExtendNavbar(!extendNavbar);
  };


  // useEffect(() => {
  //   if (currentUser) {
  //     dispatch(currentUser);

  //     // setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
  //     // setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
  //     // setIsAuth(!currentUser.isMentor);
  //     // setIsAuthMentor(currentUser.isMentor);
  //   }
  // }, [currentUser]);

  const logoutHandler = () => {
    // logout();
    // setIsAuth(false);
    // setIsAuthMentor(false);
    dispatch(logout());
    navigate(paths.login);
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar} isAuth={isAuth}>
      <NavbarInnerContainer>
        <LeftContainer>
          {namePage} aaa
        </LeftContainer>
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
              <NavbarLink onClick={handleCloseNavMenu} to={paths.myProjects}>
                {t("navbar.myproject")}
              </NavbarLink>
            )}
            {isAuthMentor && (
              <NavbarLink onClick={handleCloseNavMenu} to={paths.myTeam}>
                {t("navbar.myteam")}
              </NavbarLink>
            )}

            {isAuth && (
              <NavbarLink onClick={handleCloseNavMenu} to={paths.myOpinions}>
                {t("navbar.myopinions")}
              </NavbarLink>
            )}
            {isAuth && !isAuthMentor && (
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
              <NavbarLogOutLink onClick={logoutHandler} to={paths.home}>
                {t("navbar.logout")}
              </NavbarLogOutLink>
            )}
            {isAuth && isAuthMentor && (
              <NavbarLogOutLink onClick={logoutHandler} to={paths.home}>
                {t("navbar.logout")}
              </NavbarLogOutLink>
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
          <NavbarLinkExtended onClick={handleCloseNavMenu} to={paths.myTeam}>
            <Navlink />
            {t("navbar.myteam")}
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
