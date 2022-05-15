export interface IAddNewProject {
  name: string;
  userId: string;
  mentorId: string;
  language: string[];
  content: string;
  description: string;
}

export interface ProgrammingLanguage {
  _id: string;
  level: string;
  nameLang: string;
}

export interface Mentors {
  isVerified: boolean;
  isMentor: boolean;
  _id: string;
  username: string;
  firstname: any;
  lastname: string;
  email: string;
  password: string;
  date: Date;
  programmingLanguage: ProgrammingLanguage[];
  __v: number;
}

export interface IValue {
  value: { value: string };
}
