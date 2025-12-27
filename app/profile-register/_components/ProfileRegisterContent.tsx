"use client";

import Link from "next/link";
import { useState } from "react";

// 폼 섹션 컴포넌트
function FormSection({
  number,
  title,
  required,
  description,
  children,
}: {
  number: number;
  title: string;
  required?: boolean;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-purple-400 font-bold">{number}.</span>
        <h3 className="text-white font-medium">{title}</h3>
        {required && <span className="text-red-400 text-sm">*필수</span>}
      </div>
      {description && (
        <p className="text-zinc-500 text-sm mb-4 whitespace-pre-line">{description}</p>
      )}
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
            selected === option
              ? "bg-purple-600 text-white"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
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
  maxSelect,
}: {
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
  maxSelect?: number;
}) {
  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else {
      if (maxSelect && selected.length >= maxSelect) return;
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
            selected.includes(option)
              ? "bg-purple-600 text-white"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
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
    // 필수
    category: "",
    name: "",
    gender: "",
    birthdate: "",
    height: "",
    weight: "",
    affiliation: "",
    affiliationName: "",
    styleKeywords: [] as string[],
    movieFee: "",
    movieFeeConfidential: false,
    adFee: "",
    adFeeConfidential: false,
    freeWork: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreePrivacy: false,
    agreeContact: false,
    // 선택
    englishName: "",
    shoeSize: "",
    race: "",
    selfIntroduction: "",
    education: "",
    mainFilmography: "",
    filmography: "",
    hairStyle: "",
    languages: [] as string[],
    dialects: [] as string[],
    talents: [] as string[],
    sports: [] as string[],
    drivingLicense: [] as string[],
    monologueLinks: [""],
    snsYoutube: "",
    snsVimeo: "",
    snsInstagram: "",
    snsTwitter: "",
    email: "",
    agreeMarketing: "",
  });

  // 옵션들
  const styleKeywordOptions = [
    "강아지상", "고양이상", "공룡상", "여우상", "곰상", "토끼상", "사슴상", "호랑이상",
    "섹시한", "청순한", "귀여운", "사랑스러운", "도도한", "카리스마 있는", "엉뚱한", "몽환적인",
    "힙한", "화려한", "우아한", "강렬한", "내추럴한", "쾌활한", "당당한", "시크한",
    "우직한", "대담한", "냉철한", "솔직한", "순수한", "내성적인", "중후한", "개구진",
    "민첩한", "편안한", "차가운", "따뜻한", "중성적인", "지적인", "유머러스한", "과감한",
    "명량한", "청량한", "고혹적인", "로맨틱한", "모던한", "상큼한", "차분한", "평온한",
    "아련한", "고독한", "부드러운", "서늘한", "기묘한", "섬세한", "침착한", "그윽한",
  ];

  const languageOptions = [
    "한국어", "영어", "일본어", "중국어", "스페인어", "프랑스어", "독일어",
    "아랍어", "러시아어", "이탈리아어", "포르투갈어", "힌디어", "태국어", "베트남어",
  ];

  const dialectOptions = [
    "불가", "경상도사투리", "전라도사투리", "충청도사투리", "강원도사투리",
    "제주도사투리", "북한말투", "조선족말투", "옛서울사투리",
  ];

  const talentOptions = [
    "없음", "노래", "피아노", "기타", "바이올린", "드럼", "플루트", "장구", "첼로",
    "춤(방송 댄스)", "그림", "운동", "지식", "요리", "메이크업", "스타일링", "무용",
  ];

  const sportOptions = [
    "없음", "승마", "스키・스노우보드", "클라이밍", "사이클링", "축구", "농구", "수영",
    "태권도", "요가", "테니스", "체조", "복싱", "마라톤", "서핑", "사격", "유도",
    "레슬링", "펜싱", "골프", "배드민턴", "스쿼시", "카누・카약", "스케이팅(빙상)",
    "스케이트보드", "킥복싱", "파쿠르", "런닝", "체스복싱", "웨이트리프팅(역도)", "아크로바틱",
  ];

  const licenseOptions = ["없음", "1종", "2종", "대형"];

  const addMonologueLink = () => {
    if (formData.monologueLinks.length < 4) {
      setFormData((prev) => ({
        ...prev,
        monologueLinks: [...prev.monologueLinks, ""],
      }));
    }
  };

  const removeMonologueLink = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      monologueLinks: prev.monologueLinks.filter((_, i) => i !== index),
    }));
  };

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
        </div>

        {/* 안내 박스 */}
        <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-6">
          <h3 className="text-white font-medium mb-3">토이드 사이트 프로필 등록 안내</h3>
          <div className="text-zinc-400 text-sm leading-relaxed">
            <p>토이드는 &apos;프로필 관리 및 탐색 플랫폼&apos;입니다.</p>
            <p>소속사가 아니며, 배우 등록 비용은 없습니다.</p>
            <br />
            <p>- 토이드에 배우&모델 등록을 하면?</p>
            <p>1. 웹 프로필 제공</p>
            <p>2. PDF 파일 자동 변환 제공</p>
            <p>3. 토이드 내 &apos;작품구인&apos; 지원 가능</p>
            <p>4. PD 대시보드 배우&모델 추가 가능</p>
            <p>5. 등록된 배우 및 모델 대리 공고 지원</p>
            <br />
            <p>이와 관련하여 자세한 내용은 홈페이지를 참고 드립니다.</p>
            <p>궁금하신 사항은 &apos;자주 묻는 질문&apos;과 1:1챗봇을 이용해 주세요.</p>
          </div>
        </div>

        {/* 폼 섹션들 */}
        <div className="space-y-4">
          {/* 1. 구분 */}
          <FormSection number={1} title="구분" required>
            <SelectButtonGroup
              options={["배우", "모델", "배우 & 모델"]}
              selected={formData.category}
              onChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
            />
          </FormSection>

          {/* 2. 이름 */}
          <FormSection number={2} title="이름(또는 활동명)" required>
            <input
              type="text"
              placeholder="이름을 입력해 주세요."
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
            <input
              type="date"
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white"
              value={formData.birthdate}
              onChange={(e) => setFormData((prev) => ({ ...prev, birthdate: e.target.value }))}
            />
          </FormSection>

          {/* 5. 키 */}
          <FormSection number={5} title="키(cm)" required>
            <input
              type="number"
              placeholder="키를 입력해 주세요."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.height}
              onChange={(e) => setFormData((prev) => ({ ...prev, height: e.target.value }))}
            />
          </FormSection>

          {/* 6. 체중 */}
          <FormSection number={6} title="체중(kg)" required>
            <input
              type="number"
              placeholder="체중을 입력해 주세요."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.weight}
              onChange={(e) => setFormData((prev) => ({ ...prev, weight: e.target.value }))}
            />
          </FormSection>

          {/* 7. 소속사 */}
          <FormSection number={7} title="소속사" required>
            <SelectButtonGroup
              options={["없음", "있음"]}
              selected={formData.affiliation}
              onChange={(value) => setFormData((prev) => ({ ...prev, affiliation: value }))}
            />
            {formData.affiliation === "있음" && (
              <input
                type="text"
                placeholder="소속사명을 입력해 주세요."
                className="mt-3 w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
                value={formData.affiliationName}
                onChange={(e) => setFormData((prev) => ({ ...prev, affiliationName: e.target.value }))}
              />
            )}
          </FormSection>

          {/* 8. 스타일 키워드 */}
          <FormSection number={8} title="스타일 키워드 (복수 선택 - 최대 10개)" required>
            <MultiSelectButtonGroup
              options={styleKeywordOptions}
              selected={formData.styleKeywords}
              onChange={(values) => setFormData((prev) => ({ ...prev, styleKeywords: values }))}
              maxSelect={10}
            />
            <p className="text-zinc-500 text-sm mt-2">선택: {formData.styleKeywords.length}/10</p>
          </FormSection>

          {/* 9. 영화 개런티 */}
          <FormSection
            number={9}
            title="영화 개런티 (최소 10만 원 이상)"
            required
            description="캐스팅담당자의 참고용으로 활용됩니다.
