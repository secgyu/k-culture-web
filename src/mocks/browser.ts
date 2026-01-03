/**
 * MSW 브라우저 설정
 * 클라이언트 사이드에서 API 모킹을 위한 Service Worker 설정
 */

import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

