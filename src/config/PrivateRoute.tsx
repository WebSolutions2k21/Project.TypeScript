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

import React from "react";
import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props: any) =>
      localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        <Navigate replace
          to={{ pathname: "/login" }}
        />
      )
    }
  />
);