모든 개런티는 협의이며, 회당의 최소 시작단위를 입력해주시면 됩니다."
          >
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="100,000"
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
                value={formData.movieFee}
                onChange={(e) => setFormData((prev) => ({ ...prev, movieFee: e.target.value }))}
                disabled={formData.movieFeeConfidential}
              />
              <button
                onClick={() => setFormData((prev) => ({ ...prev, movieFeeConfidential: !prev.movieFeeConfidential, movieFee: "" }))}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  formData.movieFeeConfidential ? "bg-purple-600 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                }`}
              >
                비공개(협의)
              </button>
            </div>
          </FormSection>

          {/* 10. 광고 개런티 */}
          <FormSection
            number={10}
            title="광고 개런티 (최소 10만 원 이상)"
            required
            description="캐스팅담당자의 참고용으로 활용됩니다.
모든 개런티는 협의이며, 회당의 최소 시작단위를 입력해주시면 됩니다."
          >
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="100,000"
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
                value={formData.adFee}
                onChange={(e) => setFormData((prev) => ({ ...prev, adFee: e.target.value }))}
                disabled={formData.adFeeConfidential}
              />
              <button
                onClick={() => setFormData((prev) => ({ ...prev, adFeeConfidential: !prev.adFeeConfidential, adFee: "" }))}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  formData.adFeeConfidential ? "bg-purple-600 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                }`}
              >
                비공개(협의)
              </button>
            </div>
          </FormSection>

          {/* 11. 품앗이 가능 여부 */}
          <FormSection
            number={11}
            title="품앗이 가능 여부"
            required
            description="무페이로 출연이 가능한지 표시됩니다.
