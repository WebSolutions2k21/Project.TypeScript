
import LoadingToRedirect from "components/LoadingToRedirect";
import React from "react";

const PrivateRoute = ({ children }: { children: any }) => {
  const token = localStorage.getItem("token")
  return token ? children : <LoadingToRedirect />;
};

export default PrivateRoute;
