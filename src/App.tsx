import React from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "styles/Global";

import {
  AboutUsPage,
  AddNewProjectPage,
  AddNewTeamProjectPage,
  AllTeamProjectsPage,
  ContactPage,
  EmailVerificationPage,
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
} from "pages";
import { paths } from "config/paths";
import { PrivateRoute } from "config/PrivateRoute";
import { PublicRoute } from "config/PublicRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route
          path={paths.home}
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route path={paths.aboutUs} element={<AboutUsPage />} />
        <Route path={paths.addProject} element={<AddNewProjectPage />} />
        <Route path={paths.addTeamProject} element={<AddNewTeamProjectPage />} />
        <Route path={paths.teamProjects} element={<AllTeamProjectsPage />} />
        <Route path={paths.contact} element={<ContactPage />} />
        <Route path={paths.login} element={<LoginPage />} />
        <Route path={paths.mentorNotification} element={<MentorNotificationsPage />} />
        <Route path={paths.mentorProfile} element={<MentorProfilePage />} />
        <Route path={paths.myOpinions} element={<OpinionsPage />} />
        <Route path={paths.sendNewPassword} element={<SendNewPasswordPage />} />
        <Route path={paths.setPassword} element={<SetNewPasswordPage />} />
        <Route path={paths.signUp} element={<SignUpPage />} />
        <Route path={paths.myNotifications} element={<UserNotificationsPage />} />
        <Route path={paths.myProfile} element={<UserProfilePage />} />
        <Route
          path={paths.myProjects}
          element={
            <PrivateRoute>
              <UserProjectPage />
            </PrivateRoute>
          }
        />
        <Route path={paths.emailVerification} element={<EmailVerificationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
