export default interface ITeamProject {
  teamName: any;
  usersIds: [];
  mentorId: string;
  programmingLanguage: Array<IProgrammingLanguage>;
  status: boolean;
}

interface IProgrammingLanguage {
  level?: string;
  nameLang?: string;
}
