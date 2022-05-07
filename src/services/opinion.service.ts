import axios from "../axios/instanceAxios";
import { getCurrentUserToken } from "./auth.service";

const token = getCurrentUserToken();

export const getAllOpinions = async () => {
  return await axios(`/opinion`, {
    method: "get",
    headers: {
      "x-auth-token": token,
    },
  });
};
