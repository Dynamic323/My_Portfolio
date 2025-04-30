import { Children, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ Children }) => {
  const naviga = useNavigate();
  const token = localStorage.getItem("token") || false;

  useEffect(() => {
    if (!token) {
      naviga("/admin");
    }
  }, [token, naviga]);

  return token ? Children : null;
};

export default ProtectedRoutes;
