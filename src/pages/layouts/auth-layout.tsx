import { Paths } from "@/configs/site.config";
import { useState, type FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout: FC = () => {
  const [loggedIn] = useState<boolean>(true);

  return loggedIn
    ? <Outlet />
    : <Navigate to={Paths.USER_LOGIN} replace />
}

export default AuthLayout;