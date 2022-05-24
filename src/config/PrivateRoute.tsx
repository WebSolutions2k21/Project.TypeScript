import LoadingToRedirect from "components/LoadingToRedirect";
// import React from "react";
import { paths } from "./paths";

const PrivateRoute = ({ children }: { children: any }) => {
  const token = localStorage.getItem("token");
  return token ? children : LoadingToRedirect(paths.login);
};

export default PrivateRoute;
