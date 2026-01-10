import { memo } from "react";
import { Spinner, EmptyState } from "@/components/ui";
import { ActorCard } from "./ActorCard";

interface Actor {
  id: string;
  name: string;
  imageUrl?: string;
  age?: string;
  filmography?: number;
  tags?: string[];
}

interface ActorGridProps {
  actors: Actor[];
  isLoading: boolean;
  isAuthenticated: boolean;
}

export const ActorGrid = memo(function ActorGrid({ actors, isLoading, isAuthenticated }: ActorGridProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Spinner size="lg" />
      </div>
    );
  }

  if (actors.length === 0) {
    return <EmptyState description="등록된 배우가 없습니다" />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
      {actors.map((actor, index) => (
        <ActorCard key={actor.id} actor={actor} isBlurred={!isAuthenticated && index >= 4} />
      ))}
    </div>
  );
});
