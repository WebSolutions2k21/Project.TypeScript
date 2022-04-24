import axios from "axios/instanceAxios";

import { getCurrentUserToken } from "./auth.service";

export const getUserProjects = () => {
  const uID = getCurrentUserToken();

  return axios.get(`/project/user-projects`, { headers: { "x-auth-token": uID } }).then((res) => {
    return res;
  });
};

export const getUserTeamProjects = () => {
  const uID = getCurrentUserToken();

  return axios.get(`/team/user-team`, { headers: { "x-auth-token": uID } }).then((res) => {
    return res;
  });
};
