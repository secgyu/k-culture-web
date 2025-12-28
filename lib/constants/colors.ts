// 골드 럭셔리 팔레트 - 배우/모델 프로필 플랫폼
export const COLORS = {
  // 배경 색상
  background: {
    primary: "#0A0A0A", // 딥 블랙 - 메인 배경
    secondary: "#141414", // 소프트 블랙 - 카드/섹션 배경
    tertiary: "#1F1F1F", // 다크 그레이 - 입력 필드 배경
    light: "#FFFEF2", // 아이보리 - 라이트 섹션 배경
    champagne: "#F7E7CE", // 샴페인 - 하이라이트 배경
  },

  // 텍스트 색상
  text: {
    primary: "#FFFEF2", // 아이보리 화이트 - 주요 텍스트
    secondary: "#C9C5B8", // 웜 그레이 - 서브 텍스트
    tertiary: "#8A8679", // 뮤트 그레이 - 보조 텍스트
    muted: "#6B665C", // 플레이스홀더, 비활성
    disabled: "#4A4640", // 더 연한 텍스트/아이콘
    dark: "#0A0A0A", // 라이트 섹션용 다크 텍스트
  },

  // 테두리 색상
  border: {
    default: "#2A2A2A", // 기본 테두리
    light: "#1F1F1F", // 연한 테두리
    dark: "#3A3A3A", // 진한 테두리
    gold: "#D4AF37", // 골드 테두리 (강조)
  },

  // 액센트 색상 - 골드 계열
  accent: {
    gold: "#D4AF37", // 리치 골드 - 주 액센트
    goldLight: "#E8C547", // 라이트 골드 - hover
    goldDark: "#B8962E", // 다크 골드 - pressed
    champagne: "#F7E7CE", // 샴페인 - 배경 하이라이트
  },

  // 상태별 색상
  status: {
    success: {
      bg: "rgba(74, 222, 128, 0.1)",
      text: "#4ADE80",
    },
    error: {
      bg: "rgba(239, 68, 68, 0.1)",
      text: "#EF4444",
    },
    info: {
      bg: "rgba(96, 165, 250, 0.1)",
      text: "#60A5FA",
    },
    planning: {
      bg: "rgba(212, 175, 55, 0.1)",
      text: "#D4AF37",
    },
    ongoing: {
      bg: "rgba(212, 175, 55, 0.2)",
      text: "#E8C547",
    },
    completed: {
      bg: "rgba(74, 222, 128, 0.1)",
      text: "#4ADE80",
    },
  },

  // 그라데이션
  gradient: {
    goldShine: "linear-gradient(135deg, #D4AF37 0%, #F7E7CE 50%, #D4AF37 100%)",
    darkFade: "linear-gradient(180deg, #0A0A0A 0%, #141414 100%)",
    goldOverlay: "linear-gradient(180deg, rgba(212, 175, 55, 0.3) 0%, transparent 100%)",
  },
} as const;

export type TextColor = (typeof COLORS.text)[keyof typeof COLORS.text];
export type BackgroundColor = (typeof COLORS.background)[keyof typeof COLORS.background];
export type BorderColor = (typeof COLORS.border)[keyof typeof COLORS.border];
export type AccentColor = (typeof COLORS.accent)[keyof typeof COLORS.accent];
