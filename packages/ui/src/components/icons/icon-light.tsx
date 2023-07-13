import { forwardRef } from "react";
import { SunIcon } from "@heroicons/react/24/outline";

import type { IconProps } from "./icons";

export const IconLight = forwardRef<SVGSVGElement, IconProps>(
  ({ height = 24, width = 24, ...props }, ref) => (
    <SunIcon ref={ref} height={height} width={width} {...props} />
  ),
);

IconLight.displayName = "IconLight";
