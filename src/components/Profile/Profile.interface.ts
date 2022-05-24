import { IProgrammingLanguage } from "components/Team/IProgrammingLanguege";

export default interface ProfileInterface {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  programmingLanguage?: Array<IProgrammingLanguage>;
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  userData?: Array<IProgrammingLanguage>;
}
