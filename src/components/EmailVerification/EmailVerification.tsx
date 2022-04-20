import Navbar from "components/Navbar/Navbar";
import { paths } from "config/paths";
import { t } from "i18next";
import React from "react";

import { Button, IconStudent, LogoPage } from "styles";
import { EmailVerificationForm } from "./EmailVerification.style";

export const EmailVerification = () => {
  const handleClick = () => {
    window.location.href = paths.login;
  };

  return (
    <>
      <Navbar />
      <EmailVerificationForm>
        <LogoPage />
        <div>Welcome to Our Team !</div>
        <IconStudent />
        <div>Your email has been successfully verified</div>
        <div>Now You can Log In!</div>

        <Button type="submit" onClick={handleClick}>{t`button.login`}</Button>
      </EmailVerificationForm>
    </>
  );
};
