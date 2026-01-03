# K-Culture Web 프로젝트 컨벤션

이 문서는 K-Culture Web 프로젝트의 코딩 컨벤션과 아키텍처 가이드라인을 정의합니다.

## 목차

1. [기술 스택](#기술-스택)
2. [파일 구조](#파일-구조)
3. [컴포넌트 규칙](#컴포넌트-규칙)
4. [스타일링](#스타일링)
5. [상태 관리](#상태-관리)
6. [API 통신](#api-통신)
7. [네이밍 컨벤션](#네이밍-컨벤션)

---

## 기술 스택

| 카테고리 | 기술 |
|---------|------|
| 프레임워크 | Next.js 14+ (App Router) |
| 언어 | TypeScript |
| 스타일링 | Tailwind CSS |
| 상태관리 | Zustand |
| API 코드 생성 | Orval |
| API Mocking | MSW (Mock Service Worker) |
| 폼 관리 | React Hook Form |
| 유효성 검사 | Zod |

---

## 파일 구조

### 전체 구조

```
k-culture-web/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # 인증 관련 라우트 그룹
│   │   ├── login/
│   │   ├── signup/
│   │   ├── forgot-password/
│   │   ├── reset-password/
│   │   └── layout.tsx
│   ├── (dashboard)/              # 대시보드 라우트 그룹
│   │   ├── dashboard/
│   │   ├── profile/
│   │   ├── settings/
│   │   ├── favorites/
│   │   └── layout.tsx
│   ├── (marketing)/              # 랜딩/마케팅 라우트 그룹
│   │   ├── actor-profile/
│   │   ├── ai-matching/
│   │   └── layout.tsx
│   ├── (onboarding)/             # 온보딩 라우트 그룹
│   │   ├── onboarding/
│   │   └── layout.tsx
│   ├── api/                      # API Routes
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
│
├── components/                   # 공유 컴포넌트
│   ├── ui/                       # 기본 UI 컴포넌트
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   └── index.ts
│   ├── common/                   # 공통 레이아웃 컴포넌트
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── features/                 # 기능별 컴포넌트
│       ├── actor/
│       ├── compare/
│       ├── profile/
│       └── search/
│
├── lib/                          # 유틸리티 및 설정
│   ├── constants/                # 상수
│   │   ├── colors.ts
│   │   ├── options.ts
│   │   └── index.ts
│   ├── hooks/                    # 커스텀 훅
│   ├── utils/                    # 유틸리티 함수
│   │   └── cn.ts
│   └── validations/              # Zod 스키마
│
├── src/                          # API 관련 (Orval 생성)
│   ├── model/                    # API 타입/모델
│   ├── mocks/                    # MSW 핸들러
│   │   ├── browser.ts
│   │   ├── handlers.ts
│   │   └── index.ts
│   ├── actors/                   # 배우 API
│   ├── auth/                     # 인증 API
│   ├── projects/                 # 프로젝트 API
│   └── ...
│
├── stores/                       # Zustand 스토어
│   ├── useCompareStore.ts
│   ├── useFilterStore.ts
│   └── useOnboardingStore.ts
│
├── public/                       # 정적 파일
├── docs/                         # 문서
└── config/                       # 설정 파일
```

### Route Groups 설명

| 그룹 | 용도 | 포함 라우트 |
|------|------|------------|
| `(auth)` | 인증 레이아웃 공유 | login, signup, forgot-password, reset-password |
| `(dashboard)` | 대시보드 레이아웃 공유 | dashboard, profile, settings, favorites, projects |
| `(marketing)` | 랜딩/마케팅 레이아웃 공유 | actor-profile, ai-matching, actor-search |
| `(onboarding)` | 온보딩 레이아웃 공유 | onboarding/* |

### Private 폴더 (`_folder`)

라우팅에서 제외되는 private 폴더:

```
app/actor-profile/
├── _components/          # 해당 라우트 전용 컴포넌트
│   ├── HeroSection.tsx
│   ├── CTASection.tsx
│   └── index.ts
├── _hooks/               # 해당 라우트 전용 훅
├── _utils/               # 해당 라우트 전용 유틸
└── page.tsx
```

---

## 컴포넌트 규칙

### 기본 구조

```tsx
// 1. Imports
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { ActorProfile } from "@/src/model";

// 2. Types
interface ActorCardProps {
  actor: ActorProfile;
  onSelect?: (id: string) => void;
}

// 3. Component
export const ActorCard = ({ actor, onSelect }: ActorCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={cn("rounded-lg", isHovered && "shadow-lg")}>
      {/* ... */}
    </div>
  );
};
```

### 컴포넌트 분류

| 위치 | 용도 | 예시 |
|------|------|------|
| `components/ui/` | 재사용 가능한 기본 UI | Button, Input, Select |
| `components/common/` | 레이아웃/공통 컴포넌트 | Header, Footer, PageLayout |
| `components/features/` | 기능별 컴포넌트 | ActorCard, CompareModal |
| `app/[route]/_components/` | 라우트 전용 컴포넌트 | HeroSection, CTASection |

### Export 패턴

각 폴더에 `index.ts`를 생성하여 named export 관리:

```ts
// components/ui/index.ts
export { Button } from "./button";
export { Input } from "./input";
export { Select } from "./select";
```

---

## 스타일링

### Tailwind CSS 사용

```tsx
// ✅ Good
<div className="flex items-center gap-4 rounded-lg bg-gray-900 p-4">

// ❌ Bad - 인라인 스타일 사용 지양
<div style={{ display: 'flex', alignItems: 'center' }}>
```

### cn 유틸리티 함수

조건부 클래스 적용시 `cn` 함수 사용:

```tsx
import { cn } from "@/lib/utils";

<button
  className={cn(
    "rounded-lg px-4 py-2",
    isActive && "bg-amber-500 text-white",
    isDisabled && "cursor-not-allowed opacity-50"
  )}
>
```

### 컬러 상수

`lib/constants/colors.ts`에 정의된 컬러 사용:

```ts
import { colors } from "@/lib/constants";

// colors.gold.DEFAULT, colors.dark.background 등
```

---

## 상태 관리

### Zustand 스토어

```ts
// stores/useExampleStore.ts
import { create } from "zustand";

interface ExampleState {
  count: number;
  increment: () => void;
  reset: () => void;
}

export const useExampleStore = create<ExampleState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));
```

### 사용 예시

```tsx
import { useExampleStore } from "@/stores/useExampleStore";

const Component = () => {
  const { count, increment } = useExampleStore();
  // ...
};
```

---

## API 통신

### Orval 생성 코드 사용

API 타입과 함수는 Orval로 자동 생성됩니다:

```tsx
// src/actors/actors.ts - Orval 생성
import { useGetActors, useGetActorById } from "@/src/actors/actors";

const Component = () => {
  const { data: actors } = useGetActors();
  // ...
};
```

### MSW Mocking

개발 환경에서 MSW로 API 모킹:

```ts
// src/mocks/handlers.ts
export const handlers = [
  ...actorsHandlers,
  ...authHandlers,
  // ...
];
```

---

## 네이밍 컨벤션

| 대상 | 컨벤션 | 예시 |
|------|--------|------|
| 컴포넌트 파일 | PascalCase.tsx | `ActorCard.tsx` |
| 컴포넌트 | PascalCase | `ActorCard`, `HeroSection` |
| 훅 | camelCase + use | `useActorData`, `useAuth` |
| 유틸 함수 | camelCase | `formatDate`, `cn` |
| 상수 | SCREAMING_SNAKE_CASE | `API_BASE_URL` |
| 타입/인터페이스 | PascalCase | `ActorProfile`, `UserResponse` |
| 스토어 | use + PascalCase + Store | `useCompareStore` |

---

## Import 순서

1. React / Next.js
2. 외부 라이브러리
3. 내부 절대경로 (@/, components/, lib/)
4. 상대 경로 (./, ../)
5. 타입 imports

```tsx
// 1. React / Next.js
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// 2. 외부 라이브러리
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// 3. 내부 절대경로
import { Button, Input } from "@/components/ui";
import { useAuth } from "@/lib/hooks/useAuth";
import { cn } from "@/lib/utils";

// 4. 상대 경로
import { HeroSection } from "./_components";

// 5. 타입 imports
import type { ActorProfile } from "@/src/model";
```

---

## 참고

- [Next.js App Router 문서](https://nextjs.org/docs/app)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Zustand 문서](https://docs.pmnd.rs/zustand)
- [Orval 문서](https://orval.dev/)

