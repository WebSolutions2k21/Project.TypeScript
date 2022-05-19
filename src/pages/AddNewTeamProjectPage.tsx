import React from "react";
import { useTranslation } from "react-i18next";

import { Navbar, AddNewTeamProject } from "components";

export const AddNewTeamProjectPage = () => {
    const { t } = useTranslation();
    return (
      <>
        <Navbar namePage={t("navbar.teamproject")} />
        <AddNewTeamProject />
      </>
    );
};