품앗이의 경우에도 출연료를 제외한 교통비, 식비 숙박비는 기본으로 합니다."
          >
            <SelectButtonGroup
              options={["가능", "불가능"]}
              selected={formData.freeWork}
              onChange={(value) => setFormData((prev) => ({ ...prev, freeWork: value }))}
            />
          </FormSection>

          {/* 12. 표지 대표 이미지 */}
          <FormSection
            number={12}
            title="표지 대표 이미지"
            required
            description="가장 먼저 보이는 이미지입니다.
TIP. 본인을 가장 잘 설명할 수 있는 이미지로 넣어주세요."
          >
            <div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center hover:border-zinc-500 transition-colors cursor-pointer">
              <div className="text-4xl mb-4">📷</div>
              <p className="text-purple-400 font-medium">이미지 추가하기</p>
              <p className="text-zinc-500 text-sm mt-2">JPG, PNG 형식</p>
            </div>
          </FormSection>

          {/* 13. 수신 전화번호 */}
          <FormSection
            number={13}
            title="수신 전화번호"
            required
            description="개인정보 보호를 위해 전화번호는 TOID에서만 보관되며,
아래 정보는 추후 캐스팅 담당자께서 연락 요청 시, 전달될 예정입니다."
          >
            <input
              type="tel"
              placeholder="010-0000-0000"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            />
          </FormSection>

          {/* 14. 비밀번호 확인 */}
          <FormSection
            number={14}
            title="비밀번호 확인"
            required
            description="8자 이상을 입력해 주세요.
