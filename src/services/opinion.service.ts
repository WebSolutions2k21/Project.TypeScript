import axios from "../axios/instanceAxios";
import { getCurrentUserToken } from "./auth.service";
import jwt_decode from "jwt-decode";

const token = getCurrentUserToken();

export const getAllOpinions = async () => {
  return await axios(`/opinion`, {
    method: "get",
    headers: {
      "x-auth-token": token,
    },
  });
};

const URL = "/opinion/create";

interface IAddNewOpinion {
  userId?: string;
  username?:string;
  mentorId?: string;
  content?: string;
}

export const createOpinion = (
  userId: string,
  username: string,
  mentorId: string,
  content: string,
) => {
  const data: IAddNewOpinion = {};
  if (username.length > 0) data.username = username;
  if (userId.length > 0) {
    const uID: { _id: string } = jwt_decode(userId);
    data.userId = uID._id;
  }
  if (mentorId.length > 0) data.mentorId = mentorId;
  if (content.length > 0) data.content = content;

  return axios
    .post(URL, data)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};

const URLMentors = "/users/mentors";
export const getMentors = () => {
  return axios.get(URLMentors).then((res) => {
    return res;
  });
};