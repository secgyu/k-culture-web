"use client";

import {
  CTASection,
  CastingDirectorSection,
  DirectorSection,
  FeatureLinkShareSection,
  FeatureRegistrationSection,
  Footer,
  HeroSection,
  IntroSection,
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
