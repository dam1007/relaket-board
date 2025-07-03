'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import knex from '@/lib/knex';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { setSession, unsetSessionAll } from '@/lib/redis';
import crypto from 'crypto';

const SESSION_ID_COOKIE_NAME = process.env.SESSION_ID_COOKIE_NAME || 'sessionId';
const SESSION_TTL = process.env.SESSION_TTL ? parseInt(process.env.SESSION_TTL, 10) : 60 * 60 * 24; // 24시간
const SESSION_PLAIN_COOKIE_NAME = process.env.SESSION_PLAIN_COOKIE_NAME || 'psid';

const secret = process.env.SESSION_SECRET || 'my-secret';
function encryptSessionId(sessionId: string) {
  return crypto.createHmac('sha256', secret).update(sessionId).digest('hex');
}

function encodeBase64(str: string) {
  return Buffer.from(str, 'utf-8').toString('base64');
}

export async function loginAction(prevState: any, formData: FormData) {
  const userId = formData.get('userId') as string;
  const password = formData.get('password') as string;

  if (!userId || !password) {
    return { error: '아이디와 비밀번호를 모두 입력해주세요.', fields: { userId } };
  }

  try {
    const user = await knex('relaket_user').where({ user_id: userId }).first();

    if (!user) {
      return { error: '아이디 또는 비밀번호가 일치하지 않습니다.', fields: { userId } };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return { error: '아이디 또는 비밀번호가 일치하지 않습니다.', fields: { userId } };
    }

    // 이전 익명 세션을 삭제 (세션 고정 공격 방지 강화)
    await unsetSessionAll();

    // 로그인 성공: 새로운 세션 생성 및 쿠키 설정
    const newSessionId = uuidv4();
    const encodedSessionId = encodeBase64(newSessionId);
    const sessionData = {
      id: user.id,
      userId: user.user_id,
      userName: user.user_name,
    };

    // 새로운 세션 ID로 쿠키 설정 (plain + base64 인코딩 쌍)
    const cookieStore = await cookies();
    cookieStore.set(SESSION_PLAIN_COOKIE_NAME, newSessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: SESSION_TTL,
    });
    cookieStore.set(SESSION_ID_COOKIE_NAME, encodedSessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: SESSION_TTL,
    });

    // Redis에 세션 데이터 저장
    await setSession('user', sessionData);
  } catch (error) {
    console.error('로그인 오류:', error);
    return { error: '로그인 중 오류가 발생했습니다. 다시 시도해주세요.', fields: { userId } };
  }

  redirect('/');
} 