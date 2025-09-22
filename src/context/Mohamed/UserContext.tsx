import { useState, useEffect } from "react";
import type { ProfileProps } from "@/types/Mohamed/Profile";
import { UserContext } from "./user-context";
import { getProfile } from "@/api/ProfileApi/profile";

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<ProfileProps | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getProfile();
        setUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
