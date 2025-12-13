"use client";

import { useState } from "react";
import Link from "next/link";

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isValid = email.length > 0 && password.length > 0;

  const handleLogin = () => {
    if (!isValid) return;
    console.log("로그인:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="relative w-full max-w-lg bg-white min-h-screen flex flex-col border-x border-gray-200">
        {/* Logo/Title */}
        <div className="px-8 pt-44 pb-24">
          <h1 className="text-5xl font-bold text-[#191F28] tracking-tight">배우담</h1>
        </div>

        {/* Form */}
        <div className="flex-1 px-8">
          <div className="space-y-0">
            {/* Email Field */}
            <div className="py-5 border-b border-[#E5E8EB]">
              <input
                type="email"
                placeholder="이메일 주소 입력"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-base text-[#191F28] placeholder-[#8B95A1] bg-transparent focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div className="py-5 border-b border-[#E5E8EB] flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호 입력"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 text-base text-[#191F28] placeholder-[#8B95A1] bg-transparent focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-[#6B7684] hover:text-[#4E5968]"
              >
                {showPassword ? (
                  <EyeOffIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Login Button */}
            <div className="pt-8">
              <button
                onClick={handleLogin}
                disabled={!isValid}
                className={`w-full h-14 text-base font-semibold rounded-2xl transition-all ${
                  isValid
                    ? "bg-[#191F28] hover:bg-[#2d3540] text-white"
                    : "bg-[#191F28] text-white opacity-100"
                }`}
              >
                로그인
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center justify-center mt-6">
            <Link href="/signup" className="text-sm text-[#4E5968] hover:text-[#191F28] px-6">
              회원가입
            </Link>
            <span className="text-[#E5E8EB]">|</span>
            <Link href="/forgot-password" className="text-sm text-[#4E5968] hover:text-[#191F28] px-6">
              비밀번호 찾기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
