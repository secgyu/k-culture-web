"use client";

import {
  CATEGORY_FILTER_OPTIONS,
  GENDER_FILTER_OPTIONS,
  LICENSE_FILTER_OPTIONS,
  WORK_EXCHANGE_FILTER_OPTIONS,
} from "@/lib/constants/options";

export function CastingDirectorSection() {
  return (
    <section className="from-ivory via-gold to-gold-dark bg-gradient-to-b pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="bg-luxury-black mb-8 inline-block rounded-full px-6 py-2">
          <span className="text-gold text-body-sm font-medium">캐스팅 담당자</span>
        </div>

        <h2 className="font-display text-display-md lg:text-display-lg text-luxury-black mb-12">
          &quot;작품에 알맞는 배우 찾기가 너무 어려워요!&quot;
        </h2>

        <div className="bg-luxury-black/30 mx-auto mb-12 h-24 w-px" />

        <p className="text-body-lg text-luxury-black/80 mb-2">빠르면서 쉽게</p>
        <h3 className="text-heading-xl md:text-display-sm text-luxury-black mb-16">
          작품에 맞는 배우를 찾고 싶으신가요?
        </h3>

        <p className="text-body-lg text-luxury-black mb-8">
          원하는 조건만 <span className="font-bold">입력</span>해 주세요!
        </p>

        <div className="bg-luxury-secondary mx-auto mb-8 max-w-4xl rounded-2xl p-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-body-sm w-20">구분</span>
                <div className="flex gap-2">
                  {CATEGORY_FILTER_OPTIONS.map((opt) => (
                    <span key={opt} className="bg-luxury-tertiary text-ivory text-caption rounded px-3 py-1.5">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-body-sm w-20">성별</span>
                <div className="flex gap-2">
                  {GENDER_FILTER_OPTIONS.map((opt) => (
                    <span key={opt} className="bg-luxury-tertiary text-ivory text-caption rounded px-3 py-1.5">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-body-sm w-20">나이</span>
                <div className="flex items-center gap-2">
                  <span className="bg-luxury-tertiary text-muted-gray text-caption rounded px-4 py-1.5">최소</span>
                  <span className="text-muted-gray">~</span>
                  <span className="bg-luxury-tertiary text-muted-gray text-caption rounded px-4 py-1.5">최대</span>
                  <span className="text-warm-gray text-caption">세</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-body-sm w-20">키</span>
                <div className="flex items-center gap-2">
                  <span className="bg-luxury-tertiary text-muted-gray text-caption rounded px-4 py-1.5">최소</span>
                  <span className="text-muted-gray">~</span>
                  <span className="bg-luxury-tertiary text-muted-gray text-caption rounded px-4 py-1.5">최대</span>
                  <span className="text-warm-gray text-caption">Cm</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-body-sm w-20">몸무게</span>
                <div className="flex items-center gap-2">
                  <span className="bg-luxury-tertiary text-muted-gray text-caption rounded px-4 py-1.5">최소</span>
                  <span className="text-muted-gray">~</span>
                  <span className="bg-luxury-tertiary text-muted-gray text-caption rounded px-4 py-1.5">최대</span>
                  <span className="text-warm-gray text-caption">Kg</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-body-sm w-20">운전면허</span>
                <div className="flex gap-2">
                  {LICENSE_FILTER_OPTIONS.map((opt) => (
                    <span key={opt} className="bg-luxury-tertiary text-ivory text-caption rounded px-3 py-1.5">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-body-sm w-20">품앗이</span>
                <div className="flex gap-2">
                  {WORK_EXCHANGE_FILTER_OPTIONS.map((opt) => (
                    <span key={opt} className="bg-luxury-tertiary text-ivory text-caption rounded px-3 py-1.5">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-body-sm w-20">영화예산</span>
                <div className="flex items-center gap-2">
                  <span className="text-warm-gray text-caption">최대</span>
                  <span className="bg-luxury-tertiary text-ivory text-caption rounded px-6 py-1.5">100,000</span>
                  <span className="text-warm-gray text-caption">원</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-body-sm w-20">광고예산</span>
                <div className="flex items-center gap-2">
                  <span className="text-warm-gray text-caption">최대</span>
                  <span className="bg-luxury-tertiary text-ivory text-caption rounded px-6 py-1.5">100,000</span>
                  <span className="text-warm-gray text-caption">원</span>
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="이름 또는 키워드로 추가하기 (Enter)"
                  className="bg-luxury-tertiary border-gold/30 text-warm-gray text-body-sm placeholder-muted-foreground w-full rounded-lg border px-4 py-2"
                  disabled
                />
              </div>
            </div>
          </div>
          <p className="text-muted-gray text-caption mt-4 text-center">필터 초기화</p>
        </div>

        <div className="my-12 flex flex-col items-center gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="bg-luxury-black/30 h-2 w-2 rounded-full" />
          ))}
        </div>

        <h3 className="text-display-sm mb-4 text-white">원하는 배우를 찾았다면?</h3>
        <p className="text-body-lg text-champagne mb-8">배우 프로필 하단 섭외 요청서 작성후</p>

        <div className="from-luxury-secondary/80 to-luxury-black/80 mx-auto mb-8 max-w-2xl rounded-2xl bg-gradient-to-br p-8 backdrop-blur">
          <h4 className="text-heading-md mb-2 text-white">지금 보고 계신</h4>
          <h4 className="text-heading-md mb-6 text-white">이하나님을 섭외하고 싶으신가요?</h4>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="소속을 입력해 주세요."
              className="bg-luxury-tertiary/50 border-gold/20 text-ivory text-body-sm placeholder-muted-foreground w-full rounded-lg border px-4 py-3"
              disabled
            />
            <input
              type="text"
              placeholder="담당자님 성함을 입력해 주세요."
              className="bg-luxury-tertiary/50 border-gold/20 text-ivory text-body-sm placeholder-muted-foreground w-full rounded-lg border px-4 py-3"
              disabled
            />
            <textarea
              placeholder="전달하고 싶은 메시지를 입력해 주세요.&#10;작품제목과 줄인날짜 등 구체적으로 작성 부탁드립니다."
              className="bg-luxury-tertiary/50 border-gold/20 text-ivory text-body-sm placeholder-muted-foreground h-32 w-full resize-none rounded-lg border px-4 py-3"
              disabled
            />
            <input
              type="text"
              placeholder="답장을 받으실 연락처(전화번호 또는 이메일)를 입력해 주세요."
              className="bg-luxury-tertiary/50 border-gold/20 text-ivory text-body-sm placeholder-muted-foreground w-full rounded-lg border px-4 py-3"
              disabled
            />
          </div>

          <button className="bg-gold/80 mt-6 rounded-lg px-8 py-3 text-white">섭외 요청하기</button>

          <p className="text-muted-gray text-caption mt-4">
            섭외 요청 시, 섭외요청 확인 메일(또는 문자) 발송 후 48시간 이내에 캐스팅 가능 여부를 확인하실 수 있습니다.
          </p>
          <p className="text-muted-gray text-caption">
            작품 제작을 위한 연락이 아닐 시 서비스 이용에 제한될 수 있습니다.
          </p>
        </div>

        <div className="relative mb-4 inline-block">
          <div className="rounded-2xl border-2 border-dashed border-white px-12 py-4">
            <span className="text-heading-xl text-white">섭외 요청하기</span>
          </div>
          <div className="absolute -right-4 -bottom-2 text-4xl text-white">👆</div>
        </div>
        <p className="text-body-lg text-white">섭외 요청하기 클릭!</p>
      </div>
    </section>
  );
}
