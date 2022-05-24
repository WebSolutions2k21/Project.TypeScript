export default interface IUserProjects {
  _id: any;
  name: any;
  content: string;
  status: "open" | "closed";
  language: string[];
  description: string;
  teamId: string;
  isIndividual: boolean;
}
