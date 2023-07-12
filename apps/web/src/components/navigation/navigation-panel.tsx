import { LogoutButton } from "@/components/buttons/logout-button";

export const NavigationPanel = () => {
  return (
    <div className="flex h-full w-full flex-col rounded-md bg-amber-400 p-4 shadow-md dark:bg-yellow-950 lg:bg-transparent lg:shadow-none lg:dark:bg-transparent">
      {/* Footer */}
      <div className="mt-auto flex w-full">
        <LogoutButton />
      </div>
    </div>
  );
};
