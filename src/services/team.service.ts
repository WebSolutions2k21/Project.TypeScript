import axios from "axios/instanceAxios";
import ITeamProject from "components/AllTeamProject/ITeamProject.interface";

export const getAllTeam = async () => {
  return await axios.get("/team");
};

export const createTeam = async (data: ITeamProject) => {
  return await axios.post("/team/create", data);
};

export const joinTeam = async (id: string) => {
  const token = localStorage.getItem("user") as string;

  await axios(`/team/join/${id}`, {
    method: "put",
    headers: {
      "x-auth-token": token,
    },
  });
};
