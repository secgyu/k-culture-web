import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  userType: "actor" | "agency" | null;
  accessToken: string | null;
  refreshToken: string | null;
  login: (accessToken: string, refreshToken: string, type: "actor" | "agency") => void;
  logout: () => void;
  setUserType: (type: "actor" | "agency") => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
  getAccessToken: () => string | null;
  getRefreshToken: () => string | null;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      userType: null,
      accessToken: null,
      refreshToken: null,
      login: (accessToken, refreshToken, type) =>
        set({
          isAuthenticated: true,
          userType: type,
          accessToken,
          refreshToken,
        }),
      logout: () =>
        set({
          isAuthenticated: false,
          userType: null,
          accessToken: null,
          refreshToken: null,
        }),
      setUserType: (type) =>
        set({
          userType: type,
        }),
      setTokens: (accessToken, refreshToken) =>
        set({
          accessToken,
          refreshToken,
        }),
      clearTokens: () =>
        set({
          accessToken: null,
          refreshToken: null,
        }),
      getAccessToken: () => get().accessToken,
      getRefreshToken: () => get().refreshToken,
    }),
    {
      name: "auth-storage",
    }
  )
);
