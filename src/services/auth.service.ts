import axios from "axios/instanceAxios";
import ILogin from "components/Login/Login.interface";

export const login = (data: ILogin) => {
  return axios.post("/login", data).then((res) => {
    if (res.data.token) {
      localStorage.setItem("user", JSON.stringify(res.data.token));
      localStorage.setItem("mentor", res.data.mentor);
    }
    return res.data;
  });
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("mentor");
};

export const isUserLogged = (): boolean => {
  return !!localStorage.getItem("user");
};

export const isMentorLogged = (): boolean => {
  return isUserLogged() && localStorage.getItem("mentor") === "true";
};

const REGISTER_URL = "/users/register";

export const register = (
  username: string,
  email: string,
  password: string,
  confirmpassword: string,
  firstname?: string,
  lastname?: string,
) => {
  return axios
    .post(REGISTER_URL, {
      username,
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
    })
    .then((res) => {
      return res.data;
    });
};
