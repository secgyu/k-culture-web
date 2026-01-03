import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인 | DoDream",
  description: "DoDream 계정에 로그인하세요",
};

export default function AuthGroupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
