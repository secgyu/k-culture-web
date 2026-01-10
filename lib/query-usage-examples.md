# React Query 캐싱 전략 사용 가이드

이 문서는 프로젝트에서 React Query를 효과적으로 사용하는 방법을 설명합니다.

## 1. Query Key Factory 사용법

`lib/query-keys.ts`에 정의된 Query Key Factory를 사용하여 일관된 쿼리 키를 생성합니다.

### 기본 사용 예시

```typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { CACHE_TIMES } from "@/lib/query-client";
import { invalidateKeys, queryKeys } from "@/lib/query-keys";

// 1. 단일 배우 조회 (자주 변하지 않는 데이터)
function useActor(id: string) {
  return useQuery({
    queryKey: queryKeys.actors.detail(id),
    queryFn: () => fetchActor(id),
    staleTime: CACHE_TIMES.LONG, // 30분
  });
}

// 2. 배우 목록 조회 (필터 포함)
function useActorList(filters?: { gender?: string; ageMin?: number }) {
  return useQuery({
    queryKey: queryKeys.actors.list(filters),
    queryFn: () => fetchActorList(filters),
    staleTime: CACHE_TIMES.MEDIUM, // 5분 (기본값)
  });
}

// 3. 대시보드 통계 (실시간 데이터)
function useDashboardStats(userType?: string) {
  return useQuery({
    queryKey: queryKeys.dashboard.stats(userType),
    queryFn: () => fetchDashboardStats(userType),
    staleTime: CACHE_TIMES.SHORT, // 1분
    refetchInterval: CACHE_TIMES.SHORT, // 1분마다 자동 갱신
  });
}

// 4. 사용자 프로필 (거의 변하지 않는 데이터)
function useMyProfile() {
  return useQuery({
    queryKey: queryKeys.profile.me(),
    queryFn: () => fetchMyProfile(),
    staleTime: CACHE_TIMES.VERY_LONG, // 1시간
  });
}
```

## 2. Mutation과 Cache Invalidation

Mutation 이후 관련된 쿼리 캐시를 무효화하여 최신 데이터를 표시합니다.

### 예시 1: 찜하기 기능

```typescript
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { invalidateKeys } from "@/lib/query-keys";

function useFavoriteActor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (actorId: string) => addToFavorites(actorId),
    onSuccess: () => {
      // 찜 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: invalidateKeys.favorites() });

      // 대시보드 통계도 업데이트 (찜 개수 변경)
      queryClient.invalidateQueries({ queryKey: invalidateKeys.dashboard() });
    },
  });
}
```

### 예시 2: 프로필 수정

```typescript
function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ProfileUpdateData) => updateProfile(data),
    onMutate: async (newData) => {
      // 낙관적 업데이트: 즉시 UI에 반영
      await queryClient.cancelQueries({ queryKey: queryKeys.profile.me() });

      const previousProfile = queryClient.getQueryData(queryKeys.profile.me());

      queryClient.setQueryData(queryKeys.profile.me(), (old: any) => ({
        ...old,
        ...newData,
      }));

      return { previousProfile };
    },
    onError: (err, newData, context) => {
      // 에러 발생시 이전 데이터로 롤백
      if (context?.previousProfile) {
        queryClient.setQueryData(queryKeys.profile.me(), context.previousProfile);
      }
    },
    onSuccess: () => {
      // 성공시 프로필 캐시 무효화 (서버 데이터로 갱신)
      queryClient.invalidateQueries({ queryKey: invalidateKeys.profile() });
    },
  });
}
```

### 예시 3: 프로젝트 생성

```typescript
function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateProjectData) => createProject(data),
    onSuccess: (newProject) => {
      // 프로젝트 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: invalidateKeys.projects() });

      // 새로운 프로젝트를 캐시에 추가 (재조회 방지)
      queryClient.setQueryData(queryKeys.projects.detail(newProject.id), newProject);
    },
  });
}
```

## 3. 캐시 시간 전략

### CACHE_TIMES 상수

```typescript
import { CACHE_TIMES } from "@/lib/query-client";

// SHORT (1분): 실시간 통계, 알림 등
staleTime: CACHE_TIMES.SHORT;

// MEDIUM (5분): 목록, 검색 결과 등
staleTime: CACHE_TIMES.MEDIUM;

// LONG (30분): 프로필, 상세 정보 등
staleTime: CACHE_TIMES.LONG;

// VERY_LONG (1시간): 상수, 옵션 등
staleTime: CACHE_TIMES.VERY_LONG;
```

