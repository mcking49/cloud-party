import type { RefAttributes, SVGProps } from "react";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "ref"> & {
  title?: string | undefined;
  titleId?: string | undefined;
} & RefAttributes<SVGSVGElement>;
