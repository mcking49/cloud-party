import { forwardRef } from "react";
import { MoonIcon } from "@heroicons/react/24/outline";

import type { IconProps } from "./icons";

export const IconDark = forwardRef<SVGSVGElement, IconProps>(
  ({ height = 24, width = 24, ...props }, ref) => (
    <MoonIcon ref={ref} height={height} width={width} {...props} />
  ),
);

IconDark.displayName = "IconDark";
