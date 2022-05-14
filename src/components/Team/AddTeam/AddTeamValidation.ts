import * as Yup from "yup";
import { t } from "i18next"; 

 export const AddNewTeamValidationSchema = () => Yup.object().shape({
    teamName: Yup.string()
      .min(3, t`team.teamName.validation.min`)
      .max(50, t`team.teamName.validation.max`)
      .required(t`team.teamName.validation.requied`),
    description: Yup.string()
    .min(0)
    .max(1500, t`team.teamName.validation.max`),
 });
