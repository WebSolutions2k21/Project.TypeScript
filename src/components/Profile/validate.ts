import * as Yup from "yup";
import { t } from "i18next"; 

//  const lowercaseRegex = /(?=.*[a-z])/;
//  const uppercaseRegex = /(?=.*[A-Z])/;
//  const numericRegex = /(?=.*[0-9])/;

 export const ProfileSchema = () => Yup.object().shape({
   firstname: Yup.string()
     .min(2, t`registration.validation.firstName`),
   lastname: Yup.string()
     .min(2, t`registration.validation.lastName`),
  //   newPassword: Yup.string()
  //    .matches(lowercaseRegex, t`registration.validation.passwordLow`)
  //    .matches(uppercaseRegex, t`registration.validation.passwordUpp`)
  //    .matches(numericRegex, t`registration.validation.passwordNum`)
  //    .min(8, t`registration.validation.passwordMin`)
  //    .required(t`registration.validation.passwordReq`),
  //  confirmNewPassword: Yup.string()
  //    .oneOf([Yup.ref("newPassword")], t`registration.validation.confirmPassword`)
  //    .required(t`registration.validation.passwordReq`),
 });