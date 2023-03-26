import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  // Queries
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
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

  // Mutations
  create: publicProcedure
    .input(
      z.object({
        authId: z.string().min(1),
        email: z.string().email().min(1),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.create({ data: input });
    }),
});
