import axios from "axios/instanceAxios";
import ITeamProject from "components/AllTeamProject/ITeamProject.interface";

export const getAllTeam = async () => {
  return await axios.get("/team");
};

export const createTeam = async (data: ITeamProject) => {
  return await axios.post("/team/create", data);
};

export const joinTeam = async (id: string) => {
  const token = localStorage.getItem("user");
  const headers = {
    "Access-Control-Allow-Headers": "*",
    "x-auth-token": token,
  };
  console.log("Locale storage", token);
  console.log("header", headers);
  return await axios.put(`/team/join/${id}`, headers);
};

//próby
// ###1
// {
//   headers: {
//     Authorization: token,
//   },
// }
// );

// ###2
// { headers: {"Authorization" : `Bearer ${token}`} }

// headers: {
//   'Authorization': `Basic ${token}`
// },

// headers: {
//   "x-auth-token": token,
// },
