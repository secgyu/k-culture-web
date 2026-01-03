"use client";

import Image from "next/image";
import { DoDreamInlineLogo } from "@/app/components";

export function DirectorSection() {
  return (
    <section>
      <div className="bg-gold py-8">
        <div className="w-16 h-16 bg-luxury-black mx-auto" />
      </div>

      <div className="bg-luxury-black section-spacing-md">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-7 py-2.5 bg-gold rounded-full title-margin-lg">
            <span className="text-luxury-black font-semibold text-body-sm">감독&PD</span>
          </div>

          <h2 className="font-display text-display-md lg:text-display-lg text-ivory title-margin-lg">
            &quot;작품 구인도 이렇게 쉽게 하면 좋겠어요!&quot;
          </h2>

          <div className="w-px h-20 bg-border mx-auto" />
        </div>
      </div>

      <div className="bg-luxury-secondary section-spacing-md">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-12 items-start">
            <div className="w-80 bg-luxury-tertiary rounded-xl p-4 shadow-xl border border-border">
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-muted-gray rounded-full" />
                  <div>
                    <p className="text-xs font-medium text-ivory">구인글</p>
                    <p className="text-[8px] text-muted-gray">단편/졸작(졸업작품) 모집합니다...</p>
                  </div>
                </div>
                {[
                  { label: "1. 제작", value: "OOO" },
                  { label: "2. 작품명", value: "미정" },
                  { label: "3. 촬영일", value: "2000년 00월 00일 (변경될 수 있음)" },
                  { label: "4. 장소", value: "미정" },
                  { label: "5. 페이", value: "없음 (품앗이 촬영합니다)" },
                  { label: "6. 페이조건", value: "무조건 모집합니다" },
                  { label: "7. 모집성별", value: "N" },
                  { label: "8. 스텝명", value: "스텝 공고입니다" },
                  { label: "9. 모집연령", value: "40대 성인남녀 ~ 시니어(50세)" },
                  { label: "10. 모집내용", value: "여자 1명, 남자에게 다..." },
                  { label: "11. 지원방법", value: "작품지원하기 / 프로필전송" },
                  { label: "12. 마감일자", value: "2000년 00월 00일" },
                ].map((item, i) => (
                  <div key={i} className="flex text-[7px]">
                    <span className="text-muted-gray w-16">{item.label}</span>
                    <span className="text-warm-gray">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 text-left">
              <p className="text-gold text-heading-lg mb-2">낮은 신뢰성과 전달력</p>
              <p className="text-gold text-heading-lg mb-2">쉽게 노출되는 개인정보</p>
              <p className="text-gold text-heading-lg mb-2">한 눈에 보기 힘든 지원자</p>
              <p className="text-gold text-heading-lg mb-8">개별로 답신해야하는 번거로움</p>

              <div className="flex flex-col gap-2 mb-8">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-luxury-tertiary" />
                ))}
              </div>

              <p className="text-white text-body-lg mb-2">별거 아닌듯 하여도</p>
              <p className="text-gold text-heading-lg mb-8">지속적으로 느끼는 불편함</p>

              <h3 className="text-white text-display-sm">
                <DoDreamInlineLogo />
                으로 쉽게 해결!
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-luxury-black section-spacing-md">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-display-sm md:text-display-md text-gold mb-16">
            작품구인도 <DoDreamInlineLogo className="text-white" />
            에서 한 번에!
          </h2>

          <div className="flex gap-4 justify-center mb-8">
            <div className="w-96 bg-luxury-secondary rounded-xl p-4">
              <div className="text-left">
                <p className="text-warm-gray text-body-sm mb-4">← 구인글 작성하기</p>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="text-muted-gray text-caption">구분</span>
                    <span className="px-2 py-1 bg-luxury-tertiary text-ivory text-caption rounded">구분선택</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-muted-gray text-caption">개런티</span>
                    <span className="px-2 py-1 bg-luxury-tertiary text-ivory text-caption rounded">0</span>
                    <span className="text-muted-gray text-caption">원</span>
                    <span className="px-2 py-1 bg-luxury-tertiary text-ivory text-caption rounded">품앗이</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 bg-luxury-secondary rounded-xl p-4">
              <div className="text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-gray text-caption">작품제목</span>
                  <span className="text-warm-gray text-caption">작성중</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-gray text-caption">담당자명</span>
                  <span className="text-warm-gray text-caption">담당자이름</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-white text-body-lg mb-2">
            배우&모델에게 필요한 내용만 <span className="text-gold-light font-bold">깔끔하게!</span>
          </p>
          <p className="text-white text-body-lg">
            핵심 정보로 <span className="text-gold-light font-bold">전달력 UP!</span>
          </p>
        </div>
      </div>

      <div className="bg-luxury-black section-spacing-md">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-luxury-secondary rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-gold text-white text-caption rounded">모집중</span>
                <span className="text-white text-body-sm">대학 졸작 &lt;봉선경&gt; 여성역 배우분 모십니다!</span>
              </div>
              <div className="flex items-center gap-2 text-warm-gray text-caption">
                <span>마감일: 2024-09-30 [D-6]</span>
                <span className="px-2 py-1 bg-luxury-tertiary rounded">구인글 수정</span>
              </div>
            </div>
            <div className="bg-luxury-tertiary rounded-lg p-4">
              <p className="text-warm-gray text-body-sm mb-4">📝 지원자에게 전달할 메시지</p>
              <div className="text-left">
                <p className="text-white text-body-sm mb-4">🎬 지원자 확인 (1명 지원) ↻</p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-luxury-tertiary text-ivory text-caption rounded">카드형</span>
                  <span className="px-3 py-1 bg-luxury-secondary text-warm-gray text-caption rounded">리스트형</span>
                  <span className="px-3 py-1 bg-green-600 text-white text-caption rounded">합격 - 0명</span>
                  <span className="px-3 py-1 bg-blue-600 text-white text-caption rounded">미팅요청 - 0명</span>
                  <span className="px-3 py-1 bg-red-600 text-white text-caption rounded">불합격 - 0명</span>
                  <span className="px-3 py-1 bg-luxury-tertiary text-white text-caption rounded">대기 - 1명</span>
                </div>
                <div className="w-32 bg-luxury-tertiary rounded-lg overflow-hidden">
                  <div className="aspect-3/4 relative bg-champagne">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=300&fit=crop"
                      alt="지원자"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-white text-caption font-medium">이하나</p>
                    <p className="text-warm-gray text-[8px]">24세 / 167 cm / 48 kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-white text-body-lg">
            <span className="text-gold-light font-bold">한 눈에 확인 가능한</span> 지원자 리스트
          </p>
        </div>
      </div>

      <div className="bg-luxury-black section-spacing-md">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-luxury-secondary rounded-xl p-6 mb-8">
            <p className="text-white text-left mb-4">← 이하나님의 프로필 대시보드</p>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-luxury-tertiary rounded-lg p-4 text-center">
                <p className="text-warm-gray text-caption mb-2">나의 좋아요 수</p>
                <p className="text-red-400 text-body-lg">♡</p>
                <p className="text-white font-bold">0</p>
              </div>
              <div className="bg-luxury-tertiary rounded-lg p-4 text-center">
                <p className="text-warm-gray text-caption mb-2">누적 프로필 방문자</p>
                <p className="text-blue-400 text-body-lg">📊</p>
                <p className="text-white font-bold">16</p>
              </div>
              <div className="bg-luxury-tertiary rounded-lg p-4 text-center">
                <p className="text-warm-gray text-caption mb-2">누적 지원 내역</p>
                <p className="text-green-400 text-body-lg">✓</p>
                <p className="text-white font-bold">2</p>
              </div>
              <div className="bg-luxury-tertiary rounded-lg p-4 text-center">
                <p className="text-warm-gray text-caption mb-2">누적 섭외 요청</p>
                <p className="text-gold text-body-lg">💡</p>
                <p className="text-white font-bold">0</p>
              </div>
            </div>
            <div className="space-y-2 text-left">
              <div className="flex items-center justify-between bg-gold/20 rounded-lg px-4 py-2">
                <span className="text-gold-light text-body-sm">🚀 상위노출</span>
                <span className="px-2 py-1 bg-green-600 text-white text-caption rounded">활성화전</span>
              </div>
              <div className="flex items-center justify-between bg-luxury-tertiary rounded-lg px-4 py-2">
                <span className="text-ivory text-body-sm">🎬 섭외요청 리스트</span>
              </div>
              <div className="bg-luxury-tertiary rounded-lg px-4 py-2">
                <p className="text-ivory text-body-sm mb-2">📋 지원내역</p>
                <table className="w-full text-caption text-left">
                  <thead>
                    <tr className="text-muted-gray">
                      <th className="py-1">날짜</th>
                      <th>작품명</th>
                      <th>공고 페이지</th>
                      <th>상태</th>
                      <th>메시지</th>
                    </tr>
                  </thead>
                  <tbody className="text-ivory">
                    <tr>
                      <td className="py-1">2024. 9. 24.</td>
                      <td>봉선경</td>
                      <td className="text-blue-400">공고 보기</td>
                      <td>
                        <span className="px-2 py-0.5 bg-luxury-tertiary rounded">대기</span>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="py-1">2024. 9. 22.</td>
                      <td>12</td>
                      <td className="text-blue-400">공고 보기</td>
                      <td>
                        <span className="px-2 py-0.5 bg-blue-600 rounded">미팅 요청</span>
                      </td>
                      <td>💬</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="text-white text-body-lg">
            배우&모델 <span className="text-gold-light font-bold">지원 결과</span>공유까지!
          </p>
        </div>
      </div>

      <div className="bg-luxury-black section-spacing-md">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-display-sm md:text-display-md text-white mb-4">작품 구인에서 느낀 불편함을</h2>
          <h2 className="text-display-sm md:text-display-md text-white">이젠 해소할 타이밍!</h2>
        </div>
      </div>

      <div className="bg-luxury-black section-spacing-md">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-heading-lg mb-2">THE 효율적인 플랫폼</p>
          <h2 className="text-display-sm md:text-display-md text-white mb-12">
            <DoDreamInlineLogo />과 지금 바로 함께해 보세요!
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-luxury-secondary rounded-2xl p-8 text-center border border-gold/20">
              <div className="w-12 h-12 mx-auto mb-4 text-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <h4 className="text-heading-md text-ivory mb-3">개인정보 보호</h4>
              <p className="text-muted-gray text-body-sm leading-relaxed">
                개인정보 노출 없이
                <br />
                작품 구인 가능
              </p>
            </div>
            <div className="bg-luxury-secondary rounded-2xl p-8 text-center border border-gold/20">
              <div className="w-12 h-12 mx-auto mb-4 text-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-heading-md text-ivory mb-3">시간 절약</h4>
              <p className="text-muted-gray text-body-sm leading-relaxed">
                한 곳에서 지원자 확인과
                <br />
                지원 결과 공유까지
                <br />
                모두 가능
              </p>
            </div>
            <div className="bg-luxury-secondary rounded-2xl p-8 text-center border border-gold/20">
              <div className="w-12 h-12 mx-auto mb-4 text-gold">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h4 className="text-heading-md text-ivory mb-3">쉽고 빠른 배우 찾기</h4>
              <p className="text-muted-gray text-body-sm leading-relaxed">
                필요한 조건만
                <br />
                간결하게 입력 후,
                <br />
                배우 찾기 가능
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
