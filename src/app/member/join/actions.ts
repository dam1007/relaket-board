'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { UserService } from '@/lib/userService';

// Zod 스키마 정의
const joinSchema = z.object({
  userId: z
    .string()
    .min(4, '아이디는 4자 이상이어야 합니다.')
    .max(20, '아이디는 20자 이하여야 합니다.'),
  password: z.string().min(6, '비밀번호는 6자 이상이어야 합니다.'),
  userName: z.string().min(2, '이름은 2자 이상이어야 합니다.'),
  userPhone: z.string().optional(),
  userEmail: z
    .string()
    .email('유효한 이메일 주소를 입력해주세요.')
    .optional()
    .or(z.literal('')), // 빈 문자열도 허용
});

export async function joinAction(
  prevState: {
    error?: string;
    fieldErrors?: {
      userId?: string[];
      password?: string[];
      userName?: string[];
      userPhone?: string[];
      userEmail?: string[];
    };
    fields: {
      userId: string;
      userName: string;
      userPhone: string;
      userEmail: string;
    };
  },
  formData: FormData,
) {
  const parsed = joinSchema.safeParse({
    userId: formData.get('userId'),
    password: formData.get('password'),
    userName: formData.get('userName'),
    userPhone: formData.get('userPhone'),
    userEmail: formData.get('userEmail'),
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    const fields = {
      userId: formData.get('userId') as string,
      password: formData.get('password') as string,
      userName: formData.get('userName') as string,
      userPhone: formData.get('userPhone') as string,
      userEmail: formData.get('userEmail') as string,
    };
    return { error: '입력값을 확인해주세요.', fieldErrors, fields };
  }

  const { userId, password, userName, userPhone, userEmail } = parsed.data;

  try {
    // 아이디 중복 확인
    const existingUser = await UserService.findUserById(userId);
    if (existingUser) {
      return {
        error: '이미 사용 중인 아이디입니다.',
        fields: { userId, userName, userPhone, userEmail },
      };
    }

    // 비밀번호 암호화
    const hashedPassword = await UserService.hashPassword(password);

    // 데이터베이스에 회원 정보 저장
    await UserService.createUser({
      userId,
      passwordHash: hashedPassword,
      userName,
      userPhone,
      userEmail: userEmail === '' ? undefined : userEmail, // 빈 문자열은 undefined로 처리하여 DB에 null 저장
    });
  } catch (error) {
    console.error('회원가입 오류:', error);
    return {
      error: '회원가입 중 오류가 발생했습니다. 다시 시도해주세요.',
      fields: { userId, userName, userPhone, userEmail },
    };
  }

  // 회원가입 완료 페이지로 리디렉션
  redirect('/member/join_end');
}
