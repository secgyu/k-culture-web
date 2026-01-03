/**
 * MSW 모킹 모듈 진입점
 */

export { handlers } from './handlers';

/**
 * MSW 초기화 함수
 * 브라우저 환경에서만 실행됩니다.
 */
export async function initMocks() {
  if (typeof window === 'undefined') {
    return;
  }

  const { worker } = await import('./browser');
  await worker.start({
    onUnhandledRequest: 'bypass',
  });
}
