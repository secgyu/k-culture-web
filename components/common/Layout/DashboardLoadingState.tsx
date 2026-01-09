import { DashboardLayout } from "./DashboardLayout";
import { SPINNER } from "@/lib/constants/styles";

interface DashboardLoadingStateProps {
  userType?: "actor" | "agency";
  height?: string;
}

export function DashboardLoadingState({ userType = "actor", height = "h-64" }: DashboardLoadingStateProps) {
  return (
    <DashboardLayout userType={userType}>
      <div className={`flex items-center justify-center ${height}`}>
        <div className={SPINNER.MEDIUM} />
      </div>
    </DashboardLayout>
  );
}