import { getSession } from './redis';

export interface User {
  id: number;
  userId: string;
  userName: string;
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const userData = await getSession('user');
    return userData;
  } catch (error) {
    console.error('사용자 정보 가져오기 오류:', error);
    return null;
  }
} 