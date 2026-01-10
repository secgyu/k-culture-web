"use client";

import Image from "next/image";

export function FeatureRegistrationSection() {
  const formFields = [
    { num: 1, label: "구분", required: true },
    { num: 2, label: "이름(또는 활동명)", required: true },
    { num: 16, label: "스타일 키워드 (복수 선택 - 최대 10개)", required: true },
    { num: 17, label: "구사언어 (복수 선택 가능)", required: false },
    { num: 18, label: "사투리 (복수 선택 가능)", required: false },
  ];

  const styleKeywords = [
    { label: "귀여운", selected: false },
    { label: "강아지상", selected: true },
    { label: "평온한", selected: false },
    { label: "부드러운", selected: false },
    { label: "사랑스러운", selected: true },
  ];

  const languages = [
    { label: "한국어", selected: true },
    { label: "영어", selected: false },
    { label: "일본어", selected: false },
    { label: "스페인어", selected: false },
  ];

  return (
    <section className="section-spacing-md bg-luxury-black">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-display-sm text-ivory mb-12 text-center">등록 한 번으로 편하게 기다리세요!</h2>

        <div className="mb-8 space-y-3">
          {formFields.map((field, index) => (
            <div
              key={field.num}
              className="bg-luxury-tertiary rounded-xl px-6 py-5 transition-opacity"
              style={{ opacity: 1 - index * 0.15 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-gold-light font-bold">{field.num}.</span>
                <span className="font-medium text-white">{field.label}</span>
                {field.required && <span className="text-body-sm text-red-400">*필수</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16 flex flex-col items-center gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`h-2 w-2 rounded-full ${i === 0 ? "bg-gold" : "bg-luxury-tertiary"}`} />
          ))}
        </div>

        <h3 className="text-heading-xl md:text-display-sm text-muted-gray mb-8 text-center">
          나만의 프로필을 <span className="text-ivory font-bold">등록</span>했다면?
        </h3>

        <div className="mb-4 flex flex-wrap justify-center gap-3">
          {styleKeywords.map((keyword) => (
            <span
              key={keyword.label}
              className={`text-body-sm rounded-full px-5 py-3 font-medium transition-all ${
                keyword.selected
                  ? "bg-gold text-luxury-black font-medium"
                  : "bg-luxury-tertiary text-muted-gray border-border border"
              }`}
            >
              {keyword.label}
            </span>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap justify-center gap-3">
          {languages.map((lang) => (
            <span
              key={lang.label}
              className={`text-body-sm rounded-full px-5 py-3 font-medium transition-all ${
                lang.selected
                  ? "bg-gold text-luxury-black font-medium"
                  : "bg-luxury-tertiary text-muted-gray border-border border"
              }`}
            >
              {lang.label}
            </span>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap justify-center gap-3">
          {[
            { label: "충청도사투리", selected: false },
            { label: "전라도사투리", selected: false },
            { label: "경상도사투리", selected: true },
            { label: "강원도사투리", selected: false },
          ].map((dialect) => (
            <span
              key={dialect.label}
              className={`text-body-sm rounded-full px-5 py-3 font-medium transition-all ${
                dialect.selected
                  ? "bg-gold text-luxury-black font-medium"
                  : "bg-luxury-tertiary text-muted-gray border-border border"
              }`}
            >
              {dialect.label}
            </span>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap justify-center gap-3">
          {[
            { label: "노래", selected: false },
            { label: "피아노", selected: false },
            { label: "바이올린", selected: true },
          ].map((skill) => (
            <span
              key={skill.label}
              className={`text-body-sm rounded-full px-5 py-3 font-medium transition-all ${
                skill.selected
                  ? "bg-gold text-luxury-black font-medium"
                  : "bg-luxury-tertiary text-muted-gray border-border border"
              }`}
            >
              {skill.label}
            </span>
          ))}
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {[
            { label: "수영", selected: true },
            { label: "요가", selected: false },
            { label: "골프", selected: false },
            { label: "헬스", selected: false },
          ].map((sport) => (
            <span
              key={sport.label}
              className={`text-body-sm rounded-full px-5 py-3 font-medium transition-all ${
                sport.selected
                  ? "bg-gold text-luxury-black font-medium"
                  : "bg-luxury-tertiary text-muted-gray border-border border"
              }`}
            >
              {sport.label}
            </span>
          ))}
        </div>

        <h3 className="text-display-sm text-ivory mb-12 text-center">
          나를 대표하는 <span className="text-gold">키워드</span>로 웹 프로필 완성!
        </h3>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="bg-luxury-secondary overflow-hidden rounded-2xl shadow-2xl">
            <div className="p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 text-white">←</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-warm-gray text-caption">원본</span>
                  <div className="flex gap-2">
                    <div className="bg-luxury-tertiary h-5 w-5 rounded" />
                    <div className="bg-luxury-tertiary h-5 w-5 rounded" />
                    <div className="bg-luxury-tertiary h-5 w-5 rounded" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 space-y-3">
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <h4 className="text-heading-md font-bold text-white">이하나</h4>
                      <span className="bg-gold text-luxury-black text-caption rounded px-2 py-0.5 font-medium">
                        여자
                      </span>
                    </div>
                    <p className="text-muted-gray text-caption">Lee Hana</p>
                  </div>
                  <div className="text-caption space-y-1">
                    <p className="text-warm-gray">🏢 핑크프로젝트</p>
                    <p className="text-warm-gray">🎓 한국대학교 연기과</p>
                  </div>
                  <div className="text-caption text-muted-gray">
                    <p>단편영화,&lt;우리 사이&gt;, 지수역(주연)</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-luxury-tertiary rounded p-2">
                      <p className="text-muted-gray text-caption">생년월일</p>
                      <p className="text-caption text-white">2001</p>
                    </div>
                    <div className="bg-luxury-tertiary rounded p-2">
                      <p className="text-muted-gray text-caption">키</p>
                      <p className="text-caption text-white">167 cm</p>
                    </div>
                    <div className="bg-luxury-tertiary rounded p-2">
                      <p className="text-muted-gray text-caption">몸무게</p>
                      <p className="text-caption text-white">48 kg</p>
                    </div>
                  </div>
                  <p className="text-warm-gray text-caption leading-relaxed">
                    안녕하세요~! 꿈꾸는 배우 이하나입니다. 따뜻한 미소와 자연스러운 연기로...
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["고양이상", "도도한", "청순한", "사랑스러운", "순수", "청아함", "배려심"].map((tag) => (
                      <span key={tag} className="text-gold-light text-caption rounded bg-purple-600/20 px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-[3/4] w-32 overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop"
                    alt="프로필"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-luxury-secondary overflow-hidden rounded-2xl shadow-2xl">
            <div className="p-4">
              <p className="text-warm-gray text-body-sm mb-4">프로필 사진</p>
              <div className="mb-4 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <Image
                      src={`https://images.unsplash.com/photo-153452874177${i}-53994a69daeb?w=200&h=300&fit=crop`}
                      alt={`사진 ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-warm-gray text-body-sm mb-2">출연 이미지</p>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-luxury-tertiary relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={`https://images.unsplash.com/photo-149479010837${i}-be9c29b29330?w=150&h=150&fit=crop`}
                      alt={`출연 ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
