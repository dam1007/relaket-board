import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import knex from "@/lib/knex";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        userId: { label: "아이디", type: "text" },
        password: { label: "비밀번호", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.userId || !credentials?.password) {
          return null;
        }

        try {
          // DB에서 사용자 조회
          const user = await knex("relaket_user").where({ user_id: credentials.userId }).first();
          if (!user) {
            return null;
          }

          // 비밀번호 검증
          const passwordMatch = await bcrypt.compare(credentials.password, user.password);
          if (!passwordMatch) {
            return null;
          }

          return {
            id: user.id.toString(),
            name: user.user_name,
            email: user.user_email,
            userId: user.user_id,
          };
        } catch (error) {
          console.error("로그인 인증 오류:", error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24시간
  },
  pages: {
    signIn: "/member/login",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.userId = user.userId;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.sub;
        session.user.userId = token.userId;
      }
      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 