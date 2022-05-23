import axios from "axios/instanceAxios";

import { getCurrentUserToken } from "./auth.service";

const token = getCurrentUserToken();

export const getUserProjects = async () => {
  return await axios(`/project/user-projects`, {
    method: "get",
    headers: {
      "x-auth-token": token,
    },
  });
};

export const getUserTeam = async () => {
  return await axios(`/team/user-team`, {
    method: "get",
    headers: {
      "x-auth-token": token,
    },
  });
};

export const editUserProject = async (
  _id: string,
  name: string,
  content: string,
  status: string,
  language: [string],
  description: string,
) => {
  console.log("EditUserProject", content);
  return await axios
    .put(
      `/project/${_id}`,
      {
        name,
        content,
        status,
        description,
        language,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      },
    )
    .then((res) => {
      console.log("inside Then", res.data);
      return res.data;
    });
};

export const deleteProject = async (_id: string) => {
  return await axios.delete(`/project/${_id}`, {
    headers: {
      "x-auth-token": token,
    },
  });
};
