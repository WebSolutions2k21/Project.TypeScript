import axios from "axios/instanceAxios";

export const getCurrentUserToken = () => {
  if (localStorage.getItem("token")) {
    return localStorage.getItem("token") as string;
  } else {
    console.error("Can't find User token");
    return "";
  }
};

export const isUserLogged = (): boolean => {
  return !!localStorage.getItem("token");
};

export const isMentorLogged = (): boolean => {
  return isUserLogged() && localStorage.getItem("mentor") === "true";
};

export const getUserID = (): any => {
  return localStorage.getItem("id");
}

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
