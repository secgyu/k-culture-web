"use client";

import {
  HeroSection,
  IntroSection,
  FeatureRegistrationSection,
  FeatureLinkShareSection,
  CastingDirectorSection,
  DirectorSection,
  CTASection,
  Footer,
} from "./sections";

export function ActorProfileLanding() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <FeatureRegistrationSection />
      <FeatureLinkShareSection />
      <CastingDirectorSection />
      <DirectorSection />
      <CTASection />
      <Footer />
    </div>
  );
}
