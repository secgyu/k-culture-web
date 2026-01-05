"use client";

export function AIMatchingSlide() {
  return (
    <div className="bg-luxury-secondary rounded-2xl overflow-hidden shadow-2xl p-8 max-w-3xl mx-auto">
      <h3 className="text-heading-xl text-white text-center mb-2">AI 매칭 기술을 통해</h3>
      <p className="text-body-lg text-ivory text-center mb-8">시놉시스와 캐릭터 정보로 배우를 찾아보세요.</p>

      <div className="bg-luxury-tertiary rounded-xl p-4 mb-4">
        <p className="text-muted-gray text-body-sm">시놉시스를 입력해 주세요. (500자 이내)</p>
      </div>
      <p className="text-right text-muted-gray text-caption mb-4">0/500</p>

      <div className="bg-luxury-tertiary rounded-xl px-4 py-3 mb-4">
        <p className="text-muted-gray text-body-sm">캐릭터 정보를 입력해 주세요. (100자 이내)</p>
      </div>
      <p className="text-right text-muted-gray text-caption mb-6">0/100</p>

      <button className="w-full py-4 btn-gold text-luxury-black font-semibold rounded-xl mb-3 transition-all duration-200 hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50">
        AI 추천 찾기
      </button>
      <button className="w-full py-4 border border-gold/30 text-ivory font-semibold rounded-xl transition-colors duration-200 hover:bg-gold/10 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50">
        필터를 통해 찾기
      </button>
    </div>
  );
}
