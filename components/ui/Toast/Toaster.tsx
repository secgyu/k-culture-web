"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: "w-full flex items-center gap-3 p-4 rounded-lg border backdrop-blur-sm shadow-lg",
          title: "text-sm font-medium",
          description: "text-sm opacity-90",
          success: "bg-luxury-secondary/90 border-gold/20 text-ivory",
          error: "bg-luxury-secondary/90 border-red-500/20 text-ivory",
          warning: "bg-luxury-secondary/90 border-amber-500/20 text-ivory",
          info: "bg-luxury-secondary/90 border-blue-500/20 text-ivory",
        },
      }}
      richColors={false}
    />
  );
}
