import axios from "axios/instanceAxios";
import IForgotPassword from "components/ForgotPassword/IForgotPassword.interface";

export const sendEmail = async (data: IForgotPassword) => {
  return await axios.post("/users/resetpassword", data);
};

export const getUser = async (id: any) => {
  return await axios.get(`/users/${id}`);
};

const CHANGEPASSWORD_URL = "/users/changepassword";

export const changePassword = (oldPassword: string, newPassword: string, confirmNewPassword: string) => {
  const token = localStorage.getItem("user") as string;
  return axios
    .put(
      CHANGEPASSWORD_URL,
      {
        oldPassword,
        newPassword,
        confirmNewPassword,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      },
    )
    .then((res) => {
      return res.data;
    });
};

const token = localStorage.getItem("user") as string;
const SETNEWPASSWORD_URL = `/users/newpassword/${token}`;

export const setNewPassword = (newPassword: string, confirmNewPassword: string) => {
  return axios
    .put(
      SETNEWPASSWORD_URL,
      {
        newPassword,
        confirmNewPassword,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      },
    )
    .then((res) => {
      return res.data;
    });
};