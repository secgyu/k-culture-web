"use client";

import Link from "next/link";
import { useState, useRef } from "react";

// 서비스 카드 데이터
const services = [
  {
    id: 1,
    title: "배우&모델 프로필 관리 탐색 플랫폼",
    target: "대상 - 배우&모델",
    status: "운영중",
    statusColor: "border-green-500 text-green-500",
    bgColor: "bg-purple-600",
    href: "/recommend",
    hasDetail: true,
  },
  {
    id: 2,
    title: "스태프 포트폴리오 웹페이지",
    target: "대상 - 스태프",
    status: "개발중",
    statusColor: "border-orange-500 text-orange-500",
    bgColor: "bg-orange-500",
    href: "#",
    hasDetail: false,
  },
  {
    id: 3,
    title: "필모그래피 관리 및 네트워킹 플랫폼",
    target: "대상 - 배우&모델&스태프&업체",
    status: "운영중",
    statusColor: "border-green-500 text-green-500",
    bgColor: "bg-zinc-800",
    href: "/mypage",
    hasDetail: true,
  },
  {
    id: 4,
    title: "프로덕션 PD 대시보드 서비스",
    target: "대상 - 제작사",
    status: "대기중",
    statusColor: "border-zinc-500 text-zinc-500",
    bgColor: "bg-white",
    logoVariant: "dark" as const,
    href: "#",
    hasDetail: false,
  },
];

// 서비스 상세 정보
const serviceDetails = {
  1: {
    title: "배우&모델 프로필 관리 탐색 플랫폼",
    description:
      "배우와 모델을 위한 프로필 관리 및 탐색 플랫폼입니다. 손쉽게 프로필을 등록하고 관리할 수 있으며, 자동 PDF 변환 기능이 있습니다.",
    features: [
      { num: 1, text: "프로필 등록 및 관리" },
      { num: 2, text: "포트폴리오 업로드" },
      { num: 3, text: "맞춤형 배우 검색" },
      { num: 4, text: "프로필 파일 PDF 자동 변환" },
    ],
    buttons: [{ text: "이동하기", href: "/recommend", variant: "primary" as const }],
  },
  3: {
    title: "필모그래피 관리 및 네트워킹 플랫폼",
    description: "필모그래피를 관리하고 네트워킹할 수 있는 플랫폼입니다. 작품 기반으로 배우&스태프분들을 만나보세요!",
    features: [
      { num: 1, text: "필모그래피 관리" },
      { num: 2, text: "작품기반 참여자 탐색" },
      { num: 3, text: "팀찾기 기능" },
      { num: 4, text: "온오프라인 커뮤니티" },
    ],
    buttons: [
      { text: "플레이스토어(안드로이드)", href: "#", variant: "secondary" as const },
      { text: "앱스토어(iOS)", href: "#", variant: "primary" as const },
    ],
  },
};

// 서비스 카드 컴포넌트
function ServiceCard({
  service,
  isSelected,
  onClick,
}: {
  service: {
    id: number;
    title: string;
    target: string;
    status: string;
    statusColor: string;
    bgColor: string;
    href: string;
    logoVariant?: "dark" | "light";
    hasDetail: boolean;
  };
  isSelected: boolean;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 아이콘 카드 */}
      <div
        className={`
          ${service.bgColor} 
          w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 
          rounded-3xl flex items-center justify-center
          transition-all duration-300 ease-out
          ${isHovered || isSelected ? "scale-105 shadow-2xl shadow-white/10" : "shadow-lg"}
          ${isSelected ? "ring-2 ring-purple-500 ring-offset-2 ring-offset-zinc-950" : ""}
        `}
      >
        {/* 로고 아이콘 */}
        <div className={`flex items-center gap-1 ${service.logoVariant === "dark" ? "text-zinc-900" : "text-white"}`}>
          <span className="font-bold text-2xl sm:text-3xl tracking-tight">T</span>
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-current flex items-center justify-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-current" />
          </div>
          <span className="font-bold text-2xl sm:text-3xl tracking-tight">ID</span>
        </div>
      </div>

      {/* 텍스트 정보 */}
      <div className="mt-4 text-center space-y-2">
        <h3 className="text-white text-sm sm:text-base font-medium leading-tight max-w-[180px]">{service.title}</h3>
        <p className="text-zinc-500 text-xs sm:text-sm">{service.target}</p>
        <span
          className={`
            inline-block px-3 py-1 
            text-xs font-medium 
            border rounded-full
            ${service.statusColor}
          `}
        >
          {service.status}
        </span>
      </div>
    </button>
  );
}

