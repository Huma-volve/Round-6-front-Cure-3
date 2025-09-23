import { createContext, useState, useEffect, type ReactNode } from "react";

interface AuthContextType {
  isLogin: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export { AuthContext };
