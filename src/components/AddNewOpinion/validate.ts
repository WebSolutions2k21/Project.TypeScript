import * as Yup from "yup";
import { t } from "i18next";

export const AddNewOpinionSchema = () =>
  Yup.object().shape({
    // username: Yup.string()
    //   .min(2, t`addNewOpinon.validation.username`)
    //   .required(t`addNewOpinon.validation.usernameReq`),
    content: Yup.string()
      .min(2, t`addNewOpinion.validation.content`)
      .required(t`addNewOpinion.validation.contentReq`),
  });
 