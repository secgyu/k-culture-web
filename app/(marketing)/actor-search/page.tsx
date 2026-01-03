import { Suspense } from "react";
import { ActorSearchContent } from "./_components/ActorSearchContent";

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-luxury-black flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-border border-t-gold rounded-full animate-spin" />
    </div>
  );
}

export default function ActorSearchPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ActorSearchContent />
    </Suspense>
  );
}
