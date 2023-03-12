import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type DefaultSession, type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

import { prisma } from "@cloud-party/db";

declare module "next-auth" {
  /**
   * Module augmentation for `next-auth` types
   * Allows us to add custom properties to the `session` object
   * and keep type safety
   * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
   */
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

/**
 * Options for NextAuth.js used to configure
 * adapter, providers, callbacks, etc.
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => {
      if (session.user) {
        session.user.id = user.id;
      }

      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
  ],
};
