import { Suspense } from "react";
import { ActorSearchContent } from "./_components/ActorSearchContent";
import { Spinner } from "@/components/ui";

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-luxury-black flex items-center justify-center">
      <Spinner size="md" />
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