TIP. '프로필 관리'와 '구인구직'에서 작품지원 할 때 본인인증 용도로 사용 됩니다."
          >
            <div className="space-y-3">
              <input
                type="password"
                placeholder="비밀번호 입력"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
                value={formData.password}
                onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
              />
              <input
                type="password"
                placeholder="비밀번호 확인"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
                value={formData.confirmPassword}
                onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
              />
            </div>
          </FormSection>

          {/* 15. 정보 수집 및 활용 동의 */}
          <FormSection number={15} title="정보 수집 및 활용 동의" required>
            <div className="bg-zinc-800 rounded-lg p-4 max-h-48 overflow-y-auto text-zinc-400 text-sm mb-4">
              <p><strong className="text-white">[토이드(TOID)]</strong>는 서비스 이용자에게 보다 나은 서비스를 제공하기 위해 다음과 같은 개인 정보를 수집·이용하고자 합니다.</p>
              <br />
              <p><strong className="text-white">1. 수집하는 개인정보 항목</strong></p>
              <p>- 필수정보: 구분(배우/모델), 이름(또는 활동명), 성별, 생년월일, 키, 체중, 발사이즈, 인종, 소속사, 대표 필모그래피, 필모그래피, 간단한 자기소개, 현재 머리형태, 스타일 키워드, 구사언어, 사투리, 특기, 가능한 스포츠, 최소 영화 개런티, 최소 광고 개런티, 품앗이 가능여부, 표지 대표 이미지, 프로필 이미지, 출연 작품 캡처 이미지, 수신 전화번호, 수신 이메일.</p>
              <p>- 선택정보: 영문이름, 최종학력, 운전면허, 출연(독백)영상 주소, 개인SNS주소.</p>
              <br />
              <p><strong className="text-white">2. 수집 및 이용 목적</strong></p>
              <p>- 배우 및 모델 프로필 생성, 저장 및 공개</p>
              <p>- 배우 및 모델의 프로필을 활용한 캐스팅 정보 제공</p>
              <p>- 서비스 개선 및 고객 지원</p>
              <br />
              <p><strong className="text-white">3. 보유 및 이용기간</strong></p>
              <p>- 회원 탈퇴 시까지 또는 정보 수집 및 이용 목적이 달성될 때까지 보유합니다.</p>
              <br />
              <p><strong className="text-white">4. 동의 거부 권리 및 거부 시 불이익</strong></p>
              <p>- 이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우 서비스 이용이 제한될 수 있습니다.</p>
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreePrivacy}
                onChange={(e) => setFormData((prev) => ({ ...prev, agreePrivacy: e.target.checked }))}
                className="w-5 h-5 rounded border-zinc-600 bg-zinc-800 text-purple-600"
              />
              <span className="text-white">동의</span>
            </label>
          </FormSection>

          {/* 16. 섭외요청 이메일 문자 수신 동의 */}
          <FormSection number={16} title="섭외요청 이메일 문자 수신 동의" required>
            <div className="bg-zinc-800 rounded-lg p-4 max-h-48 overflow-y-auto text-zinc-400 text-sm mb-4">
              <p><strong className="text-white">[토이드(TOID)]</strong>는 배우 및 모델에게 작품 관련 섭외 요청과 관련된 정보를 제공하기 위해 이메일 및 문자 메시지를 발송할 수 있습니다.</p>
              <br />
              <p>1. 수집 항목: 수신 전화번호, 수신 이메일</p>
              <p>2. 이용 목적: 작품 섭외 요청 및 관련 정보 전달</p>
              <p>3. 보유 및 이용기간: 회원 탈퇴 시까지 또는 동의 철회 시까지</p>
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.agreeContact}
                onChange={(e) => setFormData((prev) => ({ ...prev, agreeContact: e.target.checked }))}
                className="w-5 h-5 rounded border-zinc-600 bg-zinc-800 text-purple-600"
              />
              <span className="text-white">동의</span>
            </label>
          </FormSection>

          {/* 선택 문항 구분선 */}
          <div className="py-6 text-center">
            <p className="text-white font-semibold">이하 선택 문항입니다.</p>
          </div>

          {/* 17. 영문이름 */}
          <FormSection
            number={17}
            title="영문이름"
            description="본인의 이름 또는 활동명을 영문으로 변환하여 작성해 주시길 바랍니다.
예시) Hong Gildong"
          >
            <input
              type="text"
              placeholder="영문이름을 입력해 주세요."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.englishName}
              onChange={(e) => setFormData((prev) => ({ ...prev, englishName: e.target.value }))}
            />
          </FormSection>

          {/* 18. 발사이즈 */}
          <FormSection number={18} title="발사이즈(mm)">
            <input
              type="number"
              placeholder="발사이즈를 입력해 주세요."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.shoeSize}
              onChange={(e) => setFormData((prev) => ({ ...prev, shoeSize: e.target.value }))}
            />
          </FormSection>

          {/* 19. 인종 */}
          <FormSection number={19} title="인종">
            <SelectButtonGroup
              options={["황인", "흑인", "백인"]}
              selected={formData.race}
              onChange={(value) => setFormData((prev) => ({ ...prev, race: value }))}
            />
          </FormSection>

          {/* 20. 간단한 자기소개 */}
          <FormSection number={20} title="간단한 자기소개 (최대 200자)">
            <textarea
              placeholder="간단한 자기소개를 입력해 주세요."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 h-24 resize-none"
              maxLength={200}
              value={formData.selfIntroduction}
              onChange={(e) => setFormData((prev) => ({ ...prev, selfIntroduction: e.target.value }))}
            />
            <p className="text-right text-zinc-500 text-sm mt-2">{formData.selfIntroduction.length}/200</p>
          </FormSection>

          {/* 21. 최종학력 */}
          <FormSection number={21} title="최종학력">
            <input
              type="text"
              placeholder="최종학력을 입력해 주세요."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.education}
              onChange={(e) => setFormData((prev) => ({ ...prev, education: e.target.value }))}
            />
          </FormSection>

          {/* 22. 대표 필모그래피 */}
          <FormSection
            number={22}
            title="대표 필모그래피 (1개)"
            description="제작연도, 작품제목, 역할, 제작 순서로 입력해주세요.
