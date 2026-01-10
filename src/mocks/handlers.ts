/**
 * MSW 핸들러 모음
 * orval로 생성된 mock 핸들러 + 커스텀 오버라이드
 */
import { getActorsMock } from "../actors/actors.msw";
import { getAgenciesMock } from "../agencies/agencies.msw";
import { getAuthMock } from "../auth/auth.msw";
import { getCharactersMock } from "../characters/characters.msw";
import { getDashboardMock } from "../dashboard/dashboard.msw";
import { getFavoritesMock } from "../favorites/favorites.msw";
import { getFilmographyMock } from "../filmography/filmography.msw";
import { getJobsMock } from "../jobs/jobs.msw";
import { getNoticesMock } from "../notices/notices.msw";
import { getNotificationsMock } from "../notifications/notifications.msw";
import { getProjectsMock } from "../projects/projects.msw";
import { getShowreelsMock } from "../showreels/showreels.msw";
import { getUploadMock } from "../upload/upload.msw";
import { getUsersMock } from "../users/users.msw";

export const handlers = [
  ...getActorsMock(),
  ...getAgenciesMock(),
  ...getAuthMock(),
  ...getCharactersMock(),
  ...getDashboardMock(),
  ...getFavoritesMock(),
  ...getFilmographyMock(),
  ...getJobsMock(),
  ...getNoticesMock(),
  ...getNotificationsMock(),
  ...getProjectsMock(),
  ...getShowreelsMock(),
  ...getUploadMock(),
  ...getUsersMock(),
];
