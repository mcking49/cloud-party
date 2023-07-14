import { forwardRef, type ComponentProps } from "react";
import clsx from "clsx";

import { IconEvent } from "./icon-event";
import { IconPlus } from "./icon-plus";

export const IconAddEvent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx("relative", className)} {...props}>
      <IconEvent height="1em" width="1em" />
      <IconPlus
        height="0.5em"
        width="0.5em"
        className="absolute bottom-[12%] left-1/2 -translate-x-1/2"
      />
    </div>
  ),
);

IconAddEvent.displayName = "IconAddEvent";
