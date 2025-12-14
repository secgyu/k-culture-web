"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

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
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="relative w-full max-w-lg bg-white min-h-screen flex flex-col border-x border-gray-200">
        {/* Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-5">
          {/* Success Icon */}
          <div className="w-24 h-24 rounded-full bg-[#191F28] flex items-center justify-center mb-8">
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-[#191F28] mb-3">회원가입 완료!</h1>

          {/* Description */}
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

        {/* Bottom Button */}
        <div className="p-4 w-full">
          <Button
            onClick={handleStart}
            className="w-full h-14 text-base font-semibold rounded-xl bg-[#191F28] hover:bg-gray-800 text-white"
          >
            시작하기
          </Button>
        </div>
      </div>
    </div>
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
