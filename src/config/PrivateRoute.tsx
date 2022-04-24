import React from "react";
import { Navigate } from "react-router-dom";
import { paths } from "./paths";
import { login } from "services/auth.service";

export const PrivateRoute = ({ children: any }) => {
  return login ? children : <Navigate to={paths.login} />;
};
