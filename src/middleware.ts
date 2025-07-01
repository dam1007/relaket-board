import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const SESSION_ID_COOKIE_NAME = process.env.SESSION_ID_COOKIE_NAME || 'sessionId';
const SESSION_TTL = process.env.SESSION_TTL ? parseInt(process.env.SESSION_TTL, 10) : 60 * 60 * 24; // 24시간

// 회원 전용 URL 목록
const memberOnlyPaths = [/^\/board\/write/];

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
    // 회원 전용 URL 접근 시 리다이렉트 체크를 위해 아래에서 계속 진행
    // return response;
  }

  // 회원 전용 URL 접근 시 로그인(쿠키) 체크
  const { pathname } = request.nextUrl;
  const isMemberOnly = memberOnlyPaths.some((regex) => regex.test(pathname));
  if (isMemberOnly && !sessionId) {
    const url = request.nextUrl.clone();
    url.pathname = '/member/only';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 