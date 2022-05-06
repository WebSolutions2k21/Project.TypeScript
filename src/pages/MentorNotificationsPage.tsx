import React from "react";
import { useTranslation } from "react-i18next";

import { Navbar } from "components";

export const MentorNotificationsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar namePage={t("navbar.notifications")} />
      <h1>MentorNotificationsPage</h1>;
    </>
  );
};
