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

export const getCurrentUserToken = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user") as string);
  } else {
    console.error("Can't find User token");
  }
};

export const isUserLogged = (): boolean => {
  return !!localStorage.getItem("user");
};

export const isMentorLogged = (): boolean => {
  return isUserLogged() && localStorage.getItem("mentor") === "true";
};

const REGISTER_URL = "/users/register";

export const register = async (
  username: string,
  email: string,
  password: string,
  confirmpassword: string,
  firstname?: string,
  lastname?: string,
) => {
  return await axios
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
