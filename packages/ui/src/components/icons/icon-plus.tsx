import { forwardRef } from "react";
import { PlusSmallIcon } from "@heroicons/react/24/solid";

import type { IconProps } from "./icons";

export const IconPlus = forwardRef<SVGSVGElement, IconProps>(
  ({ height = 24, width = 24, ...props }, ref) => (
    <PlusSmallIcon ref={ref} height={height} width={width} {...props} />
  ),
);

IconPlus.displayName = "IconPlus";
