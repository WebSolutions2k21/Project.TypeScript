import * as Yup from "yup";
import { t } from "i18next"; 

 export const AddNewTeamValidationSchema = () => Yup.object().shape({
//   name: Yup.string()
//     .min(2, t`addNewProject.validation.name`)
//     .required(t`addNewProject.validation.nameReq`),
//   content: Yup.string()
//     .min(2, t`addNewProject.validation.content`)
//     .required(t`addNewProject.validation.contentReq`),

    teamName: Yup.string()
      .min(3, t`team.teamName.validation.min`)
      .max(20, t`team.teamName.validation.min`)
      .required(t`team.teamName.validation.requied`),
    //   password: Yup.string().required(t`user.password.validation.requied`),
 });