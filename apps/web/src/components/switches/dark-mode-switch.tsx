import { Switch } from "@headlessui/react";
import clsx from "clsx";

import { IconDark, IconLight } from "@cloud-party/ui";

import { useDarkMode } from "@/hooks/dark-mode/use-dark-mode";

export const DarkModeSwitch = () => {
  const [enabled, toggle] = useDarkMode();

  return (
    <Switch
      checked={!!enabled}
      onChange={toggle}
      className={clsx(
        { "bg-amber-200": enabled, "bg-white": !enabled },
        "relative inline-flex h-10 w-20 items-center rounded-full",
      )}
    >
      <span className="sr-only">Enable dark mode</span>
      <span
        className={clsx(
          {
            "translate-x-11 bg-amber-800": enabled,
            "translate-x-1 bg-amber-400": !enabled,
          },
          "inline-flex h-8 w-8 transform items-center justify-center rounded-full text-white transition",
        )}
      >
        <IconLight
          className={clsx(
            {
              "invisible opacity-0": enabled,
              "visible opacity-100": !enabled,
            },
            enabled ? "hidden" : "block",
            "transition",
          )}
        />
        <IconDark
          className={clsx(
            {
              "invisible opacity-0": !enabled,
              "visible opacity-100": enabled,
            },
            !enabled ? "hidden" : "block",
            "transition",
          )}
        />
      </span>
    </Switch>
  );
};
