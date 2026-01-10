"use client";

import { type ReactNode, useEffect, useState } from "react";

interface MSWProviderProps {
  children: ReactNode;
}

export function MSWProvider({ children }: MSWProviderProps) {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    async function initMSW() {
      if (process.env.NODE_ENV === "development") {
        const { initMocks } = await import("@/src/mocks");
        await initMocks();
      }
      setMswReady(true);
    }

    initMSW();
  }, []);

  if (process.env.NODE_ENV !== "development") {
    return <>{children}</>;
  }

  if (!mswReady) {
    return null;
  }

  return <>{children}</>;
}
