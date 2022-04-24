import axios from "axios/instanceAxios";
import IForgotPassword from "components/ForgotPassword/IForgotPassword.interface";

export const sendEmail = async (data: IForgotPassword) => {
  return await axios.post("/users/resetpassword", data);
};

export const getUser = (id: any) => {
  return axios.get(`/users/${id}`).then((res) => {
    console.log("res", res);
    return res;
  });
};
