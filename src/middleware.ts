import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';

const SESSION_ID_COOKIE_NAME = process.env.SESSION_ID_COOKIE_NAME || 'sessionId';
const SESSION_TTL = process.env.SESSION_TTL ? parseInt(process.env.SESSION_TTL, 10) : 60 * 60 * 24; // 24시간
const secret = process.env.SESSION_SECRET || 'my-secret';
const SESSION_PLAIN_COOKIE_NAME = process.env.SESSION_PLAIN_COOKIE_NAME || 'psid';

// 회원 전용 URL 목록
const memberOnlyPaths = [/^\/board\/write/];

function encryptSessionId(sessionId: string) {
  return crypto.createHmac('sha256', secret).update(sessionId).digest('hex');
}

function encodeBase64(str: string) {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(str, 'utf-8').toString('base64');
  }
  // Edge 환경 호환: btoa 사용 (단, ascii만 지원)
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch {
    return '';
  }
}

export function middleware(request: NextRequest) {
  let sessionId = request.cookies.get(SESSION_ID_COOKIE_NAME)?.value;

  if (!sessionId) {
    sessionId = uuidv4();
    const response = NextResponse.next();
    response.cookies.set(SESSION_ID_COOKIE_NAME, sessionId, {
      httpOnly: true,
      sameSite: 'strict',
      path: '/',
    });
  }

  // 회원 전용 URL 접근 시 로그인(쿠키) 체크
  const { pathname } = request.nextUrl;
  const isMemberOnly = memberOnlyPaths.some((regex) => regex.test(pathname));
  if (isMemberOnly) {
    const plainSessionId = request.cookies.get(SESSION_PLAIN_COOKIE_NAME)?.value;
    const encodedSessionId = request.cookies.get(SESSION_ID_COOKIE_NAME)?.value;
    if (!plainSessionId || !encodedSessionId || encodeBase64(plainSessionId) !== encodedSessionId) {
      const url = request.nextUrl.clone();
      url.pathname = '/member/login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 