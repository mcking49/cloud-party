import { forwardRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

import type { IconProps } from "./icons";

export const IconMenu = forwardRef<SVGSVGElement, IconProps>(
  ({ height = 24, width = 24, ...props }, ref) => (
    <Bars3Icon ref={ref} height={height} width={width} {...props} />
  ),
);

IconMenu.displayName = "IconMenu";
