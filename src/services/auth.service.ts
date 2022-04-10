import axios from "axios/instanceAxios";
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

export const sendEmail = async (email: string) => {
 await axios.post("/users/resetpassword", email).then((res) => {
   console.log("res data", res)
    return res;
  });
};
