"use client";

import { useState } from "react";
import { LandingHeader } from "@/components/common";
import { CompareFloatingBar, CompareModal } from "@/components/features/compare";
import { FilterSidebar, FilterBottomSheet, FilterFloatingButton, SortDropdown, SortButton, SortBottomSheet } from "@/components/features/search";
import { useActorSearch } from "./useActorSearch";
import { ActorSearchHeader } from "./ActorSearchHeader";
import { ActorGrid } from "./ActorGrid";

export function ActorSearchContent() {
  const { actors, pagination, isLoading, isAuthenticated } = useActorSearch();
  const [isSortSheetOpen, setIsSortSheetOpen] = useState(false);

  return (
    <div className="min-h-screen bg-luxury-black">
      <LandingHeader currentPath="/actor-search" />

      <main className="max-w-screen-2xl mx-auto px-4 lg:px-6 pt-6 pb-24">
        <ActorSearchHeader isAuthenticated={isAuthenticated} />

        <div className="flex gap-8">
          <FilterSidebar />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <p className="text-body-sm text-muted-gray">
                <span className="text-ivory font-semibold">{pagination?.total || actors.length}</span>명의 배우·모델
              </p>
              <div className="hidden lg:block">
                <SortDropdown />
              </div>
            </div>

            <ActorGrid actors={actors} isLoading={isLoading} isAuthenticated={isAuthenticated} />
          </div>
        </div>
      </main>

      <div className="lg:hidden fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <SortButton onClick={() => setIsSortSheetOpen(true)} />
        <FilterFloatingButton />
      </div>

      <FilterBottomSheet />
      <SortBottomSheet isOpen={isSortSheetOpen} onClose={() => setIsSortSheetOpen(false)} />
      <CompareFloatingBar />
      <CompareModal />
    </div>
  );
}
