import axios from "axios/instanceAxios";

export const login = async (email: string, password: string) => {
  return await axios
    .post("/login", {
      email,
      password,
    })
    .then((res) => {
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
