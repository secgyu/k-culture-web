"use client";

import { MarketingHeader } from "@/app/components/MarketingHeader";
import { Input, Textarea, Button } from "@/components/ui";

export function AIMatchingContent() {
  return (
    <div className="min-h-screen bg-luxury-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl" />
      </div>

      <MarketingHeader currentPath="/ai-matching" />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 py-12 opacity-30 blur-[2px]">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold via-champagne to-gold bg-clip-text text-transparent">
              AI 매칭 기술을 통해
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            시놉시스와 캐릭터 정보로 배우를 찾아보세요.
          </h2>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <div className="bg-luxury-black/50 backdrop-blur-sm rounded-2xl p-8 mb-6 border border-border">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
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

            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="캐릭터 이름" disabled className="bg-luxury-secondary border-border text-muted-gray" />
              <Input
                placeholder="캐릭터에 대해 설명해주세요"
                disabled
                className="bg-luxury-secondary border-border text-muted-gray"
              />
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-luxury-black/50 border border-border rounded-lg px-4 py-3">
              <p className="text-muted-foreground text-sm">원하는 캐릭터를 설명해주세요. 시놉시스와 캐릭터...</p>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              disabled
              className="w-full py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 cursor-not-allowed"
            >
              AI 추천 받기
            </Button>
            <Button
              disabled
              variant="secondary"
              className="w-full py-4 bg-luxury-secondary text-warm-gray border-border"
            >
              필터로 직접 찾기
            </Button>
          </div>
        </div>
      </main>

      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <p className="text-white text-2xl md:text-3xl font-bold">추후 업데이트될 예정입니다.</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gold/20 to-transparent" />
    </div>
  );
}
