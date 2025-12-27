"use client";

import Link from "next/link";
import { useState } from "react";

// 폼 섹션 컴포넌트
function FormSection({
  number,
  title,
  required,
  children,
}: {
  number: number;
  title: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-purple-400 font-bold">{number}.</span>
        <h3 className="text-white font-medium">{title}</h3>
        {required && <span className="text-red-400 text-sm">*필수</span>}
      </div>
      {children}
    </div>
  );
}

// 선택 버튼 그룹
function SelectButtonGroup({
  options,
  selected,
  onChange,
}: {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            selected === option ? "bg-purple-600 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

// 다중 선택 버튼 그룹
function MultiSelectButtonGroup({
  options,
  selected,
  onChange,
}: {
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => toggleOption(option)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            selected.includes(option) ? "bg-purple-600 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function ProfileRegisterContent() {
  // 폼 상태
  const [formData, setFormData] = useState({
    category: "배우",
    name: "",
    gender: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    phone: "",
    email: "",
    height: "",
    weight: "",
    shoeSize: "",
    agency: "",
    education: "",
    styleKeywords: [] as string[],
    languages: [] as string[],
    dialects: [] as string[],
    skills: [] as string[],
    introduction: "",
    filmography: "",
    license: "없음",
    pumasi: "가능",
    movieBudget: "",
    adBudget: "",
    // 24~35 추가 필드
    instagram: "",
    youtube: "",
    portfolioLink: "",
    videoLink: "",
    awards: "",
    certificates: "",
    military: "해당없음",
    marriage: "미혼",
    tattoo: "없음",
    eyeColor: "",
    skinTone: "",
    features: [] as string[],
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  });

  const styleKeywordOptions = [
    "고양이상",
    "강아지상",
    "도도한",
    "청순한",
    "귀여운",
    "사랑스러운",
    "순수한",
    "우아한",
    "밝은",
    "부드러운",
    "성숙한",
    "시크한",
    "신비로운",
    "아기상",
  ];

  const languageOptions = ["한국어", "영어", "일본어", "중국어", "스페인어", "프랑스어", "독일어"];

  const dialectOptions = ["서울", "경기", "충청도", "전라도", "경상도", "강원도", "제주도"];

  const skillOptions = [
    "노래",
    "피아노",
    "기타",
    "바이올린",
    "드럼",
    "댄스",
    "수영",
    "요가",
    "필라테스",
    "골프",
    "헬스",
    "농구",
    "축구",
    "검도",
    "태권도",
  ];

  const featureOptions = ["쌍꺼풀", "무쌍", "속쌍", "보조개", "주근깨", "점", "흉터", "광대뼈", "턱선", "이마"];

  const militaryOptions = ["해당없음", "미필", "군필", "면제", "복무중"];

  const marriageOptions = ["미혼", "기혼", "비공개"];

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* 헤더 */}
      <header className="w-full px-6 py-4 flex items-center justify-between border-b border-zinc-800">
        <Link href="/" className="flex items-center gap-1 text-white">
          <span className="font-bold text-xl tracking-tight">T</span>
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">ID</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/ai-matching"
            className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
          >
            AI 매칭추천
          </Link>
          <Link href="/actor-search" className="text-zinc-300 hover:text-white transition-colors text-sm">
            배우&모델 찾기
          </Link>
          <Link href="/jobs" className="text-zinc-300 hover:text-white transition-colors text-sm">
            작품구인
          </Link>
          <Link href="/notice" className="text-zinc-300 hover:text-white transition-colors text-sm">
            공지사항
          </Link>
          <Link
            href="/profile-register"
            className="px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-all"
          >
            프로필 등록하기
          </Link>
        </nav>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* 메인 */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* 타이틀 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">프로필 등록하기</h1>
          <p className="text-zinc-400 text-sm">* 표시된 항목을 제외하고는 미작성 가능합니다</p>
        </div>

        {/* 안내 박스 */}
        <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-6">
          <p className="text-zinc-400 text-sm leading-relaxed">
            1. 회원 1명당 1개의 프로필만 작성하실 수 있습니다. (1인 1프로필)
            <br />
            2. 타인의 프로필 사진을 도용할 경우 법적인 제재를 받을 수 있습니다.
            <br />
            3. 프로필 내용 중 개인 정보가 포함되지 않도록 주의해주세요.
          </p>
        </div>

        {/* 폼 섹션들 */}
        <div className="space-y-4">
          {/* 1. 구분 */}
          <FormSection number={1} title="구분" required>
            <SelectButtonGroup
              options={["배우", "모델"]}
              selected={formData.category}
              onChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
            />
          </FormSection>

          {/* 2. 이름 */}
          <FormSection number={2} title="이름(또는 활동명)" required>
            <input
              type="text"
              placeholder="이름을 입력해주세요"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            />
          </FormSection>

          {/* 3. 성별 */}
          <FormSection number={3} title="성별" required>
            <SelectButtonGroup
              options={["남자", "여자"]}
              selected={formData.gender}
              onChange={(value) => setFormData((prev) => ({ ...prev, gender: value }))}
            />
          </FormSection>

          {/* 4. 생년월일 */}
          <FormSection number={4} title="생년월일" required>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="년도"
                className="w-24 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
                value={formData.birthYear}
                onChange={(e) => setFormData((prev) => ({ ...prev, birthYear: e.target.value }))}
              />
              <input
                type="text"
                placeholder="월"
                className="w-20 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
                value={formData.birthMonth}
                onChange={(e) => setFormData((prev) => ({ ...prev, birthMonth: e.target.value }))}
              />
              <input
                type="text"
                placeholder="일"
                className="w-20 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
                value={formData.birthDay}
                onChange={(e) => setFormData((prev) => ({ ...prev, birthDay: e.target.value }))}
              />
            </div>
          </FormSection>

          {/* 5. 연락처 */}
          <FormSection number={5} title="연락처" required>
            <input
              type="tel"
              placeholder="010-0000-0000"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            />
          </FormSection>

          {/* 6. 이메일 */}
          <FormSection number={6} title="이메일">
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            />
          </FormSection>

          {/* 7. 키 */}
          <FormSection number={7} title="키 (cm)" required>
            <input
              type="number"
              placeholder="167"
              className="w-32 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.height}
              onChange={(e) => setFormData((prev) => ({ ...prev, height: e.target.value }))}
            />
          </FormSection>

          {/* 8. 몸무게 */}
          <FormSection number={8} title="몸무게 (kg)" required>
            <input
              type="number"
              placeholder="55"
              className="w-32 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.weight}
              onChange={(e) => setFormData((prev) => ({ ...prev, weight: e.target.value }))}
            />
          </FormSection>

          {/* 9. 발사이즈 */}
          <FormSection number={9} title="발사이즈 (mm)">
            <input
              type="number"
              placeholder="235"
              className="w-32 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.shoeSize}
              onChange={(e) => setFormData((prev) => ({ ...prev, shoeSize: e.target.value }))}
            />
          </FormSection>

          {/* 10. 소속사 */}
          <FormSection number={10} title="소속사">
            <input
              type="text"
              placeholder="소속사명 (없으면 '프리랜서' 입력)"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.agency}
              onChange={(e) => setFormData((prev) => ({ ...prev, agency: e.target.value }))}
            />
          </FormSection>

          {/* 11. 학력 */}
          <FormSection number={11} title="학력">
            <input
              type="text"
              placeholder="학교명 / 전공"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.education}
              onChange={(e) => setFormData((prev) => ({ ...prev, education: e.target.value }))}
            />
          </FormSection>

          {/* 12. 스타일 키워드 */}
          <FormSection number={12} title="스타일 키워드 (복수 선택 - 최대 10개)" required>
            <MultiSelectButtonGroup
              options={styleKeywordOptions}
              selected={formData.styleKeywords}
              onChange={(values) => setFormData((prev) => ({ ...prev, styleKeywords: values.slice(0, 10) }))}
            />
          </FormSection>

          {/* 13. 구사언어 */}
          <FormSection number={13} title="구사언어 (복수 선택 가능)">
            <MultiSelectButtonGroup
              options={languageOptions}
              selected={formData.languages}
              onChange={(values) => setFormData((prev) => ({ ...prev, languages: values }))}
            />
          </FormSection>

          {/* 14. 사투리 */}
          <FormSection number={14} title="사투리 (복수 선택 가능)">
            <MultiSelectButtonGroup
              options={dialectOptions}
              selected={formData.dialects}
              onChange={(values) => setFormData((prev) => ({ ...prev, dialects: values }))}
            />
          </FormSection>

          {/* 15. 특기 */}
          <FormSection number={15} title="특기 (복수 선택 가능)">
            <MultiSelectButtonGroup
              options={skillOptions}
              selected={formData.skills}
              onChange={(values) => setFormData((prev) => ({ ...prev, skills: values }))}
            />
          </FormSection>

          {/* 16. 자기소개 */}
          <FormSection number={16} title="자기소개" required>
            <textarea
              placeholder="자신을 소개해주세요 (최대 500자)"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 h-32 resize-none"
              value={formData.introduction}
              onChange={(e) => setFormData((prev) => ({ ...prev, introduction: e.target.value }))}
              maxLength={500}
            />
            <p className="text-right text-zinc-500 text-sm mt-2">{formData.introduction.length}/500</p>
          </FormSection>

          {/* 17. 필모그래피 */}
          <FormSection number={17} title="필모그래피">
            <textarea
              placeholder="작품명, 역할, 년도 순으로 작성해주세요"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 h-32 resize-none"
              value={formData.filmography}
              onChange={(e) => setFormData((prev) => ({ ...prev, filmography: e.target.value }))}
            />
          </FormSection>

          {/* 18. 운전면허 */}
          <FormSection number={18} title="운전면허">
            <SelectButtonGroup
              options={["없음", "1종", "2종"]}
              selected={formData.license}
              onChange={(value) => setFormData((prev) => ({ ...prev, license: value }))}
            />
          </FormSection>

          {/* 19. 품앗이 */}
          <FormSection number={19} title="품앗이 가능 여부">
            <SelectButtonGroup
              options={["가능", "불가능"]}
              selected={formData.pumasi}
              onChange={(value) => setFormData((prev) => ({ ...prev, pumasi: value }))}
            />
          </FormSection>

          {/* 20. 영화 예산 */}
          <FormSection number={20} title="영화 희망 예산 (원)">
            <input
              type="text"
              placeholder="100,000"
              className="w-40 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.movieBudget}
              onChange={(e) => setFormData((prev) => ({ ...prev, movieBudget: e.target.value }))}
            />
          </FormSection>

          {/* 21. 광고 예산 */}
          <FormSection number={21} title="광고 희망 예산 (원)">
            <input
              type="text"
              placeholder="100,000"
              className="w-40 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.adBudget}
              onChange={(e) => setFormData((prev) => ({ ...prev, adBudget: e.target.value }))}
            />
          </FormSection>

          {/* 22. 프로필 사진 */}
          <FormSection number={22} title="프로필 사진" required>
            <div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">📷</div>
              <p className="text-zinc-400 mb-2">클릭하여 사진을 업로드하세요</p>
              <p className="text-zinc-500 text-sm">JPG, PNG 형식 (최대 10MB)</p>
            </div>
          </FormSection>

          {/* 23. 추가 사진 */}
          <FormSection number={23} title="추가 사진 (최대 10장)">
            <div className="grid grid-cols-5 gap-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square border-2 border-dashed border-zinc-700 rounded-lg flex items-center justify-center text-zinc-600 hover:border-zinc-500 transition-colors cursor-pointer"
                >
                  <span className="text-2xl">+</span>
                </div>
              ))}
            </div>
          </FormSection>

          {/* 24. 인스타그램 */}
          <FormSection number={24} title="인스타그램 아이디">
            <div className="flex items-center gap-2">
              <span className="text-zinc-400">@</span>
              <input
                type="text"
                placeholder="instagram_id"
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
                value={formData.instagram}
                onChange={(e) => setFormData((prev) => ({ ...prev, instagram: e.target.value }))}
              />
            </div>
          </FormSection>

          {/* 25. 유튜브 */}
          <FormSection number={25} title="유튜브 채널">
            <input
              type="text"
              placeholder="https://youtube.com/@채널명"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.youtube}
              onChange={(e) => setFormData((prev) => ({ ...prev, youtube: e.target.value }))}
            />
          </FormSection>

          {/* 26. 포트폴리오 링크 */}
          <FormSection number={26} title="포트폴리오 링크">
            <input
              type="url"
              placeholder="https://..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.portfolioLink}
              onChange={(e) => setFormData((prev) => ({ ...prev, portfolioLink: e.target.value }))}
            />
            <p className="text-zinc-500 text-sm mt-2">개인 포트폴리오 사이트, 노션, 블로그 등</p>
          </FormSection>

          {/* 27. 영상 링크 */}
          <FormSection number={27} title="영상 링크 (유튜브, 비메오 등)">
            <input
              type="url"
              placeholder="https://youtube.com/watch?v=..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.videoLink}
              onChange={(e) => setFormData((prev) => ({ ...prev, videoLink: e.target.value }))}
            />
            <p className="text-zinc-500 text-sm mt-2">자기소개 영상, 연기 영상, 오디션 영상 등</p>
          </FormSection>

          {/* 28. 수상경력 */}
          <FormSection number={28} title="수상경력">
            <textarea
              placeholder="수상명 / 수상년도 / 주최기관"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 h-24 resize-none"
              value={formData.awards}
              onChange={(e) => setFormData((prev) => ({ ...prev, awards: e.target.value }))}
            />
          </FormSection>

          {/* 29. 자격증 */}
          <FormSection number={29} title="자격증">
            <textarea
              placeholder="자격증명 / 취득년도"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 h-24 resize-none"
              value={formData.certificates}
              onChange={(e) => setFormData((prev) => ({ ...prev, certificates: e.target.value }))}
            />
          </FormSection>

          {/* 30. 병역사항 */}
          <FormSection number={30} title="병역사항">
            <SelectButtonGroup
              options={militaryOptions}
              selected={formData.military}
              onChange={(value) => setFormData((prev) => ({ ...prev, military: value }))}
            />
          </FormSection>

          {/* 31. 결혼 여부 */}
          <FormSection number={31} title="결혼 여부">
            <SelectButtonGroup
              options={marriageOptions}
              selected={formData.marriage}
              onChange={(value) => setFormData((prev) => ({ ...prev, marriage: value }))}
            />
          </FormSection>

          {/* 32. 문신/피어싱 */}
          <FormSection number={32} title="문신/피어싱 여부">
            <SelectButtonGroup
              options={["없음", "피어싱", "문신", "둘 다"]}
              selected={formData.tattoo}
              onChange={(value) => setFormData((prev) => ({ ...prev, tattoo: value }))}
            />
          </FormSection>

          {/* 33. 눈 색상 */}
          <FormSection number={33} title="눈 색상">
            <input
              type="text"
              placeholder="검정, 갈색, 헤이즐 등"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.eyeColor}
              onChange={(e) => setFormData((prev) => ({ ...prev, eyeColor: e.target.value }))}
            />
          </FormSection>

          {/* 34. 이목구비 특징 */}
          <FormSection number={34} title="이목구비 특징 (복수 선택 가능)">
            <MultiSelectButtonGroup
              options={featureOptions}
              selected={formData.features}
              onChange={(values) => setFormData((prev) => ({ ...prev, features: values }))}
            />
          </FormSection>

          {/* 35. 동의 사항 */}
          <FormSection number={35} title="동의 사항" required>
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData((prev) => ({ ...prev, agreeTerms: e.target.checked }))}
                  className="mt-1 w-5 h-5 rounded border-zinc-600 bg-zinc-800 text-purple-600 focus:ring-purple-500"
                />
                <div>
                  <span className="text-white">[필수] 이용약관에 동의합니다</span>
                  <p className="text-zinc-500 text-sm mt-1">서비스 이용을 위한 기본 약관입니다.</p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreePrivacy}
                  onChange={(e) => setFormData((prev) => ({ ...prev, agreePrivacy: e.target.checked }))}
                  className="mt-1 w-5 h-5 rounded border-zinc-600 bg-zinc-800 text-purple-600 focus:ring-purple-500"
                />
                <div>
                  <span className="text-white">[필수] 개인정보 수집 및 이용에 동의합니다</span>
                  <p className="text-zinc-500 text-sm mt-1">프로필 등록 및 서비스 이용을 위해 필요합니다.</p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeMarketing}
                  onChange={(e) => setFormData((prev) => ({ ...prev, agreeMarketing: e.target.checked }))}
                  className="mt-1 w-5 h-5 rounded border-zinc-600 bg-zinc-800 text-purple-600 focus:ring-purple-500"
                />
                <div>
                  <span className="text-white">[선택] 마케팅 정보 수신에 동의합니다</span>
                  <p className="text-zinc-500 text-sm mt-1">
                    새로운 작품 공고, 이벤트 등의 정보를 받아보실 수 있습니다.
                  </p>
                </div>
              </label>
            </div>
          </FormSection>
        </div>

        {/* 제출 버튼 */}
        <div className="mt-8 space-y-4">
          <button className="w-full py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all">
            프로필 등록하기
          </button>
          <button className="w-full py-4 bg-zinc-800 text-zinc-300 font-semibold rounded-xl hover:bg-zinc-700 transition-all">
            임시 저장
          </button>
        </div>
      </main>

      {/* 하단 그라데이션 */}
      <div className="h-32 bg-gradient-to-t from-purple-900/20 to-transparent" />
    </div>
  );
}
