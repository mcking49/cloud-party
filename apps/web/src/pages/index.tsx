import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@cloud-party/ui";

import { api } from "@/utils/api";
import { useFeatureFlag } from "@/hooks/feature-flag";
import DashboardLayout from "@/layouts/dashboard-layout";
import { type NextPageWithLayout } from "./_app";

const Web: NextPageWithLayout = () => {
  const { enabled: proofOfConceptEnabled, value: flagValue } =
    useFeatureFlag("proof_of_concept");

  const { signOut } = useAuth();
  const router = useRouter();

  const { data: user, isLoading } = api.user.findMeOrCreateMe.useQuery();

  const logout = async () => {
    await signOut();
    await router.push("/sign-in");
  };

  return (
    <div className="h-screen w-screen bg-slate-600">
      <h1 className="text-9xl font-bold">Web</h1>
      {proofOfConceptEnabled && (
        <>
          <Button
            className="my-test-class font-thin uppercase"
            onClick={() => void logout()}
          >
            Log out
          </Button>
          <code>{flagValue}</code>

          {!isLoading && <p>{`Hello, ${user?.firstName ?? ""}`}</p>}

          {user && user.avatarUrl && (
            <Image
              alt="Avatar"
              src={user.avatarUrl}
              height={48}
              width={48}
              className="h-12 w-12 rounded-full border border-black"
            />
          )}
        </>
      )}
    </div>
  );
};

Web.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Web;
