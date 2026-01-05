"use client";

import { DashboardLayout } from "@/components/common";
import { useGetMyProfile } from "@/src/users/users";
import { ActorDashboard, AgencyDashboard } from "./_components";

export default function DashboardPage() {
  const { data: profileData } = useGetMyProfile();
  const userType = profileData?.data?.type || "actor";

  return (
    <DashboardLayout userType={userType}>
      {userType === "actor" ? <ActorDashboard /> : <AgencyDashboard />}
    </DashboardLayout>
  );
}
