import { useState, useEffect } from "react";
import type { ProfileProps } from "@/types/Mohamed/Profile";
import { UserContext } from "./user-context";
import { getProfile } from "@/api/ProfileApi/profile";
import { useAuth } from "./useAuth";

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<ProfileProps | null>(null);
  const { isLogin, logout } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (isLogin) {
          const data = await getProfile();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        logout();
      }
    };
    fetchUser();
  }, [isLogin, logout]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
