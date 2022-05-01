import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

export type PrivateRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  // redirectPath: string;
  // setRedirectPath: (path: string) => void;
  outlet: JSX.Element;
}

export const PrivateRoute = ({isAuthenticated, authenticationPath, outlet}: PrivateRouteProps) => {

  if(isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
};

