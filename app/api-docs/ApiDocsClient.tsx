"use client";

import { useCallback } from "react";

import Script from "next/script";

declare global {
  interface Window {
    Scalar?: {
      createApiReference: (selector: string, options: { content: string }) => void;
    };
  }
}

export default function ApiDocsClient({ spec }: { spec: string }) {
  const handleScriptLoad = useCallback(() => {
    if (window.Scalar) {
      window.Scalar.createApiReference("#scalar-api-docs", { content: spec });
    }
  }, [spec]);

  return (
    <>
      <div id="scalar-api-docs" style={{ minHeight: "100vh" }} />
      <Script
        src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
    </>
  );
}
