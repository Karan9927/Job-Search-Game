
export const runtime = 'nodejs'; 
import NextAuth, { User } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: User & {
      id: string;
      role: string;
    };
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "role" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password || !credentials.role) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: String(credentials.email),
          },
        });

        if (
          !user ||
          !(await bcrypt.compare(String(credentials.password), user.password!))
        ) {
          return null;
        }

        if (user.role.toLowerCase() !== credentials.role.toLowerCase()) {
          throw new Error("Incorrect role selected"); // Role mismatch
        }

        return {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const paths = [
        "/profile",
        "/client-side",
        "/game",
        "/employer/dashboard",
        "/resume",
        "/referrals",
      ];
      const isProtected = paths.some((path) =>
        nextUrl.pathname.startsWith(path)
      );

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL("/api/auth/signin", nextUrl.origin);
        redirectUrl.searchParams.append("callbackUrl", nextUrl.href);
        return Response.redirect(redirectUrl);
      }

      return true;
    },

    jwt: ({ token, user, account }) => {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user?.id;
        if (user && "role" in user) {
          token.role = user.role;
        }
      }

      return token;
    },
    session(params: any) {
      return {
        ...params?.session,
        user: {
          ...params?.session.user,
          id: params?.token?.id,
          role: params?.token?.role,
        },
      };
    },
  },
});

