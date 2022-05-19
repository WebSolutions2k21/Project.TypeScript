import axios from "../axios/instanceAxios";
import jwt_decode from "jwt-decode";

const URL = "/project/create";
const URLMentors = "/users/mentors";

interface IAddNewProject {
  name?: string;
  userId?: string;
  mentorId?: string;
  language?: string[];
  content?: string;
  description?: string;
}

export const createProject = (
  name: string,
  userId: string,
  mentorId: string,
  language: string[],
  content: string,
  description: string,
) => {
  const data: IAddNewProject = {};
  if (name.length > 0) data.name = name;
  if (userId.length > 0) {
    const uID: { _id: string } = jwt_decode(userId);
    data.userId = uID._id;
  }
  if (mentorId.length > 0) data.mentorId = mentorId;
  if (language.length > 0) data.language = language;
  if (content.length > 0) data.content = content;
  if (description.length > 0) data.description = description;

  return axios
    .post(URL, data)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getMentors = () => {
  return axios.get(URLMentors).then((res) => {
    return res;
  });
};

export const getAllProjects = async () => {
  return await axios(`/project`, {
    method: "get",
  });
};
