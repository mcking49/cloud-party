import { LogoutButton } from "@/components/buttons";
import { DarkModeSwitch } from "@/components/switches";

export const NavigationPanel = () => {
  return (
    <div className="flex h-full w-full flex-col rounded-md bg-amber-400 p-4 shadow-md dark:bg-yellow-950 lg:bg-transparent lg:shadow-none lg:dark:bg-transparent">
      {/* Footer */}
      <div className="mt-auto flex w-full items-center justify-between">
        <LogoutButton />
        <DarkModeSwitch />
      </div>
    </div>
  );
};
