import { type NextPage } from "next";
import { useRouter } from "next/router";
import { UserProfile } from "@clerk/nextjs";

import { useFeatureFlag } from "@/hooks/feature-flag";

const ProfilePage: NextPage = () => {
  const { enabled: profileEnabled } = useFeatureFlag("sign_up");
  const router = useRouter();

  // redirect user to home page if profile is disabled
  if (!profileEnabled && typeof window !== "undefined") {
    void router.push("/");
    return null;
  }
  return <UserProfile path="/profile" routing="path" />;
};

export default ProfilePage;
