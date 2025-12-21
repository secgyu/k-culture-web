# 페이지 리팩토링 진행 상황

## 목표

- 각 페이지를 React Query(클라이언트 페칭)로 변환
- 서버 컴포넌트와 클라이언트 컴포넌트 분리 (나중 SSR/prefetch 대비)

## 컴포넌트 분리 패턴

```
app/[feature]/
├── _components/
│   ├── Icons.tsx           # 공통 아이콘
│   ├── [Feature]Content.tsx  # 목록/메인 클라이언트 컴포넌트
│   ├── [Feature]Form.tsx     # 폼 클라이언트 컴포넌트
│   └── index.ts              # export
├── page.tsx                  # 서버 컴포넌트 (클라이언트 컴포넌트 렌더링만)
└── [subpage]/
    └── page.tsx              # 서버 컴포넌트
```

---

## ✅ 완료된 작업

### 1. `/mypage` 메인 페이지

- [x] `ProfileSection.tsx` - useGetMyProfile
- [x] `FilmographySection.tsx` - useGetMyProfile + useGetActorFilmography
- [ ] `SkillsSection.tsx` - (아직 mock 데이터)
- [x] `ShowreelSection.tsx` - useGetMyProfile + useGetActorShowreels

### 2. `/mypage/filmography` 필모그래피 관리

- [x] `FilmographyManageContent.tsx` 생성
- [x] useGetMyProfile (actorId 조회)
- [x] useGetActorFilmography (목록 조회)
- [x] useDeleteFilmography (삭제)
- [x] `FilmographyEditForm.tsx` 생성
- [x] useGetFilmographyDetail (상세 조회)
- [x] useUpdateFilmography (수정)

### 3. `/mypage/settings` 설정 페이지

- [x] `SettingsContent.tsx` 생성
- [x] useGetMyProfile (프로필 조회)
- [x] useGetNotificationSettings (알림 설정 조회)
- [x] useUpdateNotificationSettings (알림 설정 수정)
- [x] `ProfileEditForm.tsx` 생성
- [x] useUpdateMyProfile (프로필 수정)

### 4. `/mypage/showreel` 쇼릴 관리

- [x] `ShowreelEditContent.tsx` 생성
- [x] useGetMyProfile (actorId 조회)
- [x] useCreateShowreel (쇼릴 생성)
- [ ] useGetActorShowreels 연동 (목록 관리 페이지 없음)
- [ ] useDeleteShowreel 연동 (목록 관리 페이지 없음)

### 5. `/mypage/projects` 프로젝트 관리

- [x] `ProjectsContent.tsx` 생성
- [x] useGetProjects 연동

### 6. `/mypage/projects/new` 프로젝트 생성

- [x] `ProjectCreateForm.tsx` 생성
- [x] useCreateProject 연동

### 7. `/mypage/projects/new/characters` 캐릭터 관리

- [x] `CharactersContent.tsx` 생성
- [x] useGetProjectCharacters 연동
- [x] useDeleteCharacter 연동
- [x] `CharacterAddForm.tsx` 생성
- [x] useCreateCharacter 연동

### 8. `/recommend` 추천 페이지

- [x] `RecommendContent.tsx` 생성
- [x] useRecommendActors 연동 (AI 배우 추천)

### 9. `/actors/[id]` 배우 상세 페이지

- [x] `ActorDetailContent.tsx` 생성
- [x] useGetActorDetail 연동
- [x] useContactActor 연동
- [x] useDownloadActorPortfolio 연동
- [ ] useAddFavorite 연동 (UI에 즐겨찾기 버튼 없음)
- [ ] useRemoveFavorite 연동 (UI에 즐겨찾기 버튼 없음)

### 10. `/` 메인 페이지

- [x] `OnboardingContent.tsx` 생성 (온보딩/랜딩 UI)
- [ ] useGetActors 연동 (현재 디자인이 온보딩 페이지라 불필요)

---

## 사용 가능한 API Hooks (src/ 폴더)

| 파일                             | 주요 Hooks                                                                                                        |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `src/users/users.ts`             | useGetMyProfile, useUpdateMyProfile, useGetNotificationSettings, useUpdateNotificationSettings                    |
| `src/filmography/filmography.ts` | useGetActorFilmography, useGetFilmographyDetail, useCreateFilmography, useUpdateFilmography, useDeleteFilmography |
| `src/showreels/showreels.ts`     | useGetActorShowreels, useCreateShowreel, useDeleteShowreel                                                        |
| `src/projects/projects.ts`       | useGetProjects, useCreateProject, useGetProjectDetail                                                             |
| `src/characters/characters.ts`   | useGetProjectCharacters, useCreateCharacter, useDeleteCharacter                                                   |
| `src/actors/actors.ts`           | useGetActors, useGetActorDetail, useRecommendActors, useContactActor, useDownloadActorPortfolio                   |
| `src/favorites/favorites.ts`     | useGetFavorites, useAddFavorite, useRemoveFavorite                                                                |
| `src/auth/auth.ts`               | useLogin, useSignup, useLogout                                                                                    |

---

## 참고사항

- 모든 API hooks는 orval로 자동 생성됨 (`src/` 폴더)
- 모델 타입은 `src/model/` 폴더에 있음
- MSW mock handlers는 각 `*.msw.ts` 파일에 정의됨
