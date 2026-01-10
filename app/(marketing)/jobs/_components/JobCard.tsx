"use client";

import { memo } from "react";
import { Badge, Card } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { JobSummary } from "@/src/model";

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    단편영화: "text-green-400 border-green-400/20",
    장편영화: "text-gold border-gold/20",
    웹드라마: "text-blue-400 border-blue-400/20",
    광고: "text-yellow-400 border-yellow-400/20",
    기타: "text-muted-gray border-muted-gray/20",
  };
  return colors[category] || colors["기타"];
};

interface JobCardProps {
  job: JobSummary;
}

export const JobCard = memo(function JobCard({ job }: JobCardProps) {
  return (
    <Card className="bg-luxury-black/80 hover:border-muted-gray transition-all cursor-pointer">
      <div className="p-6">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="outline" className={cn("font-medium", getCategoryColor(job.category))}>
                {job.category}
              </Badge>
              {job.isPumasi ? (
                <span className="flex items-center gap-1 text-gold text-sm">💜 품앗이</span>
              ) : (
                <span className="flex items-center gap-1 text-yellow-400 text-sm">
                  💰 {job.price?.toLocaleString()} 원
                </span>
              )}
            </div>

            <h3 className="text-white font-medium text-lg mb-3 line-clamp-2">{job.title}</h3>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-luxury-secondary text-warm-gray">
                {job.gender}
              </Badge>
              <Badge variant="secondary" className="bg-luxury-secondary text-muted-gray">
                제작: {job.production}
              </Badge>
              <Badge variant="secondary" className="bg-luxury-secondary text-muted-gray">
                작품: {job.workTitle}
              </Badge>
            </div>
          </div>

          <div className="text-right">
            <p className="text-yellow-500 font-medium mb-1">{job.status}</p>
            <p className="text-muted-gray text-sm">조회 : {job.views}</p>
          </div>
        </div>
      </div>
    </Card>
  );
});
