import * as Yup from "yup";
import { t } from "i18next"; 

 const lowercaseRegex = /(?=.*[a-z])/;
 const uppercaseRegex = /(?=.*[A-Z])/;
 const numericRegex = /(?=.*[0-9])/;

 export const ProfileSchema = () => Yup.object().shape({
   username: Yup.string()
     .min(2, t`registration.validation.userName`)
     .required(t`registration.validation.userNameReq`),
   firstname: Yup.string()
     .min(2, t`registration.validation.firstName`),
   lastname: Yup.string()
     .min(2, t`registration.validation.lastName`),
   email: Yup.string()
     .lowercase()
     .min(5, t`registration.validation.email`)
     .email(t`registration.validation.emailIn`)
     .required(t`registration.validation.emailReq`),
   password: Yup.string()
     .matches(lowercaseRegex, t`registration.validation.passwordLow`)
     .matches(uppercaseRegex, t`registration.validation.passwordUpp`)
     .matches(numericRegex, t`registration.validation.passwordNum`)
     .min(8, t`registration.validation.passwordMin`)
     .required(t`registration.validation.passwordReq`),
 });
