export default interface IAddNewTeamProject {
  name: string;
  mentorId: string;
  teamId: string[];
  language: string[];
  content: string;
  description?: string;
}
