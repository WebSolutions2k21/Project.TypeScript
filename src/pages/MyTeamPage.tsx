import { MyTeam, Navbar } from "components";
import { t } from "i18next";
import React from "react";

export const MyTeamPage = () => {
  return (
    <>
     <Navbar namePage={t("navbar.myteam")} />
      <MyTeam />
    </>
  );
};
