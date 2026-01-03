import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "대시보드 | DoDream",
  description: "DoDream 대시보드",
};

export default function DashboardGroupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
