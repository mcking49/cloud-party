import { ButtonHTMLAttributes, FC } from "react";
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
      className={clsx(className, "rounded-lg bg-primary-500 py-2 px-4")}
      {...props}
    >
      {children}
    </button>
  );
};
