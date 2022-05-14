import React from "react";
import { Profile } from "components";
import { Navbar } from "components";
import { useTranslation } from "react-i18next";

export const MentorProfilePage = () => {
  const { t } = useTranslation();
  return (
    <>
        <Navbar />
        <Profile/>
        </>
);
};
