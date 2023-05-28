import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const encodedToken = localStorage.getItem("encodedToken");
  const location = useLocation();
  console.log(encodedToken);
  return encodedToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
