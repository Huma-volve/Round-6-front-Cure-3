import { createContext, type Dispatch, type SetStateAction } from "react";
import type { ProfileProps } from "@/types/Mohamed/Profile";

export type UserContextValue = {
  user: ProfileProps | null;
  setUser: Dispatch<SetStateAction<ProfileProps | null>>;
};

const noopSetUser: Dispatch<SetStateAction<ProfileProps | null>> = () =>
  undefined;

export const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: noopSetUser,
});
