import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoutes({ children }) {
  const { getUser, isLoading } = useAuth();
  const authenticatedUser = getUser();

  if (!isLoading && !authenticatedUser) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoutes;
