import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로필 등록 | DoDream",
  description: "DoDream에 프로필을 등록하세요",
};

export default function OnboardingGroupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
