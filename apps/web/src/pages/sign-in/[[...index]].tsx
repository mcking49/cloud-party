import { type NextPage } from "next";
import { useRouter } from "next/router";
import { SignIn } from "@clerk/nextjs";
import { clsx } from "clsx";

import { useFeatureFlag } from "@/hooks/feature-flag";

const SignInPage: NextPage = () => {
  const { query } = useRouter();
  const redirectUrl = (query.redirect_url as string) ?? "/";
  const { enabled: signUpEnabled } = useFeatureFlag("sign_up");

  return (
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      redirectUrl={redirectUrl}
      appearance={{
        elements: {
          // NOTE: this doesn't remove the link from the DOM.
          footerAction__signIn: clsx({ hidden: !signUpEnabled }),
        },
      }}
    />
  );
};

export default SignInPage;
