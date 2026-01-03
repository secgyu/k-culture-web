import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DoDream - 배우&모델 프로필 플랫폼",
  description: "배우와 캐스팅 담당자를 연결하는 프리미엄 프로필 관리 플랫폼",
};

export default function MarketingGroupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
