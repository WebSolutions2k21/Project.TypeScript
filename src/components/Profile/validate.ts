import * as Yup from "yup";
import { t } from "i18next"; 

 export const ProfileSchema = () => Yup.object().shape({
   firstname: Yup.string()
     .min(2, t`registration.validation.firstName`),
   lastname: Yup.string()
     .min(2, t`registration.validation.lastName`),
 });