import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "components/Navbar/Navbar";

export const UserProfilePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar namePage={t("navbar.profile")} />
      <h1>UserProfilePage</h1>
    </>
  );
};
