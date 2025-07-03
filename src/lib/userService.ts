import knex from '@/lib/knex';
import bcrypt from 'bcrypt';

export class UserService {
  static async findUserById(userId: string) {
    return knex('relaket_user').where({ user_id: userId }).first();
  }

  static async createUser(userData: {
    userId: string;
    passwordHash: string;
    userName: string;
    userPhone?: string;
    userEmail?: string;
  }) {
    await knex('relaket_user').insert({
      user_id: userData.userId,
      password: userData.passwordHash,
      user_name: userData.userName,
      user_phone: userData.userPhone || null,
      user_email: userData.userEmail || null,
    });
  }

  static async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }
}
