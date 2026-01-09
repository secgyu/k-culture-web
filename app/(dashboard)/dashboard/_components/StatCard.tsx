import { memo, ReactNode } from "react";
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
        <div className={`w-12 h-12 rounded-xl ${iconBgColor} flex items-center justify-center`}>
          <div className={iconColor}>{icon}</div>
        </div>
        <div>
          <p className="text-sm text-muted-gray">{label}</p>
          <p className="text-2xl font-bold text-ivory">{value}</p>
        </div>
      </div>
    </DarkCard>
  );
});
