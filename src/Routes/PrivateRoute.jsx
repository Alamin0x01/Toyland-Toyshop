// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const { pathname } = useLocation();

  if (loading) {
    return <div>Lading....</div>;
  }

  if (user) {
    return children;
  }

  return (
    <>
      <Navigate state={{ path: pathname }} to="/signin" />
    </>
  );
};

export default PrivateRoute;
