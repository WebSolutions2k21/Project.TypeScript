import Navbar from "components/Navbar/Navbar";
import { paths } from "config/paths";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Button, IconStudent, LogoPage } from "styles";
import { EmailVerificationForm, WhiteText } from "./EmailVerification.style";

export const EmailVerification = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(paths.login);
  };

  return (
    <>
      <Navbar />
      <EmailVerificationForm>
        <LogoPage />
        <WhiteText>{t`emailVerification.welcome`}</WhiteText>
        <IconStudent />
        <div>{t`emailVerification.verified`}</div>
        <div>{t`emailVerification.canLog`}</div>

        <Button type="submit" onClick={handleClick}>
          {t`emailVerification.login`}
        </Button>
      </EmailVerificationForm>
    </>
  );
};
