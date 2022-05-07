import React from "react";
import { useTranslation } from "react-i18next";

import { Navbar } from "components";

export const UserNotificationsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar namePage={t("navbar.notifications")} />
      <h1>UserNotificationsPage</h1>
    </>
  );
};
