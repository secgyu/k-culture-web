"use client";

export function CastingDirectorSection() {
  return (
    <section className="bg-gradient-to-b from-ivory via-gold to-gold-dark pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* 배지 */}
        <div className="inline-block px-6 py-2 bg-luxury-black rounded-full mb-8">
          <span className="text-gold font-medium text-sm">캐스팅 담당자</span>
        </div>

        {/* 메인 타이틀 */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-black mb-12">
          &quot;작품에 알맞는 배우 찾기가 너무 어려워요!&quot;
        </h2>

        {/* 구분선 */}
        <div className="w-px h-24 bg-luxury-black/30 mx-auto mb-12" />

        {/* 서브 타이틀 */}
        <p className="text-xl text-luxury-black/80 mb-2">빠르면서 쉽게</p>
        <h3 className="text-2xl md:text-3xl font-bold text-luxury-black mb-16">작품에 맞는 배우를 찾고 싶으신가요?</h3>

        {/* 필터 UI */}
        <p className="text-xl text-luxury-black mb-8">
          원하는 조건만 <span className="font-bold">입력</span>해 주세요!
        </p>

        <div className="bg-luxury-secondary rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-2 gap-6">
            {/* 왼쪽 필터 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-sm w-14">구분</span>
                <div className="flex gap-2">
                  {["무관", "배우", "모델"].map((opt) => (
                    <span key={opt} className="px-3 py-1.5 bg-luxury-tertiary text-ivory text-xs rounded">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-sm w-14">성별</span>
                <div className="flex gap-2">
                  {["무관", "남자", "여자"].map((opt) => (
                    <span key={opt} className="px-3 py-1.5 bg-luxury-tertiary text-ivory text-xs rounded">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-sm w-14">나이</span>
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-1.5 bg-luxury-tertiary text-muted-gray text-xs rounded">최소</span>
                  <span className="text-muted-gray">~</span>
                  <span className="px-4 py-1.5 bg-luxury-tertiary text-muted-gray text-xs rounded">최대</span>
                  <span className="text-warm-gray text-xs">세</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-sm w-14">키</span>
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-1.5 bg-luxury-tertiary text-muted-gray text-xs rounded">최소</span>
                  <span className="text-muted-gray">~</span>
                  <span className="px-4 py-1.5 bg-luxury-tertiary text-muted-gray text-xs rounded">최대</span>
                  <span className="text-warm-gray text-xs">Cm</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-sm w-14">몸무게</span>
                <div className="flex gap-2 items-center">
                  <span className="px-4 py-1.5 bg-luxury-tertiary text-muted-gray text-xs rounded">최소</span>
                  <span className="text-muted-gray">~</span>
                  <span className="px-4 py-1.5 bg-luxury-tertiary text-muted-gray text-xs rounded">최대</span>
                  <span className="text-warm-gray text-xs">Kg</span>
                </div>
              </div>
            </div>

            {/* 오른쪽 필터 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-sm w-14">운전면허</span>
                <div className="flex gap-2">
                  {["무관", "1종", "2종"].map((opt) => (
                    <span key={opt} className="px-3 py-1.5 bg-luxury-tertiary text-ivory text-xs rounded">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-sm w-14">품앗이</span>
                <div className="flex gap-2">
                  {["무관", "가능", "불가능"].map((opt) => (
                    <span key={opt} className="px-3 py-1.5 bg-luxury-tertiary text-ivory text-xs rounded">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-sm w-14">영화예산</span>
                <div className="flex gap-2 items-center">
                  <span className="text-warm-gray text-xs">최대</span>
                  <span className="px-6 py-1.5 bg-luxury-tertiary text-ivory text-xs rounded">100,000</span>
                  <span className="text-warm-gray text-xs">원</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-warm-gray text-sm w-14">광고예산</span>
                <div className="flex gap-2 items-center">
                  <span className="text-warm-gray text-xs">최대</span>
                  <span className="px-6 py-1.5 bg-luxury-tertiary text-ivory text-xs rounded">100,000</span>
                  <span className="text-warm-gray text-xs">원</span>
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="이름 또는 키워드로 추가하기 (Enter)"
                  className="w-full bg-luxury-tertiary border border-gold/30 rounded-lg px-4 py-2 text-warm-gray text-sm placeholder-zinc-500"
                  disabled
                />
              </div>
            </div>
          </div>
          <p className="text-muted-gray text-xs text-center mt-4">필터 초기화</p>
        </div>

        {/* 세로 점 인디케이터 */}
        <div className="flex flex-col items-center gap-2 my-12">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-luxury-black/30" />
          ))}
        </div>

        {/* 섭외 요청 */}
        <h3 className="text-3xl font-bold text-white mb-4">원하는 배우를 찾았다면?</h3>
        <p className="text-xl text-champagne mb-8">배우 프로필 하단 섭외 요청서 작성후</p>

        {/* 섭외 요청 폼 */}
        <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 rounded-2xl p-8 max-w-2xl mx-auto mb-8 backdrop-blur">
          <h4 className="text-white text-lg font-medium mb-2">지금 보고 계신</h4>
          <h4 className="text-white text-lg font-medium mb-6">이하나님을 섭외하고 싶으신가요?</h4>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="소속을 입력해 주세요."
              className="w-full bg-luxury-tertiary/50 border border-gold/20 rounded-lg px-4 py-3 text-ivory text-sm placeholder-zinc-500"
              disabled
            />
            <input
              type="text"
              placeholder="담당자님 성함을 입력해 주세요."
              className="w-full bg-luxury-tertiary/50 border border-gold/20 rounded-lg px-4 py-3 text-ivory text-sm placeholder-zinc-500"
              disabled
            />
            <textarea
              placeholder="전달하고 싶은 메시지를 입력해 주세요.&#10;작품제목과 줄인날짜 등 구체적으로 작성 부탁드립니다."
              className="w-full bg-luxury-tertiary/50 border border-gold/20 rounded-lg px-4 py-3 text-ivory text-sm placeholder-zinc-500 h-32 resize-none"
              disabled
            />
            <input
              type="text"
              placeholder="답장을 받으실 연락처(전화번호 또는 이메일)를 입력해 주세요."
              className="w-full bg-luxury-tertiary/50 border border-gold/20 rounded-lg px-4 py-3 text-ivory text-sm placeholder-zinc-500"
              disabled
            />
          </div>

          <button className="mt-6 px-8 py-3 bg-gold/80 text-white rounded-lg">섭외 요청하기</button>

          <p className="text-muted-gray text-xs mt-4">
            섭외 요청 시, 섭외요청 확인 메일(또는 문자) 발송 후 48시간 이내에 캐스팅 가능 여부를 확인하실 수 있습니다.
          </p>
          <p className="text-muted-gray text-xs">작품 제작을 위한 연락이 아닐 시 서비스 이용에 제한될 수 있습니다.</p>
        </div>

        {/* 섭외 요청하기 버튼 강조 */}
        <div className="relative inline-block mb-4">
          <div className="px-12 py-4 border-2 border-dashed border-white rounded-2xl">
            <span className="text-white text-2xl font-bold">섭외 요청하기</span>
          </div>
          <div className="absolute -bottom-2 -right-4 text-white text-4xl">👆</div>
        </div>
        <p className="text-white text-lg">섭외 요청하기 클릭!</p>
      </div>
    </section>
  );
}

