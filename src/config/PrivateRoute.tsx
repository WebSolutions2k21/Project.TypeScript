// import React from "react";
// import { Navigate } from "react-router-dom";

// export type PrivateRouteProps = {
//   isAuthenticated: boolean;
//   authenticationPath: string;
//   outlet: JSX.Element;
// };

// export const PrivateRoute = ({ isAuthenticated, authenticationPath, outlet }: PrivateRouteProps) => {
//   if (isAuthenticated) {
//     return outlet;
//   } else {
//     return <Navigate to={{ pathname: authenticationPath }} />;
//   }
// };
import LoadingToRedirect from "components/LoadingToRedirect";
import { selectAuth } from "features/authSlice";
import React from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }: { children: any }) => {
  const {token} = useSelector(selectAuth);
  return token ? children : <LoadingToRedirect/>;
};

export default PrivateRoute;
