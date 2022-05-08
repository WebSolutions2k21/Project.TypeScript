import { AddNewTeam, Navbar } from "components";
import { t } from "i18next";
import React from "react";

export const AddTeamPage = () => {
  return (
    <>
      <Navbar namePage={t("navbar.addteam")} />
      <AddNewTeam />
    </>
  );
};
