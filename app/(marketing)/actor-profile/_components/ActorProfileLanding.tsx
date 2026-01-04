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

      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
