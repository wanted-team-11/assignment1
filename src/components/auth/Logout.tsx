import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import path from "../../router/routerPath";
import storage from "../../utils/storage";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    storage.remove("TOKEN");
    navigate(path.LOGIN);
  });

  return <></>;
};

export default Logout;
