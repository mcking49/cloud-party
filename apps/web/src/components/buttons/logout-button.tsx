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
      icon={<IconLogout />}
      className="text-red-500"
      onClick={() => void logout()}
    />
  );
};
