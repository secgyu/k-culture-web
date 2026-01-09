"use client";

import Link from "next/link";
import Image from "next/image";
import { DashboardLayout, DashboardLoadingState, DarkCard } from "@/components/common";
import { Button } from "@/components/ui";
import { PlusIcon, FolderIcon } from "@/components/common/Misc/Icons";
import { useGetProjects } from "@/src/projects/projects";
import { getThumbnailImageUrl } from "@/lib/constants/images";

const statusColors: Record<string, string> = {
  기획중: "bg-yellow-500/10 text-yellow-400",
  진행중: "bg-blue-500/10 text-blue-400",
  캐스팅완료: "bg-green-500/10 text-green-400",
};

export default function ProjectsPage() {
  const { data: projectsData, isLoading } = useGetProjects();
  const projects = projectsData?.data?.projects || [];

  if (isLoading) {
    return <DashboardLoadingState userType="agency" />;
  }

  return (
    <DashboardLayout userType="agency">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-ivory">프로젝트</h1>
            <p className="text-muted-gray mt-1">진행중인 프로젝트를 관리하세요</p>
          </div>
          <Link href="/projects/new">
            <Button variant="gold">
              <PlusIcon className="w-4 h-4 mr-1" /> 새 프로젝트
            </Button>
          </Link>
        </div>

        {projects.length === 0 ? (
          <DarkCard className="text-center py-16">
            <FolderIcon className="w-16 h-16 text-muted-gray mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-ivory mb-2">프로젝트가 없습니다</h2>
            <p className="text-muted-gray mb-6">새 프로젝트를 만들어 캐스팅을 시작하세요</p>
            <Link href="/projects/new">
              <Button variant="gold">
                <PlusIcon className="w-4 h-4 mr-1" /> 첫 프로젝트 만들기
              </Button>
            </Link>
          </DarkCard>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <DarkCard variant="hover" padding="none" className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={getThumbnailImageUrl(project.thumbnail)}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          statusColors[project.status] || statusColors["진행중"]
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-ivory mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-gray mb-3">{project.company}</p>

                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">캐스팅 진행률</span>
                        <span className="text-gold">{project.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-luxury-tertiary rounded-full overflow-hidden">
                        <div className="h-full bg-gold transition-all" style={{ width: `${project.progress}%` }} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{project.createdAt?.slice(0, 10)}</span>
                    </div>
                  </div>
                </DarkCard>
              </Link>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
