import * as Yup from "yup";
import { t } from "i18next";

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

export const validation = () => Yup.object().shape({
  password: Yup.string()
    .matches(lowercaseRegex, t`registration.validation.passwordLow`)
    .matches(uppercaseRegex, t`registration.validation.passwordUpp`)
    .matches(numericRegex, t`registration.validation.passwordNum`)
    .min(8, t`registration.validation.passwordMin`)
    .required(t`registration.validation.passwordReq`),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password')], t`registration.validation.confirmPassword`)
    .required(t`registration.validation.passwordReq`),
});
