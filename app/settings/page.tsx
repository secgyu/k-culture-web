"use client";

import { useState } from "react";
import { DashboardLayout, DarkCard, GoldButton } from "@/app/components";
import { SettingsIcon, UserIcon, LogoutIcon } from "@/app/components/Icons";

export default function SettingsPage() {
  // 알림 설정 상태
  const [castingNotification, setCastingNotification] = useState(true);
  const [messageNotification, setMessageNotification] = useState(true);
  const [marketingNotification, setMarketingNotification] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      // TODO: API 연동
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("설정이 저장되었습니다");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      // TODO: 로그아웃 처리
      window.location.href = "/login";
    }
  };

  const handleDeleteAccount = () => {
    if (confirm("정말로 계정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")) {
      // TODO: 계정 삭제 처리
      window.location.href = "/";
    }
  };

  return (
    <DashboardLayout userType="actor">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* 헤더 */}
        <div>
          <h1 className="text-2xl font-bold text-ivory">설정</h1>
          <p className="text-zinc-400 mt-1">계정 및 알림 설정을 관리하세요</p>
        </div>

        {/* 계정 정보 */}
        <DarkCard>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ivory">계정 정보</h2>
              <p className="text-sm text-zinc-400">로그인 및 계정 관리</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-zinc-800">
              <div>
                <p className="text-ivory">이메일</p>
                <p className="text-sm text-zinc-400">actor@example.com</p>
              </div>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-zinc-800">
              <div>
                <p className="text-ivory">비밀번호</p>
                <p className="text-sm text-zinc-400">••••••••</p>
              </div>
              <GoldButton variant="ghost" size="sm">
                변경
              </GoldButton>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-ivory">회원 유형</p>
                <p className="text-sm text-zinc-400">배우</p>
              </div>
            </div>
          </div>
        </DarkCard>

        {/* 알림 설정 */}
        <DarkCard>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
              <SettingsIcon className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ivory">알림 설정</h2>
              <p className="text-sm text-zinc-400">알림 수신 설정</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-zinc-800">
              <div>
                <p className="text-ivory">캐스팅 알림</p>
                <p className="text-sm text-zinc-400">섭외 요청 및 캐스팅 관련 알림</p>
              </div>
              <button
                onClick={() => setCastingNotification(!castingNotification)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  castingNotification ? "bg-gold" : "bg-zinc-700"
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                    castingNotification ? "left-7" : "left-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-zinc-800">
              <div>
                <p className="text-ivory">메시지 알림</p>
                <p className="text-sm text-zinc-400">새 메시지 수신 알림</p>
              </div>
              <button
                onClick={() => setMessageNotification(!messageNotification)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  messageNotification ? "bg-gold" : "bg-zinc-700"
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                    messageNotification ? "left-7" : "left-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-ivory">마케팅 알림</p>
                <p className="text-sm text-zinc-400">이벤트 및 프로모션 알림</p>
              </div>
              <button
                onClick={() => setMarketingNotification(!marketingNotification)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  marketingNotification ? "bg-gold" : "bg-zinc-700"
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                    marketingNotification ? "left-7" : "left-1"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="mt-6">
            <GoldButton fullWidth loading={loading} onClick={handleSave}>
              설정 저장
            </GoldButton>
          </div>
        </DarkCard>

        {/* 위험 영역 */}
        <DarkCard className="border-red-500/30">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
              <LogoutIcon className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ivory">계정 관리</h2>
              <p className="text-sm text-zinc-400">로그아웃 및 계정 삭제</p>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleLogout}
              className="w-full py-3 text-left text-zinc-300 hover:text-ivory transition-colors"
            >
              로그아웃
            </button>
            <button
              onClick={handleDeleteAccount}
              className="w-full py-3 text-left text-red-400 hover:text-red-300 transition-colors"
            >
              계정 삭제
            </button>
          </div>
        </DarkCard>
      </div>
    </DashboardLayout>
  );
}

