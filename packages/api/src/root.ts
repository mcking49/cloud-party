import { partyRouter } from "./router/party";
import { userRouter } from "./router/user";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  party: partyRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
