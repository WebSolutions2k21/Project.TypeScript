import * as Yup from "yup";
import { t } from "i18next";

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

export const validation = () =>
  Yup.object().shape({
    oldPassword: Yup.string()
      .matches(lowercaseRegex, t`registration.validation.passwordLow`)
      .matches(uppercaseRegex, t`registration.validation.passwordUpp`)
      .matches(numericRegex, t`registration.validation.passwordNum`)
      .min(8, t`registration.validation.passwordMin`)
      .required(t`registration.validation.passwordReq`),
    newPassword: Yup.string()
      .matches(lowercaseRegex, t`registration.validation.passwordLow`)
      .matches(uppercaseRegex, t`registration.validation.passwordUpp`)
      .matches(numericRegex, t`registration.validation.passwordNum`)
      .min(8, t`registration.validation.passwordMin`)
      .required(t`registration.validation.passwordReq`),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], t`registration.validation.confirmPassword`)
      .required(t`registration.validation.passwordReq`),
  });
