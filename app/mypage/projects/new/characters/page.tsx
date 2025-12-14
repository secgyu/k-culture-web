"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// 아이콘 컴포넌트들
function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
}

function PencilIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
}

function XMarkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function XCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// 캐릭터 타입
interface Character {
  id: string;
  name: string;
  gender: string;
  ageRange: string;
  roleType: string;
  description: string;
}

// 성별 옵션
const genderOptions = ["남성", "여성", "무관"];

// 나이대 옵션
const ageRangeOptions = ["10대", "20대", "30대", "40대", "50대", "60대 이상"];

// 역할 유형 옵션
const roleTypeOptions = ["주연", "조연", "단역", "엑스트라", "특별출연"];

export default function CharactersPage() {
  const router = useRouter();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingCharacter, setEditingCharacter] = useState<Character | null>(null);

  // 모달 폼 상태
  const [characterName, setCharacterName] = useState("");
  const [gender, setGender] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [roleType, setRoleType] = useState("");
  const [description, setDescription] = useState("");

  const isFormValid = characterName.trim() !== "" && gender !== "" && ageRange !== "" && roleType !== "";

  const resetForm = () => {
    setCharacterName("");
    setGender("");
    setAgeRange("");
    setRoleType("");
    setDescription("");
    setEditingCharacter(null);
  };

  const openAddModal = () => {
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (character: Character) => {
    setEditingCharacter(character);
    setCharacterName(character.name);
    setGender(character.gender);
    setAgeRange(character.ageRange);
    setRoleType(character.roleType);
    setDescription(character.description);
    setShowModal(true);
  };

  const handleSaveCharacter = () => {
    if (!isFormValid) return;

    if (editingCharacter) {
      // 수정
      setCharacters((prev) =>
        prev.map((c) =>
          c.id === editingCharacter.id
            ? { ...c, name: characterName, gender, ageRange, roleType, description }
            : c
        )
      );
    } else {
      // 추가
      const newCharacter: Character = {
        id: Date.now().toString(),
        name: characterName,
        gender,
        ageRange,
        roleType,
        description,
      };
      setCharacters((prev) => [...prev, newCharacter]);
    }

    setShowModal(false);
    resetForm();
  };

  const handleDeleteCharacter = (id: string) => {
    setCharacters((prev) => prev.filter((c) => c.id !== id));
  };

  const handleComplete = () => {
    if (characters.length > 0) {
      console.log("프로젝트 생성 완료:", { characters });
      router.push("/mypage/projects");
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="relative w-full max-w-lg bg-white min-h-screen flex flex-col">
        {/* 헤더 */}
        <header className="sticky top-0 z-20 bg-white">
          <div className="flex items-center gap-3 px-4 py-4">
            <button onClick={() => router.back()} className="w-10 h-10 flex items-center justify-center -ml-2">
              <ChevronLeftIcon className="w-6 h-6" style={{ color: "#191F28" }} />
            </button>
            <h1 className="text-lg font-semibold" style={{ color: "#191F28" }}>
              새 프로젝트 만들기
            </h1>
          </div>
        </header>

        {/* 메인 콘텐츠 */}
        <main className="flex-1 px-5 pb-32">
          {/* 안내 텍스트 */}
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2" style={{ color: "#191F28" }}>
              캐릭터를 등록해보세요
            </h2>
            <p className="text-sm" style={{ color: "#4E5968" }}>
              캐스팅할 배역을 추가하고 상세 정보를 입력해주세요.
            </p>
          </div>

          {/* 캐릭터 목록 또는 빈 상태 */}
          {characters.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "#F2F4F6" }}
              >
                <XCircleIcon className="w-12 h-12" style={{ color: "#D1D6DB" }} />
              </div>
              <p className="text-center text-sm" style={{ color: "#4E5968" }}>
                등록된 캐릭터가 없습니다.
                <br />
                아래 버튼을 눌러 새 캐릭터를 추가해보세요.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {characters.map((character, index) => (
                <div
                  key={character.id}
                  className="p-4 rounded-xl border"
                  style={{ borderColor: "#E5E8EB" }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium" style={{ color: "#4E5968" }}>
                          {String(index + 1).padStart(2, "0")} .
                        </span>
                        <span className="text-base font-semibold" style={{ color: "#191F28" }}>
                          {character.name}
                        </span>
                      </div>
                      <p className="text-sm mb-1" style={{ color: "#8B95A1" }}>
                        {character.ageRange} · {character.gender}
                      </p>
                      <span
                        className="inline-block px-2 py-0.5 rounded text-xs"
                        style={{ backgroundColor: "#F2F4F6", color: "#4E5968" }}
                      >
                        {character.roleType}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => openEditModal(character)}>
                        <PencilIcon className="w-5 h-5" style={{ color: "#6B7684" }} />
                      </button>
                      <button onClick={() => handleDeleteCharacter(character.id)}>
                        <XMarkIcon className="w-5 h-5" style={{ color: "#6B7684" }} />
                      </button>
                    </div>
                  </div>
                  {character.description && (
                    <p className="text-sm mt-2" style={{ color: "#8B95A1" }}>
                      {character.description}
                    </p>
                  )}
                </div>
              ))}

              {/* 캐릭터 추가 버튼 (목록 아래) */}
              <button
                onClick={openAddModal}
                className="w-full py-3 rounded-xl border border-dashed flex items-center justify-center gap-2"
                style={{ borderColor: "#E5E8EB", color: "#6B7684" }}
              >
                <span className="text-xl">+</span>
                <span className="text-sm font-medium">캐릭터 추가</span>
              </button>
            </div>
          )}
        </main>

        {/* 하단 버튼 */}
        <div className="fixed bottom-0 left-0 right-0 bg-white px-5 py-6 max-w-lg mx-auto">
          {characters.length === 0 ? (
            <button
              onClick={openAddModal}
              className="w-full py-4 rounded-xl font-medium"
              style={{ backgroundColor: "rgba(25, 31, 40, 0.3)", color: "#FFFFFF" }}
            >
              캐릭터 추가하기
            </button>
          ) : (
            <button
              onClick={handleComplete}
              className="w-full py-4 rounded-xl font-medium text-white"
              style={{ backgroundColor: "#191F28" }}
            >
              캐릭터 추가하기
            </button>
          )}
        </div>

        {/* 캐릭터 추가/수정 모달 */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50">
            <div className="w-full max-w-lg bg-white rounded-t-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-5">
                {/* 모달 헤더 */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold" style={{ color: "#191F28" }}>
                    {editingCharacter ? "캐릭터 수정" : "캐릭터 추가"}
                  </h3>
                  <button
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                  >
                    <XMarkIcon className="w-6 h-6" style={{ color: "#6B7684" }} />
                  </button>
                </div>

                {/* 캐릭터명 */}
                <div className="mb-4">
                  <label className="block text-sm mb-2" style={{ color: "#4E5968" }}>
                    캐릭터명
                  </label>
                  <input
                    type="text"
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                    placeholder="캐릭터명을 입력해주세요"
                    className="w-full px-4 py-3 rounded-xl border outline-none"
                    style={{ borderColor: "#E5E8EB", color: "#191F28" }}
                  />
                </div>

                {/* 성별 */}
                <div className="mb-4">
                  <label className="block text-sm mb-2" style={{ color: "#4E5968" }}>
                    성별
                  </label>
                  <div className="flex gap-2">
                    {genderOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setGender(option)}
                        className="flex-1 py-3 rounded-xl border text-sm font-medium transition-colors"
                        style={{
                          borderColor: gender === option ? "#191F28" : "#E5E8EB",
                          backgroundColor: gender === option ? "#191F28" : "#FFFFFF",
                          color: gender === option ? "#FFFFFF" : "#4E5968",
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 나이대 */}
                <div className="mb-4">
                  <label className="block text-sm mb-2" style={{ color: "#4E5968" }}>
                    나이대
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {ageRangeOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setAgeRange(option)}
                        className="px-4 py-2 rounded-full border text-sm font-medium transition-colors"
                        style={{
                          borderColor: ageRange === option ? "#191F28" : "#E5E8EB",
                          backgroundColor: ageRange === option ? "#191F28" : "#FFFFFF",
                          color: ageRange === option ? "#FFFFFF" : "#4E5968",
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 역할 유형 */}
                <div className="mb-4">
                  <label className="block text-sm mb-2" style={{ color: "#4E5968" }}>
                    역할 유형
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {roleTypeOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setRoleType(option)}
                        className="px-4 py-2 rounded-full border text-sm font-medium transition-colors"
                        style={{
                          borderColor: roleType === option ? "#191F28" : "#E5E8EB",
                          backgroundColor: roleType === option ? "#191F28" : "#FFFFFF",
                          color: roleType === option ? "#FFFFFF" : "#4E5968",
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 상세 설명 */}
                <div className="mb-6">
                  <label className="block text-sm mb-2" style={{ color: "#4E5968" }}>
                    캐릭터 상세 설명
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="캐릭터에 대한 상세 설명을 입력해주세요"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border outline-none resize-none"
                    style={{ borderColor: "#E5E8EB", color: "#191F28" }}
                  />
                </div>

                {/* 저장 버튼 */}
                <button
                  onClick={handleSaveCharacter}
                  disabled={!isFormValid}
                  className="w-full py-4 rounded-xl font-medium transition-colors"
                  style={{
                    backgroundColor: isFormValid ? "#191F28" : "rgba(25, 31, 40, 0.3)",
                    color: "#FFFFFF",
                  }}
                >
                  {editingCharacter ? "수정하기" : "추가하기"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

