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

export const createTeam =async (data: ITeamProject) => {
  return  axios.post("/team/create", data).then((res) => {
    console.log("res", res);
    return res;
  });
};

export const joinTeam = async (id: string, userId: string)=>{
  return await axios.patch(`/team/join/${id}`, userId)
}