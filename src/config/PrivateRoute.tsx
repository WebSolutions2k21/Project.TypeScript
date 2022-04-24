import React from "react";
import { Navigate } from "react-router-dom";
import { paths } from "./paths";
import { isUserLogged } from "services/auth.service";

export const PrivateRoute = (children: any) => {
  const isAuthenticated = isUserLogged();

  return isAuthenticated ? children : <Navigate to={paths.login} />;
};
