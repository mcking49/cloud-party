import { type NextPage } from "next";
import { useRouter } from "next/router";
import { SignUp } from "@clerk/nextjs";

const SignUpPage: NextPage = () => {
  const { query } = useRouter();
  const redirectUrl = (query.redirect_url as string) ?? "/";

  return (
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      redirectUrl={redirectUrl}
    />
  );
};

export default SignUpPage;
