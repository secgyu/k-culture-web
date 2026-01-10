import { Suspense } from "react";

import { Spinner } from "@/components/ui";

import { ActorSearchContent } from "./_components/ActorSearchContent";

function LoadingFallback() {
  return (
    <div className="bg-luxury-black flex min-h-screen items-center justify-center">
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
