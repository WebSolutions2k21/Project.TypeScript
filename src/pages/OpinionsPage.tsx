import { Opinions } from "components/Opinions";
import React from "react";
import { useTranslation } from "react-i18next";
import { Navbar } from "components";

export const OpinionsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar namePage={t("navbar.opinions")} />
      < Opinions />
    </>
  );
};
