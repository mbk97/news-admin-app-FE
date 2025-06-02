import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUserDetails } from "../../utils/saveData";

const isAuthenticated = () => {
  const user = getUserDetails("user_data");
  return !!user;
};

const ProtectedRoute: React.FC = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
