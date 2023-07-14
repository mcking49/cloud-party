import { forwardRef } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";

import type { IconProps } from "./icons";

export const IconEvent = forwardRef<SVGSVGElement, IconProps>(
  ({ height = 24, width = 24, ...props }, ref) => (
    <CalendarIcon ref={ref} height={height} width={width} {...props} />
  ),
);

IconEvent.displayName = "IconEvent";
