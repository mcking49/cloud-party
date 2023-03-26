import { useEffect } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { SignIn } from "@clerk/nextjs";
import { clsx } from "clsx";

import { useFeatureFlag } from "@/hooks/feature-flag";

const SignInPage: NextPage = () => {
  const { query } = useRouter();
  const redirectUrl = (query.redirect_url as string) ?? "/";
  const { enabled: signUpEnabled } = useFeatureFlag("sign_up");

  // Remove elements from the dom if signup is disabled.
  // This is not a full solution, but it's a start.
  useEffect(() => {
    if (typeof document !== "undefined") {
      const dividerRow = document.querySelector(".cl-dividerRow");
      const footerActionSignIn = document.querySelector(".cl-footer");
      const socialButtons = document.querySelector(".cl-socialButtons");

      if (dividerRow) {
        dividerRow.remove();
      }

      if (footerActionSignIn) {
        footerActionSignIn.remove();
      }

      if (socialButtons) {
        socialButtons.remove();
      }
    }
  }, [signUpEnabled]);

  return (
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      redirectUrl={redirectUrl}
      appearance={{
        elements: {
          // NOTE: this doesn't remove the link from the DOM.
          dividerRow: clsx({ hidden: !signUpEnabled }),
          footer: clsx({ hidden: !signUpEnabled }),
          socialButtons: clsx({ hidden: !signUpEnabled }),
        },
      }}
    />
  );
};

export default SignInPage;