### 데이터 특성에 따른 전략

| 데이터 유형        | 추천 staleTime    | 예시                       |
| ------------------ | ----------------- | -------------------------- |
| 실시간 데이터      | SHORT (1분)       | 대시보드 통계, 알림 카운트 |
| 사용자 생성 컨텐츠 | MEDIUM (5분)      | 프로젝트 목록, 배우 목록   |
| 프로필 데이터      | LONG (30분)       | 사용자 프로필, 배우 상세   |
| 정적 데이터        | VERY_LONG (1시간) | 옵션 목록, 카테고리        |

## 4. 특수 케이스

### 페이지네이션 with prefetch

```typescript
function useActorListWithPrefetch(page: number) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: queryKeys.actors.list({ page }),
    queryFn: () => fetchActorList({ page }),
    staleTime: CACHE_TIMES.MEDIUM,
  });

  // 다음 페이지 미리 로드
  useEffect(() => {
    if (query.data?.hasNextPage) {
      queryClient.prefetchQuery({
        queryKey: queryKeys.actors.list({ page: page + 1 }),
        queryFn: () => fetchActorList({ page: page + 1 }),
        staleTime: CACHE_TIMES.MEDIUM,
      });
    }
  }, [page, query.data, queryClient]);

  return query;
}
```

### 의존적 쿼리

```typescript
function useProjectWithActors(projectId: string) {
  // 프로젝트 정보 먼저 로드
  const { data: project } = useQuery({
    queryKey: queryKeys.projects.detail(projectId),
    queryFn: () => fetchProject(projectId),
    staleTime: CACHE_TIMES.LONG,
  });

  // 프로젝트에 속한 배우들 로드 (프로젝트 로드 완료 후)
  const { data: actors } = useQuery({
    queryKey: queryKeys.actors.list({ projectId }),
    queryFn: () => fetchActorsByProject(projectId),
    enabled: !!project, // 프로젝트 로드 완료시에만 실행
    staleTime: CACHE_TIMES.MEDIUM,
  });

  return { project, actors };
}
```

### 무한 스크롤

```typescript
import { useInfiniteQuery } from "@tanstack/react-query";

function useInfiniteActorList(filters?: Record<string, unknown>) {
  return useInfiniteQuery({
    queryKey: queryKeys.actors.list(filters),
    queryFn: ({ pageParam = 1 }) => fetchActorList({ ...filters, page: pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: CACHE_TIMES.MEDIUM,
    initialPageParam: 1,
  });
}
```

## 5. 스마트 재시도 로직

기본 설정에 포함된 스마트 재시도 로직:

- **4xx 에러 (클라이언트 에러)**: 재시도하지 않음
  - 400 Bad Request, 401 Unauthorized, 404 Not Found 등
  - 재시도해도 결과가 동일하므로 즉시 실패 처리

- **5xx 에러 (서버 에러)**: 최대 2회 재시도
  - 500 Internal Server Error, 503 Service Unavailable 등
  - 일시적 서버 문제일 수 있으므로 재시도

- **네트워크 에러**: 최대 2회 재시도
  - 연결 실패, 타임아웃 등
  - 네트워크 복구 가능성 있으므로 재시도

## 6. 권장사항

1. **항상 Query Key Factory 사용**: 직접 문자열 배열을 사용하지 말고 `queryKeys`에서 가져오기
2. **적절한 staleTime 설정**: 데이터 특성에 맞는 캐시 시간 선택
3. **Mutation 후 Invalidation**: 데이터 변경 후 관련 캐시 무효화
4. **낙관적 업데이트 활용**: 즉각적인 UI 반응성 제공
5. **Prefetch 활용**: 사용자 경험 향상을 위한 선제적 데이터 로드
6. **Error Boundary 활용**: 쿼리 에러를 적절히 처리

## 7. 디버깅

### React Query Devtools 사용

```typescript
// app/providers.tsx
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

### 캐시 상태 확인

```typescript
const queryClient = useQueryClient();

// 특정 쿼리의 캐시 데이터 확인
const cachedData = queryClient.getQueryData(queryKeys.actors.detail("123"));

// 캐시 상태 확인
const queryState = queryClient.getQueryState(queryKeys.actors.detail("123"));
console.log("stale:", queryState?.isInvalidated);
console.log("fetching:", queryState?.isFetching);
```
