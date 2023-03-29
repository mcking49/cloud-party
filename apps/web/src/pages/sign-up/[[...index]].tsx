import { type NextPage } from "next";
import { useRouter } from "next/router";
import { SignUp } from "@clerk/nextjs";

import { useFeatureFlag } from "@/hooks/feature-flag";
import { AuthLayout } from "@/layouts";

const SignUpPage: NextPage = () => {
  const { query } = useRouter();
  const redirectUrl = (query.redirect_url as string) ?? "/";
  const { enabled: signUpEnabled } = useFeatureFlag("sign_up");
  const router = useRouter();

  // redirect user to sign-in page if sign-up is disabled
  if (!signUpEnabled && typeof window !== "undefined") {
    const url = new URL("/sign-in", window.location.origin);
    url.searchParams.set("redirect_url", redirectUrl);
    void router.push(url);
    return null;
  }

  return (
    <AuthLayout>
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        redirectUrl={redirectUrl}
      />
    </AuthLayout>
  );
};

export default SignUpPage;
