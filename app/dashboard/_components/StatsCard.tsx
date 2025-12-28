"use client";

interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  change?: number; // 증감률 (%)
  isNew?: boolean;
}

export function StatsCard({ icon, label, value, change, isNew }: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative">
      {/* 새 알림 표시 */}
      {isNew && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
      )}

      {/* 아이콘 */}
      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-3">
        {icon}
      </div>

      {/* 라벨 */}
      <p className="text-sm text-gray-500 mb-1">{label}</p>

      {/* 값 */}
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</span>
        {change !== undefined && change !== 0 && (
          <span
            className={`text-sm font-medium ${
              change > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {change > 0 ? "+" : ""}{change}%
          </span>
        )}
      </div>
    </div>
  );
}

