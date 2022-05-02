import axios from "axios/instanceAxios";
import IForgotPassword from "components/ForgotPassword/IForgotPassword.interface";

export const sendEmail = async (data: IForgotPassword) => {
  return await axios.post("/users/resetpassword", data);
};

export const getUser = async (id: any) => {
  return await axios.get(`/users/${id}`);
};

const CHANGEPASSWORD_URL = "/users/changepassword";

export const changePassword = (
  oldPassword: string,
  newPassword: string,
  confirmNewPassword: string,
) => {
  return axios
    .put(CHANGEPASSWORD_URL, {
      oldPassword,
      newPassword,
      confirmNewPassword,
    })
    .then((res) => {
      return res.data;
    });
}
