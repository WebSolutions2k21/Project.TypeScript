import axios from "axios/instanceAxios";

import { getCurrentUserToken } from "./auth.service";
const token = localStorage.getItem("user") as string;

export const getUserProjects =async () => {
  // const uID = localStorage.getItem("user");

  // return axios.get(`/project/user-projects`, { headers: { "x-auth-token": uID } }).then((res) => {
  //   return res;
  // });
  await axios(`/team/user-team`, {
    method: "get",
    headers: {
      "x-auth-token": token,
    },
  });
};

export const getUserTeamProjects =async () => {
  // const uID = localStorage.getItem("user")

  // return axios.get(`/team/user-team`, { headers: { "x-auth-token": uID } }).then((res) => {
  //   return res;
  // });
  await axios(`/team/user-team`, {
    method: "get",
    headers: {
      "x-auth-token": token,
    },
  });
};

