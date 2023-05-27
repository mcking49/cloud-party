import { Fragment, type FC, type PropsWithChildren } from "react";
import { Transition } from "@headlessui/react";

import { Button, Dialog, IconMenu } from "@cloud-party/ui";

import { classNames } from "@/utils/class-names";
import { NavigationPanel } from "@/components";
import { useToggle } from "@/hooks/toggle";

const BASE_TRANSITION_CLASSES = "transition-colors duration-300 ease";

const BASE_HEADER_CLASSES =
  "absolute left-1 right-1 top-1 mx-auto flex items-center justify-between rounded-md p-4 shadow-md";

const BASE_HEADER_CLASSES_SM = "sm:top-2 sm:left-2 sm:right-2";

const BASE_HEADER_CLASSES_LG = "lg:hidden";

const MENU_CLOSED_HEADER_CLASSES =
  "bg-white text-black dark:bg-gray-950 dark:text-white";

const MENU_OPENED_HEADER_CLASSES =
  "bg-amber-400 text-black dark:bg-yellow-950 dark:text-white";

const getHeaderClasses = (isMenuOpen: boolean) => {
  return classNames(
    BASE_TRANSITION_CLASSES,
    BASE_HEADER_CLASSES,
    BASE_HEADER_CLASSES_SM,
    BASE_HEADER_CLASSES_LG,
    isMenuOpen ? MENU_OPENED_HEADER_CLASSES : MENU_CLOSED_HEADER_CLASSES,
  );
};

const BASE_PARENT_CLASSES =
  "relative flex h-full w-full flex-col px-1 pb-1 pt-[78px]";

const BASE_PARENT_CLASSES_SM = "sm:px-2 sm:pb-2 sm:pt-[86px]";

const BASE_PARENT_CLASSES_LG = "lg:pt-2 lg:flex-row";

const MENU_CLOSED_PARENT_CLASSES = "bg-amber-400 dark:bg-yellow-950";
const MENU_OPENED_PARENT_CLASSES = "bg-white dark:bg-gray-950";

const getParentClasses = (isMenuOpen: boolean) => {
  return classNames(
    BASE_TRANSITION_CLASSES,
    BASE_PARENT_CLASSES,
    BASE_PARENT_CLASSES_SM,
    BASE_PARENT_CLASSES_LG,
    isMenuOpen ? MENU_OPENED_PARENT_CLASSES : MENU_CLOSED_PARENT_CLASSES,
  );
};

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useToggle();

  return (
    <div className={getParentClasses(isMenuOpen)}>
      <header className={getHeaderClasses(isMenuOpen)}>
        <h1>Cloud Party Logo</h1>

        <Button
          icon={<IconMenu height={20} width={20} />}
          variant="outline"
          color={isMenuOpen ? "black" : "primary"}
          onClick={() => toggleMenu()}
        />
      </header>

      <aside className="mr-2 hidden h-full w-64 shrink-0 lg:block">
        <NavigationPanel />
      </aside>

      <main className="grow rounded-md bg-white p-4 shadow-md dark:bg-gray-950 dark:text-white">
        {children}
      </main>

      <Transition
        show={isMenuOpen}
        enter="transition duration-300 ease-out"
        enterFrom="transform translate-y-2/3 opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-300 ease-in"
        leaveFrom="transform opacity-100"
        leaveTo="transform translate-y-2/3 opacity-0"
        as={Fragment}
      >
        <Dialog
          onClose={() => toggleMenu(false)}
          className="duration fixed inset-0 z-50 h-full w-full"
        >
          <Dialog.Panel className="absolute bottom-1 left-1 right-1 h-[calc(100%_-_82px)] sm:bottom-2 sm:left-2 sm:right-2 sm:h-[calc(100%_-_94px)]">
            <NavigationPanel />
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DashboardLayout;
