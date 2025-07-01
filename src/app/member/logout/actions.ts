'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { unsetSessionAll } from '@/lib/redis';

const SESSION_ID_COOKIE_NAME = process.env.SESSION_ID_COOKIE_NAME || 'sessionId';

export async function logoutAction() {
  try {
    // 세션 데이터 삭제
    await unsetSessionAll();
    
    // 쿠키 삭제
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_ID_COOKIE_NAME);
  } catch (error) {
    console.error('로그아웃 오류:', error);
  }

  redirect('/');
} 