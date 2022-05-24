import LoadingToRedirect from "components/LoadingToRedirect";
import { paths } from "./paths";

const PublicRoute = ({ children }: { children: any }) => {
  const token = localStorage.getItem("token");
  return !token ? children : LoadingToRedirect(paths.myProfile);
};

export default PublicRoute;
