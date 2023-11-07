import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

type TProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: TProtectedRouteProps) => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/landing" />;
  }

  return children;
};

export default ProtectedRoute;
