import { type ButtonHTMLAttributes, type FC } from "react";
import clsx from "clsx";

export type ButtonProps = {
  logger?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  logger,
  className,
  ...props
}) => {
  if (logger) {
    console.log(logger);
  }

  return (
    <button
      className={clsx(
        className,
        "rounded-lg bg-lime-300 py-2 px-4 text-lime-900",
      )}
      {...props}
    >
      {children}
    </button>
  );
};
