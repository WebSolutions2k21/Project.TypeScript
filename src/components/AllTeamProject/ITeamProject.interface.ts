export default interface ITeamProject {
  _id: string;
  teamName: any;
  usersIds: [];
  mentorId: string;
  programmingLanguage: Array<IProgrammingLanguage>;
  status: boolean;
  places: number;
  description: string;
}

interface IProgrammingLanguage {
  level?: string;
  nameLang?: string;
}
