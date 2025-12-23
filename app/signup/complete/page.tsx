"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/app/components/PageLayout";
import { Suspense } from "react";
import { COLORS } from "@/lib/constants";

function CompleteContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "actor";

  const isActor = type === "actor";

  const handleStart = () => {
    if (isActor) {
      router.push("/recommend");
    } else {
      router.push("/recommend");
    }
  };

  return (
    <PageLayout>
      <main className="flex-1 flex flex-col items-center justify-center px-5">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mb-8"
          style={{ backgroundColor: COLORS.text.primary }}
        >
          <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-3" style={{ color: COLORS.text.primary }}>
          회원가입 완료!
        </h1>
        <p className="text-base text-gray-500 text-center leading-relaxed">
          {isActor ? (
            <>
              배우담에 오신 것을 환영합니다!
              <br />
              다양한 캐스팅 기회를 만나보세요.
            </>
          ) : (
            <>
              배우담에 오신 것을 환영합니다!
              <br />
              완벽한 배우를 찾아보세요.
            </>
          )}
        </p>
      </main>
      <div className="p-4 w-full">
        <Button
          onClick={handleStart}
          className="w-full h-14 text-base font-semibold rounded-xl hover:bg-gray-800 text-white"
          style={{ backgroundColor: COLORS.text.primary }}
        >
          시작하기
        </Button>
      </div>
    </PageLayout>
  );
}

export default function SignupCompletePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex justify-center items-center">
          <div className="text-gray-500">로딩 중...</div>
        </div>
      }
    >
      <CompleteContent />
    </Suspense>
  );
}
