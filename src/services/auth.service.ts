import axios from "axios/instanceAxios";

export const login  =async (email: string, password: string) => {
  return  await axios
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
}


export const registration = async (  
  userName: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,) => {
  return await 
    axios.post("/registration", {
      userName,
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("newUser", JSON.stringify(res.data.token));
      }
      return res.data;
    });
};