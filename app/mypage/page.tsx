import { ProfileSection } from "./_components/ProfileSection";
import { FilmographySection } from "./_components/FilmographySection";
import { SkillsSection } from "./_components/SkillsSection";
import { ShowreelSection } from "./_components/ShowreelSection";
import { PromoSection } from "./_components/PromoSection";
import { BottomNav } from "./_components/BottomNav";

export default function MyPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="relative w-full max-w-lg bg-white min-h-screen pb-24 border-x border-gray-200">
        <ProfileSection />
        <FilmographySection />
        <SkillsSection />
        <ShowreelSection />
        <PromoSection />
        <BottomNav />
      </div>
    </div>
  );
}
