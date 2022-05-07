import React from "react";
import { useTranslation } from "react-i18next";
import { Navbar } from "components";

export const MentorProfilePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar namePage={t("navbar.mentorprofile")} />
      <h1>MentorProfilePage</h1>
    </>
  );
};
