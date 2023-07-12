import { forwardRef } from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

import type { IconProps } from "./icons";

export const IconLogout = forwardRef<SVGSVGElement, IconProps>(
  ({ height = 24, width = 24, ...props }, ref) => (
    <ArrowLeftOnRectangleIcon
      ref={ref}
      height={height}
      width={width}
      {...props}
    />
  ),
);

IconLogout.displayName = "IconLogout";
