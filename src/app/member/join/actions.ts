'use server';

import { redirect } from 'next/navigation';
import knex from '@/lib/knex';
import bcrypt from 'bcrypt';

export async function joinAction(prevState: any, formData: FormData) {
  const userId = formData.get('userId') as string;
  const password = formData.get('password') as string;
  const userName = formData.get('userName') as string;
  const userEmail = formData.get('userEmail') as string;

  const fields = { userId, userName, userEmail };

  if (!userId || !password || !userName) {
    // 필수 필드 유효성 검사 (실제 프로덕션에서는 더 정교한 검사가 필요)
    return { error: '아이디, 비밀번호, 이름은 필수입니다.', fields };
  }

  try {
    // 아이디 중복 확인
    const existingUser = await knex('relaket_user').where({ user_id: userId }).first();
    if (existingUser) {
      return { error: '이미 사용 중인 아이디입니다.', fields };
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    // 데이터베이스에 회원 정보 저장
    await knex('relaket_user').insert({
      user_id: userId,
      password: hashedPassword,
      user_name: userName,
      user_email: userEmail,
    });
  } catch (error) {
    console.error('회원가입 오류:', error);
    return { error: '회원가입 중 오류가 발생했습니다. 다시 시도해주세요.', fields };
  }

  // 회원가입 완료 페이지로 리디렉션
  redirect('/member/join_end');
} 