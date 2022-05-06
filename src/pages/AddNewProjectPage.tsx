import React from "react";
import { useTranslation } from "react-i18next";
import { AddNewProject } from "components";
import Navbar from "components/Navbar/Navbar";

export const AddNewProjectPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar namePage={t("navbar.addproject")} />
      <AddNewProject />
    </>
  );
};
