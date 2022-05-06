import React from "react";
import { useTranslation } from "react-i18next";

import { AllTeamProjectTeamForm, Navbar } from "components";

export const AllTeamProjectsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar namePage={t("navbar.teamproject")} />
      <AllTeamProjectTeamForm />
    </>
  );
};
