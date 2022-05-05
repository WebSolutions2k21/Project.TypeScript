import axios from "axios/instanceAxios";
import IForgotPassword from "components/ForgotPassword/IForgotPassword.interface";

export const sendEmail = async (data: IForgotPassword) => {
  return await axios.post("/users/resetpassword", data);
};

export const getUser = async (id: any) => {
  return await axios.get(`/users/${id}`);
};

export const getOnlyUsers = async () => {
  return await axios.get(`/users/only-users`);
};
