import storage from "../utils/storage";
import { Navigate, Outlet } from "react-router-dom";
import path from "./routerPath";

/* 
  인증된 사용자가 접근하면 todo 페이지로 리다이렉션
  ex) 로그인 되어있는 사용자가 로그인 페이지나 회원가입 페이지로 이동 시 todo 페이지로 이동
*/

const NotAuthRoute = () => {
  return storage.get("TOKEN") ? <Navigate to={path.TODO} /> : <Outlet />;
};

export default NotAuthRoute;
