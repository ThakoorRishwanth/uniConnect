import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import api from "../api/axios.js";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();


  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Login User
  const loginUser = (data) => {
    setUser(data.user);
    setToken(data.token);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    navigate("/home");
  };

  // Logout User
  const logoutUser = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // FIXED
  };

  // Load stored data on refresh
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
         user,
        token,
        loginUser,
        logoutUser,
        loading,
        isAuthenticated: token ? true : false
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
