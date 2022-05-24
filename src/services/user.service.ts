import axios from "axios/instanceAxios";
import IForgotPassword from "components/ForgotPassword/IForgotPassword.interface";

export const sendEmail = async (data: IForgotPassword) => {
  return await axios.post("/users/resetpassword", data);
};

export const getUser = async (id: any) => {
  return await axios.get(`/users/${id}`);
};

export const getUserLangs = async () => {
  return await axios.get(`users/lang`);
};

export const getOnlyUsers = async () => {
  return await axios.get(`/users/only-users`);
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

const SETNEWPASSWORD_URL = "/users/newpassword/";

export const setNewPass = (newPassword: string, confirmNewPassword: string, token: string) => {
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

const USERSEDIT_URL = "/users/edit";

export const updateUserData = (firstname: string, lastname: string) => {
  const token = localStorage.getItem("user") as string;
  return axios
    .patch(
      USERSEDIT_URL,
      {
        firstname,
        lastname,
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

const USERLANGEDIT_URL = "users/lang";

export const updateUserLang = (programmingLanguage: any, userData: any) => {
  Array.prototype.push.apply(programmingLanguage, userData);
  const token = localStorage.getItem("user") as string;
  return axios
    .patch(
      USERLANGEDIT_URL,
      {
        programmingLanguage,
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
