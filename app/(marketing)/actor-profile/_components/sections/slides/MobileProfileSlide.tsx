"use client";

import Image from "next/image";

export function MobileProfileSlide() {
  return (
    <div className="bg-gradient-to-br from-champagne to-ivory rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
      <div className="flex">
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gold-dark text-lg">←</span>
            <div className="flex items-center gap-3">
              <span className="text-gold text-sm">좋아요 0</span>
              <span className="text-gold">♡</span>
              <span className="text-gold">🔗</span>
              <span className="text-gold">📄</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-heading-xl text-gray-900">이하나</h2>
            <span className="px-2 py-0.5 bg-gold text-white text-caption rounded">배우&모델</span>
          </div>
          <p className="text-gray-500 text-body-sm mb-4">Lee Hana</p>

          <span className="inline-block px-3 py-1 bg-gold text-luxury-black text-xs rounded-full mb-4 font-medium">
            여자
          </span>

          <div className="space-y-2 text-body-sm text-gray-600 mb-4">
            <p>🏢 핑크프로젝트</p>
            <p>🎓 한국대학교 연기과</p>
          </div>
          <p className="text-body-sm text-gray-500 mb-4">단편영화,&lt;우리 사이&gt;, 지수역(주연)</p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-4">
              <span className="text-body-sm text-gray-600 w-24">24세 (2001)</span>
              <div className="flex-1 h-2 bg-champagne rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gold rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-body-sm text-gray-600 w-24">167 cm</span>
              <div className="flex-1 h-2 bg-champagne rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-gold rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-body-sm text-gray-600 w-24">48 kg</span>
              <div className="flex-1 h-2 bg-champagne rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-gold rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-body-sm text-gray-600 w-24">235 mm</span>
              <div className="flex-1 h-2 bg-champagne rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gold rounded-full" />
              </div>
            </div>
          </div>

          <p className="text-caption text-gray-600 leading-relaxed mb-4">
            안녕하세요~! 꿈꾸는 배우 이하나입니다. 따뜻한 미소와 자연스러운 연기로 사람들의 마음을 움직이고 싶은 신인
            배우입니다.
          </p>

          <div className="flex flex-wrap gap-2 mb-2">
            {["고양이상", "도도한", "청순한", "귀여운", "사랑스러운", "순수한", "우아한", "밝은한"].map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gold/20 text-gold-dark text-caption rounded">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {["한국어", "영어"].map((lang) => (
              <span key={lang} className="px-2 py-1 bg-blue-100 text-blue-700 text-caption rounded">
                {lang}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {["경상도사투리", "전라도사투리"].map((d) => (
              <span key={d} className="px-2 py-1 bg-green-100 text-green-700 text-caption rounded">
                {d}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {["노래", "피아노", "바이올린"].map((s) => (
              <span key={s} className="px-2 py-1 bg-orange-100 text-orange-700 text-caption rounded">
                {s}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {["수영", "요가", "골프"].map((sp) => (
              <span key={sp} className="px-2 py-1 bg-pink-100 text-pink-700 text-caption rounded">
                {sp}
              </span>
            ))}
          </div>

          <span className="px-2 py-1 bg-gray-200 text-gray-700 text-caption rounded">2종</span>

          <div className="flex gap-2 mt-4">
            <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-caption">▶</div>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-caption">
              📷
            </div>
          </div>
        </div>

        <div className="relative w-2/5 min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop"
            alt="배우 프로필"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
