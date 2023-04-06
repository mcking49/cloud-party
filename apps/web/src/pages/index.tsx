import { useEffect, useState } from "react";
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

  const [isDarkMode, setIsDarkMode] = useState(false);

  const { data: user, isLoading } = api.user.findMeOrCreateMe.useQuery();

  const logout = async () => {
    await signOut();
    await router.push("/sign-in");
  };

  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode",
    );
    setIsDarkMode(initialColorValue === "dark");
  }, []);

  useEffect(() => {
    // set 'dark' classname on body
    window.document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  console.log({ isDarkMode });

  return (
    <div className="">
      <h1 className="text-9xl font-bold">Web</h1>
      {proofOfConceptEnabled && (
        <>
          <Button
            className="my-test-class font-thin uppercase"
            onClick={() => void logout()}
          >
            Log out
          </Button>
          <Button
            className="my-test-class font-thin uppercase"
            onClick={onToggleDarkMode}
          >
            Toggle Dark Mode
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
