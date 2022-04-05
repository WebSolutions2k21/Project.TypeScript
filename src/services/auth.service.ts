import axios from "axios/instanceAxios";

const login = (email: string, password: string) => {
  return axios
    .post("/login", {
      email,
      password,
    })
    .then((res) => {
      console.log("rest data", res.data);
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data.token));
      }
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") as string);
};

const authService = {
  login,
  logout,
  getCurrentUser,
};

export default authService;
