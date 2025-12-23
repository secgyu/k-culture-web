import { PageLayout } from "@/app/components/PageLayout";
import { ProfileSection } from "./_components/ProfileSection";
import { FilmographySection } from "./_components/FilmographySection";
import { SkillsSection } from "./_components/SkillsSection";
import { ShowreelSection } from "./_components/ShowreelSection";
import { PromoSection } from "./_components/PromoSection";
import { BottomNav } from "./_components/BottomNav";

export default function MyPage() {
  return (
    <PageLayout className="pb-24">
      <ProfileSection />
      <FilmographySection />
      <SkillsSection />
      <ShowreelSection />
      <PromoSection />
      <BottomNav />
    </PageLayout>
  );
}
