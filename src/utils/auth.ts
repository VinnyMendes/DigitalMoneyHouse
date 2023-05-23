import { useAxiosInstance } from "@/libs/axios";
import axios from "axios";
import { randomUUID } from "crypto";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      token: string;
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        try {
          const { data } = await axios.post<{ token: string }>(
            "https://digitalmoney.ctd.academy/api/login",
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          );

          const { token } = data;

          const user = {
            id: randomUUID(),
            email: credentials.email,
            token,
          };

          return user;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        ...token,
      };
    },
    async jwt({ user, token }) {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          user: {
            id: u.id,
            token: u.token,
            email: u.email,
          },
        };
      }
      return token;
    },
  },
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
