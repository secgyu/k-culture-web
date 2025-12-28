"use client";

import Image from "next/image";
import { DoDreamLogo, DoDreamInlineLogo } from "@/app/components";

export function FeatureLinkShareSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* 공유 아이콘 */}
        <div className="mb-8">
          <svg
            className="w-16 h-16 mx-auto text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
        </div>

        {/* 복사 알림 카드 */}
        <div className="inline-block bg-gray-100 rounded-xl px-8 py-4 mb-8 relative">
          {/* 말풍선 꼬리 */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-100 rotate-45" />
          <p className="text-gray-600">프로필 주소를 복사했습니다.</p>
        </div>

        {/* 설명 텍스트 */}
        <p className="text-xl md:text-2xl text-gray-600 mb-32">
          링크 공유를 통해 쉽게 <span className="font-bold text-gray-900">프로필을 전송</span>해 보세요!
        </p>

        {/* 구분 */}
        <div className="border-t border-gray-200 my-16" />

        {/* 생각하는 이모지 */}
        <div className="text-6xl mb-8">🤔</div>

        {/* FAQ 제목 */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-24">
          &quot;왜 프로필을 새로 만들어주나요?&quot;
        </h2>

        {/* 기존 프로필 문제점 */}
        <p className="text-gray-500 text-lg mb-2">낮은 가독성과</p>
        <p className="text-gray-500 text-lg mb-8">제각각이던 사진</p>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
          중요한 정보를 놓치기 쉬운
          <br />
          기존 프로필들
        </h3>

        {/* 기존 프로필 이미지 예시 */}
        <div className="flex justify-center gap-4 mb-24">
          {/* 왼쪽: 여성 프로필 */}
          <div className="w-72 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <div className="flex">
              <div className="w-1/2 aspect-[3/4] relative bg-gray-300">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop"
                  alt="기존 프로필"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="w-1/2 p-3 text-left">
                <p className="text-xs text-gray-500 mb-2">배우 프로필</p>
                <p className="text-[8px] text-gray-400 leading-relaxed">
                  배우
                  <br />
                  2023 드라마 제목 - 역할
                  <br />
                  2022 영화 제목 - 역할
                  <br />
                  2021 드라마 제목 - 역할
                  <br />
                  <br />
                  수상이력
                  <br />
                  2023 신인상 수상
                  <br />
                  2022 여우조연상
                  <br />
                  <br />
                  학력
                  <br />
                  ○○대학교 연극영화과
                </p>
              </div>
            </div>
          </div>

          {/* 오른쪽: 남성 프로필 */}
          <div className="w-72 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[4/3] relative bg-gray-800">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                alt="기존 프로필"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute top-2 right-2 text-white text-xs">
                <p>Name</p>
                <p className="text-[8px] text-gray-400">Profile</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1 p-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] relative bg-gray-700">
                  <Image
                    src={`https://images.unsplash.com/photo-150700321116${i}-0a1dd7228f2d?w=100&h=150&fit=crop`}
                    alt={`사진 ${i}`}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="w-px h-24 bg-gold mx-auto mb-24" />

        {/* 두드림 프로필 비교 */}
        <div className="flex justify-center gap-6 mb-16">
          {/* 왼쪽: PDF 프로필 */}
          <div className="w-80 bg-luxury-secondary rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-luxury-tertiary px-4 py-3 text-center">
              <p className="text-white text-sm font-medium">이하나 프로필 PDF</p>
              <button className="mt-2 px-4 py-1 bg-luxury-tertiary text-ivory text-xs rounded">PDF 다운로드</button>
            </div>
            <div className="flex">
              <div className="w-2/5 aspect-[3/4] relative">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop"
                  alt="프로필"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-3 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-sm font-bold text-gray-900">이하나</h4>
                  <span className="px-1.5 py-0.5 bg-gold text-luxury-black font-medium text-[8px] rounded">여자</span>
                </div>
                <p className="text-[8px] text-gray-500 mb-3">Lee Hana</p>
                <p className="text-[7px] text-gray-600 leading-relaxed mb-3">
                  안녕하세요~! 꿈꾸는 배우 이하나입니다. 따뜻한 미소와 자연스러운 연기로 사람들의 마음을 움직이고 싶은
                  신인 배우입니다.
                </p>
                <div className="grid grid-cols-3 gap-1 mb-2">
                  <div className="text-center p-1 bg-gray-50 rounded">
                    <p className="text-[6px] text-gray-400">생년월일</p>
                    <p className="text-[7px] text-gray-700">2001-05-14</p>
                  </div>
                  <div className="text-center p-1 bg-gray-50 rounded">
                    <p className="text-[6px] text-gray-400">소속사</p>
                    <p className="text-[7px] text-gray-700">핑크프로젝트</p>
                  </div>
                  <div className="text-center p-1 bg-gray-50 rounded">
                    <p className="text-[6px] text-gray-400">학력</p>
                    <p className="text-[7px] text-gray-700">한국대학교</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1 mb-2">
                  <div className="text-center p-1 bg-gray-50 rounded">
                    <p className="text-[6px] text-gray-400">키</p>
                    <p className="text-[7px] text-gray-700">167</p>
                  </div>
                  <div className="text-center p-1 bg-gray-50 rounded">
                    <p className="text-[6px] text-gray-400">몸무게</p>
                    <p className="text-[7px] text-gray-700">48</p>
                  </div>
                  <div className="text-center p-1 bg-gray-50 rounded">
                    <p className="text-[6px] text-gray-400">발사이즈</p>
                    <p className="text-[7px] text-gray-700">235</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {["고양이상", "도도한", "청순한", "귀여운"].map((tag) => (
                    <span key={tag} className="px-1 py-0.5 bg-gray-100 text-gray-600 text-[6px] rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 웹 프로필 */}
          <div className="w-96 bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <div className="flex">
              <div className="w-2/5 aspect-[3/4] relative">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop"
                  alt="프로필"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-gray-900">이하나</h4>
                      <span className="px-2 py-0.5 bg-gold text-luxury-black font-medium text-[8px] rounded">여자</span>
                    </div>
                    <p className="text-xs text-gray-500">Lee Hana</p>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded grid grid-cols-3 gap-0.5 p-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className={`${i % 2 === 0 ? "bg-gray-800" : "bg-white"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-[8px] text-gray-600 leading-relaxed mb-3">
                  안녕하세요~! 꿈꾸는 배우 이하나입니다. 따뜻한 미소와 자연스러운 연기로...
                </p>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-[7px] text-gray-400">생년월일</p>
                    <p className="text-[9px] text-gray-700">2001-05-14</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-[7px] text-gray-400">소속사</p>
                    <p className="text-[9px] text-gray-700">핑크프로젝트</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-[7px] text-gray-400">학력</p>
                    <p className="text-[9px] text-gray-700">한국대학교</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-[7px] text-gray-400">키</p>
                    <p className="text-[9px] text-gray-700">167</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-[7px] text-gray-400">몸무게</p>
                    <p className="text-[9px] text-gray-700">48</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-[7px] text-gray-400">발사이즈</p>
                    <p className="text-[9px] text-gray-700">235</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-[7px] text-gray-400 shrink-0">키워드</span>
                  <div className="flex flex-wrap gap-1">
                    {["고양이상", "도도한", "청순한", "귀여운", "사랑스러운", "순수한"].map((tag) => (
                      <span key={tag} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-[7px] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[7px] text-gray-400 shrink-0">대표작품</span>
                  <p className="text-[8px] text-gray-600">단편영화,&lt;우리 사이&gt;, 지수역(주연)</p>
                </div>
                <div className="flex justify-end mt-2">
                  <DoDreamLogo size="xs" className="text-gray-300" doorFillColor="fill-gray-100" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 가독성 UP */}
        <p className="text-gray-600 text-lg mb-2">필요한 정보만 깔끔하게 담아</p>
        <h3 className="text-3xl font-bold text-gray-900 mb-24">
          가독성 <span className="text-gold">UP!</span>
        </h3>

        {/* 키워드 박스 */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-16 max-w-lg mx-auto border-b-4 border-gold">
          <div className="flex items-start gap-4">
            <span className="text-gray-500 text-sm shrink-0">키워드</span>
            <div className="flex flex-wrap gap-2">
              {[
                "고양이상",
                "도도한",
                "청순한",
                "귀여운",
                "사랑스러운",
                "순수한",
                "우아한",
                "밝은한",
                "부드러운",
                "상큼한",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 특색있는 키워드 */}
        <p className="text-gray-600 text-lg mb-2">내가 직접 택한</p>
        <h3 className="text-3xl font-bold text-gray-900 mb-16">
          특색있는 <span className="text-gold">키워드</span>
        </h3>

        {/* 출연 사진 그리드 */}
        <div className="bg-white rounded-2xl shadow-xl p-4 max-w-lg mx-auto mb-8">
          <div className="flex justify-end mb-2">
            <span className="text-gray-500 text-xs">출연 사진 🎬</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-149479010837${i}-be9c29b29330?w=300&h=200&fit=crop`}
                  alt={`출연 사진 ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 스틸컷 */}
        <p className="text-gray-600 text-lg mb-2">프로필 사진과 함께</p>
        <h3 className="text-3xl font-bold text-gray-900 mb-24">
          내가 출연한 <span className="text-gold">스틸컷</span>까지!
        </h3>

        {/* PDF 아이콘 */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
            <span className="text-2xl">📄</span>
          </div>
        </div>

        {/* PDF 출력 */}
        <h3 className="text-2xl font-bold text-gray-900 mb-24">
          PDF 버튼을 눌러서 <span className="text-gold">출력</span>해보세요!
        </h3>

        {/* DoDream과 함께 */}
        <p className="text-gray-600 text-lg mb-2">보다 효과적인 프로필 제작</p>
        <h3 className="text-3xl font-bold text-gray-900 mb-16">
          <DoDreamInlineLogo
            doorFillColor="fill-gold/10"
            doorHandleColor="fill-gold"
            accentColor="text-gold"
          />
          과 바로 함께해 보세요!
        </h3>

        {/* 3개 카드 */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 text-gold">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-3">개인정보 보호</h4>
            <p className="text-gold text-sm leading-relaxed">
              개인정보 노출 없이
              <br />
              캐스팅 가능
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 text-gold">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-3">시간 절약</h4>
            <p className="text-gold text-sm leading-relaxed">
              프로필 등록 시,
              <br />
              바로 PDF 변환 가능
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 text-gold">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-3">언제나 누구든지</h4>
            <p className="text-gold text-sm leading-relaxed">
              다른 제한 없이
              <br />
              프로필 등록 가능
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

