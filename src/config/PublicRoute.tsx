import React from "react";
import { Navigate, RouteProps } from "react-router-dom";
import { paths } from "./paths";
import { isUserLogged } from "services/auth.service";

export type PrivateRouteProps = {
  isAuthenticated: boolean;
} & RouteProps;

export const PublicRoute = (children: any) => {
  const isAuthenticated = isUserLogged();

  return !isAuthenticated ? children : <Navigate to={paths.login} />;
};
