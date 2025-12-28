import { redirect } from "next/navigation";

export default function ProfileRegisterPage() {
  // 기존 /profile-register 경로는 /signup으로 리다이렉트
  redirect("/signup?type=actor");
}
