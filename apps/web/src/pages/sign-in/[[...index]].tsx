import { type NextPage } from "next";
import { useRouter } from "next/router";
import { SignIn } from "@clerk/nextjs";

const SignInPage: NextPage = () => {
  const { query } = useRouter();
  const redirectUrl = (query.redirect_url as string) ?? "/";

  return (
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      redirectUrl={redirectUrl}
    />
  );
};

export default SignInPage;
