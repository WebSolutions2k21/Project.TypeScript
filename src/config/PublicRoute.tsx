import React from "react";
import { Navigate } from "react-router-dom";

export type PublicRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export const PublicRoute = ({ isAuthenticated, authenticationPath, outlet }: PublicRouteProps) => {
  if (!isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
};
