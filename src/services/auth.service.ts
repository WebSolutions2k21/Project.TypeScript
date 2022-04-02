import axios from "axios/instanceAxios";

export const login = (email: string, password: string) => {
    return axios
      .post( "/login", {
        email,
        password,
      }).then(res => {
      
        console.log("rest", res)
        console.log("rest data", res.data) 
      }).catch(console.error)
  };