import axios from "axios/instanceAxios";
import IForgotPassword from "components/ForgotPassword/IForgotPassword.interface";
import ILogin from "components/Login/Login.interface";

export const login = async (data: ILogin) => {
  return await axios.post("/login", data).then((res) => {
    if (res.data.token) {
      localStorage.setItem("user", JSON.stringify(res.data.token));
    }
    return res.data;
  });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") as string);
};

export const sendEmail = async (data: IForgotPassword) => {
  await axios.post("/users/resetpassword", data).then((res) => {
    console.log("res data", res);
    return res;
  });
};
