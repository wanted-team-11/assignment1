import storage from "../utils/storage";
import { Navigate, Outlet } from "react-router-dom";
import path from "./routerPath";

const AuthRoute = () => {
  return storage.get("TOKEN") ? <Outlet /> : <Navigate to={path.LOGIN} />;
};

export default AuthRoute;
