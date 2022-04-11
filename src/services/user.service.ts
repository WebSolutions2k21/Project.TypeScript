import axios from "axios/instanceAxios";
import IForgotPassword from "components/ForgotPassword/IForgotPassword.interface";

export const sendEmail = async (data: IForgotPassword) => {
  await axios.post("/users/resetpassword", data).then((res) => {
    console.log("res data", res);
    return res;
  });
};
