import * as Yup from "yup";
import { t } from "i18next";

export const AddNewProjectSchema = () =>
  Yup.object().shape({
    name: Yup.string()
      .min(2, t`addNewProject.validation.name`)
      .required(t`addNewProject.validation.nameReq`),
    content: Yup.string()
      .min(2, t`addNewProject.validation.content`)
      .required(t`addNewProject.validation.contentReq`),
    description: Yup.string()
      .min(2, t`addNewProject.validation.description`)
      .required(t`addNewProject.validation.descriptionReq`),
  });
