import axios from "../axios/instanceAxios";
import { getCurrentUserToken } from "./auth.service";


const token = getCurrentUserToken();

export const getAllOpinions = async () => {
  return await axios(`/opinion`, {
    method: "get",
    headers: {
      "x-auth-token": token,
    },
  });
};

interface IAddNewOpinion {
  userId?: string;
  stars?: number;
  mentorId?: string;
  content?: string;
}

export const createOpinion = async (data: IAddNewOpinion) => {
  return await axios(`/opinion/create`, {
    method: "post",
    data: data,
    headers: {
      "x-auth-token": token,
    },
  });
};

const URLMentors = "/users/mentors";
export const getMentors = () => {
  return axios.get(URLMentors).then((res) => {
    return res;
  });
};
