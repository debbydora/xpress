import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { getUser, isLoading } = useAuth();
  const authenticatedUser = getUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!authenticatedUser) {
    return <Navigate to="/login" replace />;
  }

  return <><Outlet/></>;
}

export default ProtectedRoutes;
