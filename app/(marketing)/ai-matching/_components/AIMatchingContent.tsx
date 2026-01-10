"use client";

import { Button, Input, Textarea } from "@/components/ui";

import { MarketingHeader } from "@/components/common";

export function AIMatchingContent() {
  return (
    <div className="bg-luxury-black relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="bg-gold/20 absolute top-0 left-1/4 h-96 w-96 rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-indigo-900/20 blur-3xl" />
      </div>

      <MarketingHeader currentPath="/ai-matching" />

      <main className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 py-12 opacity-30 blur-[2px]">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            <span className="from-gold via-champagne to-gold bg-gradient-to-r bg-clip-text text-transparent">
              AI 매칭 기술을 통해
            </span>
          </h1>
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            시놉시스와 캐릭터 정보로 배우를 찾아보세요.
          </h2>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <div className="bg-luxury-black/50 border-border mb-6 rounded-2xl border p-8 backdrop-blur-sm">
            <div className="mb-6 grid gap-4 md:grid-cols-3">
              <Input
                placeholder="작품 이름 입력"
                disabled
                className="bg-luxury-secondary border-border text-muted-gray"
              />
              <Input placeholder="장르 선택" disabled className="bg-luxury-secondary border-border text-muted-gray" />
              <Input
                placeholder="제작 형태 선택"
                disabled
                className="bg-luxury-secondary border-border text-muted-gray"
              />
            </div>

            <div className="mb-6">
              <Textarea
                placeholder="시놉시스를 입력해주세요..."
                disabled
                className="bg-luxury-secondary border-border text-muted-gray h-32 resize-none"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder="캐릭터 이름" disabled className="bg-luxury-secondary border-border text-muted-gray" />
              <Input
                placeholder="캐릭터에 대해 설명해주세요"
                disabled
                className="bg-luxury-secondary border-border text-muted-gray"
              />
            </div>
          </div>

          <div className="mb-8 space-y-4">
            <div className="bg-luxury-black/50 border-border rounded-lg border px-4 py-3">
              <p className="text-muted-gray text-sm">원하는 캐릭터를 설명해주세요. 시놉시스와 캐릭터...</p>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              disabled
              className="w-full cursor-not-allowed bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 py-4"
            >
              AI 추천 받기
            </Button>
            <Button
              disabled
              variant="secondary"
              className="bg-luxury-secondary text-warm-gray border-border w-full py-4"
            >
              필터로 직접 찾기
            </Button>
          </div>
        </div>
      </main>

      <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-white md:text-3xl">추후 업데이트될 예정입니다.</p>
        </div>
      </div>

      <div className="from-gold/20 absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />
    </div>
  );
}
