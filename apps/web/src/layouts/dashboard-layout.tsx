import type { FC, PropsWithChildren } from "react";

import { Button, IconMenu } from "@cloud-party/ui";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex h-full w-full flex-col bg-amber-400 px-1 pb-1 pt-[78px] dark:bg-yellow-950">
      <header className="absolute left-1 right-1 top-1 mx-auto flex items-center justify-between rounded-md bg-white p-4 shadow-md dark:bg-gray-950 dark:text-white">
        <h1>Cloud Party Logo</h1>
        <Button icon={<IconMenu height={20} width={20} />} variant="outline" />
      </header>
      <main className="grow rounded-md bg-white p-4 shadow-md dark:bg-gray-950 dark:text-white">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