// 서비스 상세 패널 컴포넌트
function ServiceDetailPanel({
  detail,
  isVisible,
}: {
  detail: {
    title: string;
    description: string;
    features: { num: number; text: string }[];
    buttons: { text: string; href: string; variant: "primary" | "secondary" }[];
  };
  isVisible: boolean;
}) {
  return (
    <div
      className={`
        w-full max-w-3xl mx-auto 
        bg-zinc-900 rounded-2xl p-8 
        transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}
      `}
    >
      {/* 제목 */}
      <h2 className="text-white text-xl sm:text-2xl font-bold text-center mb-4">{detail.title}</h2>

      {/* 설명 */}
      <p className="text-zinc-400 text-sm sm:text-base text-center mb-8 max-w-lg mx-auto leading-relaxed">
        {detail.description}
      </p>

      {/* 기능 목록 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {detail.features.map((feature) => (
          <div key={feature.num} className="flex items-center gap-3 bg-zinc-800/50 rounded-xl px-4 py-3">
            <span
              className={`
                w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                ${feature.num % 2 === 1 ? "bg-zinc-700 text-white" : "bg-purple-600 text-white"}
              `}
            >
              {feature.num}
            </span>
            <span className="text-zinc-300 text-sm">{feature.text}</span>
          </div>
        ))}
      </div>

      {/* 버튼 */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {detail.buttons.map((button, index) => (
          <Link
            key={index}
            href={button.href}
            className={`
              px-8 py-3 rounded-xl font-medium text-sm text-center
              transition-all duration-200
              ${
                button.variant === "primary"
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700"
              }
            `}
          >
            {button.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function OnboardingContent() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const handleServiceClick = (serviceId: number, hasDetail: boolean) => {
    if (!hasDetail) return;

    if (selectedService === serviceId) {
      setSelectedService(null);
    } else {
      setSelectedService(serviceId);
      // 스크롤 이동
      setTimeout(() => {
        detailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  };

  const currentDetail = selectedService ? serviceDetails[selectedService as keyof typeof serviceDetails] : null;

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      {/* 헤더 */}
      <header className="w-full px-6 py-4 flex items-center justify-between">
        {/* 로고 */}
        <div className="flex items-center gap-1 text-white">
          <span className="font-bold text-xl tracking-tight">T</span>
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">ID</span>
        </div>

        {/* 네비게이션 */}
        <nav className="hidden sm:flex items-center gap-6">
          <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
            스태프 포트폴리오
          </Link>
          <Link href="/actor-profile" className="text-zinc-400 hover:text-white transition-colors text-sm">
            배우 프로필
          </Link>
          <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
            커뮤니티
          </Link>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button className="sm:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 flex flex-col items-center px-6 py-12">
        {/* 환영 메시지 */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          토이드에 오신 것을 환영합니다!
        </h1>

        {/* 서비스 카드 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl w-full">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedService === service.id}
              onClick={() => handleServiceClick(service.id, service.hasDetail)}
            />
          ))}
        </div>

        {/* 안내 문구 */}
        <p
          className={`mt-16 text-zinc-500 text-base sm:text-lg transition-opacity duration-300 ${
            selectedService ? "opacity-0" : "animate-pulse"
          }`}
        >
          아이콘을 눌러보세요!
        </p>

        {/* 서비스 상세 패널 */}
        <div ref={detailRef} className="w-full mt-8">
          {currentDetail && <ServiceDetailPanel detail={currentDetail} isVisible={!!selectedService} />}
        </div>
      </main>

      {/* 푸터 */}
      <footer className="w-full px-6 py-8 text-center">
        <div className="text-zinc-600 text-xs sm:text-sm space-y-2">
          <p className="flex flex-wrap justify-center gap-2">
            <span>주식회사 토이드</span>
            <span className="hidden sm:inline">|</span>
            <span>대표이사 양승철</span>
            <span className="hidden sm:inline">|</span>
            <span>사업자번호 533-86-03592</span>
          </p>
          <p>주소 서울특별시 마포구 와우산로 105, 5층 제이 293호</p>
        </div>

        {/* 푸터 로고 */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-1 text-zinc-600">
            <span className="font-bold text-lg tracking-tight">T</span>
            <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-current" />
            </div>
            <span className="font-bold text-lg tracking-tight">ID</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
