import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { customFetch } from "@/lib/fetcher";

export interface ActorProfile {
  id: string;
  email: string;
  name: string;
  stageName: string | null;
  profileImage: string | null;
  birthYear: number | null;
  introduction: string | null;
  nationality: string | null;
  height: number | null;
  weight: number | null;
  skills: string[] | null;
  languages: string[] | null;
  agency: string | null;
  isProfileComplete: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateActorProfileRequest {
  stageName?: string;
  birthYear?: number;
  introduction?: string;
  nationality?: string;
  height?: number;
  weight?: number;
  skills?: string[];
  languages?: string[];
  agency?: string;
}

const ACTOR_PROFILE_KEY = ["actor", "me"];

async function fetchActorProfile(): Promise<{ data: ActorProfile; success: boolean }> {
  return customFetch<{ data: ActorProfile; success: boolean }>({
    url: "/api/actors/me",
    method: "GET",
  });
}

async function updateActorProfile(
  data: UpdateActorProfileRequest
): Promise<{ data: ActorProfile; success: boolean }> {
  return customFetch<{ data: ActorProfile; success: boolean }>({
    url: "/api/actors/me",
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data,
  });
}

export function useActorProfile() {
  return useQuery({
    queryKey: ACTOR_PROFILE_KEY,
    queryFn: fetchActorProfile,
    retry: false,
  });
}

export function useUpdateActorProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateActorProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ACTOR_PROFILE_KEY });
    },
  });
}
