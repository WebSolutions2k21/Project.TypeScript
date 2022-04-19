import React from "react";
import { Routes, Route } from "react-router-dom";

// import axios from 'axios';

// import { RegistrationForm } from "./components/Registration";
// import Footer from "components/Footer";
import {
  AboutUsPage,
  AddNewProjectPage,
  AddNewTeamProjectPage,
  AllTeamProjectsPage,
  ContactPage,
  HomePage,
  LoginPage,
  MentorNotificationsPage,
  MentorProfilePage,
  NotFoundPage,
  OpinionsPage,
  SendNewPasswordPage,
  SetNewPasswordPage,
  SignUpPage,
  UserNotificationsPage,
  UserProfilePage,
  UserProjectPage,
  EmailVerification,
} from "./pages";
import { paths } from "./config/paths";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "components/styles/Global";

// import { ThemeProvider } from "styled-components";
// import Footer from "components/Footer";
// import { RegistrationForm, Login } from "components";
// import {GlobalStyles, theme} from "components/styles/Global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.aboutUs} element={<AboutUsPage />} />
        <Route path={paths.addProject} element={<AddNewProjectPage />} />
        <Route path={paths.addTeamProject} element={<AddNewTeamProjectPage />} />
        <Route path={paths.teamProjects} element={<AllTeamProjectsPage />} />
        <Route path={paths.contact} element={<ContactPage />} />
        <Route path={paths.login} element={<LoginPage />} />
        <Route path={paths.mentorNotification} element={<MentorNotificationsPage />} />
        <Route path={paths.mentorProfile} element={<MentorProfilePage />} />
        <Route path={paths.mentorProfile} element={<NotFoundPage />} />
        <Route path={paths.myOpinions} element={<OpinionsPage />} />
        <Route path={paths.sendNewPassword} element={<SendNewPasswordPage />} />
        <Route path={paths.setPassword} element={<SetNewPasswordPage />} />
        <Route path={paths.signUp} element={<SignUpPage />} />
        <Route path={paths.myNotifications} element={<UserNotificationsPage />} />
        <Route path={paths.myProfile} element={<UserProfilePage />} />
        <Route path={paths.myProjects} element={<UserProjectPage />} />
        <Route path={paths.emailVerification} element={<EmailVerification />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
    /* // <div>
    //   hello!
    //   <RegistrationForm />
    //   <Footer />
    // </div>
    // <ThemeProvider theme={theme}>
    //   <GlobalStyles />
    //   <Login />

    //   <p>Registration</p>

    //   <RegistrationForm />
    //   <Footer />
    // </ThemeProvider> */
  );
}

export default App;
