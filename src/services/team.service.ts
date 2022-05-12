import axios from "axios/instanceAxios";
import ITeamProject from "components/Team/ITeamProject.interface";
import { getCurrentUserToken } from "./auth.service";

const token = getCurrentUserToken()

export const getAllTeam = async () => {
  return await axios.get("/team");
};

export const createTeam = async (data: ITeamProject) => {
  return await axios.post("/team/create", data)
};

export const joinTeam = async (id: string) => {
  await axios(`/team/join/${id}`, {
    method: "put",
    headers: {
      "x-auth-token": token,
    },
  });
};

export const getMyTeam = async () => {
  return await axios(`/team/mentor-team`, {
    method: "get",
    headers: {
      "x-auth-token": token,
    },
  });
};


export const deleteTeam = async (id: string) => {
  return await axios(`/team/${id}`, {
    method: "delete",
    headers: {
      "x-auth-token": token,
    },
  });
};