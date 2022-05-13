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

export const getUserTeamProjects = async () => {
  return await axios(`/team/user-team`, {
    method: "get",
    headers: {
      "x-auth-token": token,
    },
  });
};

export const editUserProject = async (projectId: string) => {
  return await axios(`/project/${projectId}`, {
    method: "put",
    headers: {
      "x-auth-token": token,
    },
  });
};
