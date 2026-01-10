import { ReactNode, memo } from "react";

import { DarkCard } from "@/components/common";

interface StatCardProps {
  icon: ReactNode;
  iconBgColor: string;
  iconColor: string;
  label: string;
  value: number | string;
}

export const StatCard = memo(function StatCard({ icon, iconBgColor, iconColor, label, value }: StatCardProps) {
  return (
    <DarkCard>
      <div className="flex items-center gap-4">
        <div className={`h-12 w-12 rounded-xl ${iconBgColor} flex items-center justify-center`}>
          <div className={iconColor}>{icon}</div>
        </div>
        <div>
          <p className="text-muted-gray text-sm">{label}</p>
          <p className="text-ivory text-2xl font-bold">{value}</p>
        </div>
      </div>
    </DarkCard>
  );
});
