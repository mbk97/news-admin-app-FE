import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUserDetails } from "../../utils/saveData";

interface ProtectedRouteProps {
  allowedRoles?: string[];
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles = [],
  redirectTo = "/",
}) => {
  const user = getUserDetails("user_data");
  const isAuthenticated = !!user;
  const userRole = user?.role;
  console.log(allowedRoles);

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
