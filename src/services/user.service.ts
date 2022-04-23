import axios from "axios/instanceAxios";
import IForgotPassword from "components/ForgotPassword/IForgotPassword.interface";

export const sendEmail = async (data: IForgotPassword) => {
  return await axios.post("/users/resetpassword", data);
};

export const getUserProjects = () => {
  return axios.get("/project").then((res) => {
    console.log("res", res);
    return res;
  });
};
