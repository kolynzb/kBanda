import React from "react";
import { Outlet } from "react-router-dom";
import WelcomePg from "../pages/WelcomePg";
const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
};
const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <WelcomePg />;
};

export default ProtectedRoutes;
