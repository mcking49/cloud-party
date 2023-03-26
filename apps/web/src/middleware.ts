import { NextResponse } from "next/server";
import { getAuth, withClerkMiddleware } from "@clerk/nextjs/server";

import { isPublicPath } from "./utils/public-page";

export default withClerkMiddleware((req) => {
  if (isPublicPath(req.nextUrl.pathname)) return NextResponse.next();

  const { userId } = getAuth(req);

  if (!userId) {
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("redirect_url", req.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

// Stop middleware running on static files
export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
