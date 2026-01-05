import { useState, useEffect } from "react";

interface UseAuthReturn {
  isLoggedIn: boolean;
  userType: "actor" | "agency" | null;
  setIsLoggedIn: (value: boolean) => void;
  logout: () => void;
}

export function useAuth(): UseAuthReturn {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<"actor" | "agency" | null>(null);

  useEffect(() => {
    const hasOnboardingData = localStorage.getItem("onboarding_step1");
    const storedUserType = localStorage.getItem("user_type") as "actor" | "agency" | null;

    setIsLoggedIn(!!hasOnboardingData);
    setUserType(storedUserType);
  }, []);

  const logout = () => {
    localStorage.removeItem("onboarding_step1");
    localStorage.removeItem("user_type");
    setIsLoggedIn(false);
    setUserType(null);
  };

  return {
    isLoggedIn,
    userType,
    setIsLoggedIn,
    logout,
  };
}

