import axios from "axios/instanceAxios";


export const getAllTeam =  () => {
  return axios.get("/team").then((res)=> {
      console.log("res", res)
      return res;
  });
};
