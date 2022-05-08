import { IProgrammingLanguage } from "./IProgrammingLanguege";

export default interface ITeamProject {
  _id?: string;
  teamName: any;
  usersIds: string [];
  mentorId: string;
  programmingLanguage: Array<IProgrammingLanguage>;
  status: boolean;
  places: number;
  description: string;
}