*콤마(,) 사이에 띄어쓰기는 생략 부탁드립니다.
콤마가 잘못 기입될 시 PDF 파일 생성에 문제가 생길 수 있습니다.

예시) 장편영화,2000,행복합니다,민서역(주연),푸른필름"
          >
            <input
              type="text"
              placeholder="장편영화,2000,행복합니다,민서역(주연),푸른필름"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.mainFilmography}
              onChange={(e) => setFormData((prev) => ({ ...prev, mainFilmography: e.target.value }))}
            />
          </FormSection>

          {/* 23. 필모그래피 */}
          <FormSection
            number={23}
            title="필모그래피"
            description="구분, 제작연도, 작품제목, 역할, 제작 순서로 입력해주세요.
*콤마(,) 사이에 띄어쓰기는 생략 부탁드립니다.
콤마가 잘못 기입될 시 PDF 파일 생성에 문제가 생길 수 있습니다.

아래로 누적하며 작성해 주세요.
예시) 장편영화,2000,행복합니다,민서역(주연),푸른필름"
          >
            <textarea
              placeholder="장편영화,2000,행복합니다,민서역(주연),푸른필름"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 h-32 resize-none"
              value={formData.filmography}
              onChange={(e) => setFormData((prev) => ({ ...prev, filmography: e.target.value }))}
            />
          </FormSection>

          {/* 24. 현재 머리형태 */}
          <FormSection number={24} title="현재 머리형태">
            <SelectButtonGroup
              options={["숏컷", "단발", "중단발", "장발", "삭발"]}
              selected={formData.hairStyle}
              onChange={(value) => setFormData((prev) => ({ ...prev, hairStyle: value }))}
            />
          </FormSection>

          {/* 25. 구사언어 */}
          <FormSection number={25} title="구사언어 (복수 선택 가능)">
            <MultiSelectButtonGroup
              options={languageOptions}
              selected={formData.languages}
              onChange={(values) => setFormData((prev) => ({ ...prev, languages: values }))}
            />
          </FormSection>

          {/* 26. 사투리 */}
          <FormSection number={26} title="사투리 (복수 선택 가능)">
            <MultiSelectButtonGroup
              options={dialectOptions}
              selected={formData.dialects}
              onChange={(values) => setFormData((prev) => ({ ...prev, dialects: values }))}
            />
          </FormSection>

          {/* 27. 특기 */}
          <FormSection number={27} title="특기 (복수 선택 가능)">
            <MultiSelectButtonGroup
              options={talentOptions}
              selected={formData.talents}
              onChange={(values) => setFormData((prev) => ({ ...prev, talents: values }))}
            />
          </FormSection>

          {/* 28. 가능한 스포츠 */}
          <FormSection number={28} title="가능한 스포츠 (복수 선택 가능)">
            <MultiSelectButtonGroup
              options={sportOptions}
              selected={formData.sports}
              onChange={(values) => setFormData((prev) => ({ ...prev, sports: values }))}
            />
          </FormSection>

          {/* 29. 운전면허 */}
          <FormSection number={29} title="운전면허 (복수 선택 가능)">
            <MultiSelectButtonGroup
              options={licenseOptions}
              selected={formData.drivingLicense}
              onChange={(values) => setFormData((prev) => ({ ...prev, drivingLicense: values }))}
            />
          </FormSection>

          {/* 30. 프로필 이미지 */}
          <FormSection number={30} title="프로필 이미지 (최대 10장)">
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
            <button className="mt-3 text-purple-400 text-sm hover:text-purple-300">이미지 추가하기</button>
          </FormSection>

          {/* 31. 출연 작품 캡처 이미지 */}
          <FormSection number={31} title="출연 작품 캡처 이미지 (최대 10장)">
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
            <button className="mt-3 text-purple-400 text-sm hover:text-purple-300">이미지 추가하기</button>
          </FormSection>

          {/* 32. 출연(독백)영상 주소 */}
          <FormSection
            number={32}
            title="출연(독백)영상 주소"
            description="최대 4개의 링크를 추가할 수 있습니다.
