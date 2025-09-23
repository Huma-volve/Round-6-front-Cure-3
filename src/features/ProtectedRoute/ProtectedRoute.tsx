import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/signup" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
