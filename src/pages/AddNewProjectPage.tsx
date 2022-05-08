import React from "react";
import { useTranslation } from "react-i18next";

import { Navbar, AddNewProject } from "components";

export const AddNewProjectPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar namePage={t("navbar.addproject")} />
      <AddNewProject />
    </>
  );
};
