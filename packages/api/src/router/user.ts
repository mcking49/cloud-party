import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  // Queries
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),

  findMeOrCreateMe: protectedProcedure.query(async ({ ctx }) => {
    const authId = ctx.auth.userId;
    const user = await ctx.prisma.user.findFirst({ where: { authId } });

    if (!user) {
      const authUser = await clerkClient.users.getUser(authId);

      const id = authUser.primaryEmailAddressId;
      const email = authUser.emailAddresses.find(
        (email) => email.id === id,
      )?.emailAddress;

      if (!authUser || !email) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong. Please try again later",
        });
      }

      return await ctx.prisma.user.create({
        data: {
          authId: authId,
          email,
          avatarUrl: authUser.profileImageUrl,
          firstName: authUser.firstName,
          lastName: authUser.lastName,
        },
      });
    }

    return user;
  }),

  findByAuthId: publicProcedure
    .input(z.object({ authId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findFirst({ where: input });
    }),

  findByEmail: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findFirst({ where: input });
    }),
});
