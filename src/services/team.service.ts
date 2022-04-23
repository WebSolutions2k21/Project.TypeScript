import axios from "axios/instanceAxios";
import ITeamProject from "components/AllTeamProject/ITeamProject.interface";

export const getAllTeam = () => {
  return axios.get("/team").then((res) => {
    console.log("res", res);
    return res;
  });
};

const getTeam = (id: any) => {
  return axios.get<ITeamProject>(`/team/${id}`);
};