유튜브 채널이 아닌 영상 링크를 입력해 주세요."
          >
            <div className="space-y-3">
              {formData.monologueLinks.map((link, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    type="text"
                    placeholder="http://youtu.be/"
                    className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
                    value={link}
                    onChange={(e) => {
                      const newLinks = [...formData.monologueLinks];
                      newLinks[index] = e.target.value;
                      setFormData((prev) => ({ ...prev, monologueLinks: newLinks }));
                    }}
                  />
                  {formData.monologueLinks.length > 1 && (
                    <button
                      onClick={() => removeMonologueLink(index)}
                      className="px-4 py-2 bg-zinc-800 text-zinc-400 rounded-lg hover:bg-zinc-700"
                    >
                      −
                    </button>
                  )}
                </div>
              ))}
              {formData.monologueLinks.length < 4 && (
                <button
                  onClick={addMonologueLink}
                  className="px-4 py-2 bg-zinc-800 text-zinc-400 rounded-lg hover:bg-zinc-700"
                >
                  +
                </button>
              )}
            </div>
          </FormSection>

          {/* 33. 개인 SNS 주소 */}
          <FormSection
            number={33}
            title="개인 SNS 주소"
            description="아이디가 아닌 링크를 입력해 주세요."
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-24 text-zinc-400 text-sm">Youtube</span>
                <input
                  type="text"
                  placeholder="https://youtube.com/@..."
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
                  value={formData.snsYoutube}
                  onChange={(e) => setFormData((prev) => ({ ...prev, snsYoutube: e.target.value }))}
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24 text-zinc-400 text-sm">Vimeo</span>
                <input
                  type="text"
                  placeholder="https://vimeo.com/..."
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
                  value={formData.snsVimeo}
                  onChange={(e) => setFormData((prev) => ({ ...prev, snsVimeo: e.target.value }))}
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24 text-zinc-400 text-sm">Instagram</span>
                <input
                  type="text"
                  placeholder="https://instagram.com/..."
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
                  value={formData.snsInstagram}
                  onChange={(e) => setFormData((prev) => ({ ...prev, snsInstagram: e.target.value }))}
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24 text-zinc-400 text-sm">Twitter</span>
                <input
                  type="text"
                  placeholder="https://twitter.com/..."
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
                  value={formData.snsTwitter}
                  onChange={(e) => setFormData((prev) => ({ ...prev, snsTwitter: e.target.value }))}
                />
              </div>
            </div>
          </FormSection>

          {/* 34. 수신 이메일 */}
          <FormSection
            number={34}
            title="수신 이메일"
            description="개인정보 보호를 위해 이메일은 TOID에서만 보관되며,
아래 정보는 추후 캐스팅 담당자께서 연락 요청 시, 전달될 예정입니다."
          >
            <input
              type="email"
              placeholder="sample@toid.kr"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            />
          </FormSection>

          {/* 35. 마케팅 정보 수신 동의 */}
          <FormSection number={35} title="마케팅 정보 수신 동의">
            <div className="bg-zinc-800 rounded-lg p-4 max-h-48 overflow-y-auto text-zinc-400 text-sm mb-4">
              <p><strong className="text-white">[토이드(TOID)]</strong>는 서비스 이용자에게 서비스 관련 마케팅 정보를 제공하기 위해 이메일 및 문자 메시지를 발송할 수 있습니다.</p>
              <br />
              <p>1. 수집 항목: 수신 전화번호, 수신 이메일</p>
              <p>2. 이용 목적: 마케팅 및 프로모션 정보 전달, 서비스 안내</p>
              <p>3. 보유 및 이용기간: 회원 탈퇴 시까지 또는 동의 철회 시까지</p>
            </div>
            <SelectButtonGroup
              options={["동의", "거절"]}
              selected={formData.agreeMarketing}
              onChange={(value) => setFormData((prev) => ({ ...prev, agreeMarketing: value }))}
            />
          </FormSection>
        </div>

        {/* 제출 버튼 */}
        <div className="mt-8">
          <button className="w-full py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            등록하기
          </button>
        </div>
      </main>

      {/* 하단 그라데이션 */}
      <div className="h-32 bg-gradient-to-t from-purple-900/20 to-transparent" />
    </div>
  );
}
