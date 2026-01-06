import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  userType: "actor" | "agency" | null;
  accessToken: string | null;
  login: (token: string, type: "actor" | "agency") => void;
  logout: () => void;
  setUserType: (type: "actor" | "agency") => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userType: null,
      accessToken: null,
      login: (token, type) =>
        set({
          isAuthenticated: true,
          userType: type,
          accessToken: token,
        }),
      logout: () =>
        set({
          isAuthenticated: false,
          userType: null,
          accessToken: null,
        }),
      setUserType: (type) =>
        set({
          userType: type,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);
