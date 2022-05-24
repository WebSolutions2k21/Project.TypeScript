import React from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "styles/Global";

import {
  AboutUsPage,
  AddNewProjectPage,
  AddNewTeamProjectPage,
  AddTeamPage,
  AllTeamProjectsPage,
  ContactPage,
  EmailVerificationPage,
  HomePage,
  LoginPage,
  MentorNotificationsPage,
  MentorProfilePage,
  MyTeamPage,
  NotFoundPage,
  OpinionsPage,
  AddNewOpinionPage,
  SendNewPasswordPage,
  SetNewPasswordPage,
  SignUpPage,
  UserNotificationsPage,
  UserProfilePage,
  UserProjectPage,
  ChangeOldPassword,
  MyTeamProjectsPage,
} from "pages";
import { paths } from "config/paths";

import PrivateRoute from "config/PrivateRoute";
import PublicRoute from "config/PublicRoute";

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
        <Route path={paths.contact} element={<ContactPage />} />

        <Route
          path={paths.emailVerification}
          element={
            <PublicRoute>
              <EmailVerificationPage />
            </PublicRoute>
          }
        />
        <Route
          path={paths.login}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={paths.signUp}
          element={
            <PublicRoute>
              <SignUpPage />{" "}
            </PublicRoute>
          }
        />
        <Route
          path={paths.sendNewPassword}
          element={
            <PublicRoute>
              <SendNewPasswordPage />
            </PublicRoute>
          }
        />

        <Route
          path={paths.setPassword}
          element={
            <PrivateRoute>
              <SetNewPasswordPage />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.changePassword}
          element={
            <PrivateRoute>
              <ChangeOldPassword />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.myProfile}
          element={
            <PrivateRoute>
              <UserProfilePage />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.mentorProfile}
          element={
            <PrivateRoute>
              <MentorProfilePage />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.myProjects}
          element={
            <PrivateRoute>
              <UserProjectPage />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.addProject}
          element={
            <PrivateRoute>
              <AddNewProjectPage />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.teamProjects}
          element={
            <PrivateRoute>
              <AllTeamProjectsPage />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.addTeamProject}
          element={
            <PrivateRoute>
              <AddNewTeamProjectPage />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.addOpinion}
          element={
            <PrivateRoute>
              <AddNewOpinionPage />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.myOpinions}
          element={
            <PrivateRoute>
              <OpinionsPage />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.myNotifications}
          element={
            <PrivateRoute>
              <UserNotificationsPage />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.mentorNotification}
          element={
            <PrivateRoute>
              <MentorNotificationsPage />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.addTeam}
          element={
            <PrivateRoute>
              <AddTeamPage />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.myTeam}
          element={
            <PrivateRoute>
              <MyTeamPage />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.myTeamProjects}
          element={
            <PrivateRoute>
              <MyTeamProjectsPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
