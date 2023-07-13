import { useRouter } from "next/router";
import { useAuth } from "@clerk/nextjs";

import { Button, IconLogout } from "@cloud-party/ui";

export const LogoutButton = () => {
  const router = useRouter();
  const { signOut } = useAuth();

  const logout = async () => {
    await signOut();
    await router.push("/sign-in");
  };

  return (
    <Button
      icon={
        <IconLogout className="text-amber-400 transition dark:text-amber-800" />
      }
      className="bg-white"
      onClick={() => void logout()}
    />
  );
};
