import { TRPCError } from "@trpc/server";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const partyRouter = createTRPCRouter({
  allMyParties: protectedProcedure.query(async ({ ctx }) => {
    const authId = ctx.auth.userId;
    const user = await ctx.prisma.user.findFirst({ where: { authId } });

    if (!user) {
      throw new TRPCError({
        code: "PRECONDITION_FAILED",
        message: "User not found",
      });
    }

    const myParties = await ctx.prisma.party.findMany({
      where: {
        partyUsers: {
          some: {
            userId: user.id,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return myParties;
  }),
});
