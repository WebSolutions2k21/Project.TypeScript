import axios from "axios/instanceAxios";
import ILogin from "components/Login/Login.interface";

export const login = (data: ILogin) => {
  return axios.post("/login", data).then((res) => {
    if (res.data.token) {
      localStorage.setItem("user", res.data.token);
      localStorage.setItem("mentor", res.data.mentor);
      localStorage.setItem("id", res.data.id);
      window.location.reload();
    }
    return res.data;
  });
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};

export const getCurrentUserToken = () => {
  if (localStorage.getItem("user")) {
    return localStorage.getItem("user") as string;
  } else {
    console.error("Can't find User token");
    return "";
  }
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
