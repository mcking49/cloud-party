import {
  forwardRef,
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type ReactElement,
} from "react";
import clsx from "clsx";

export type HTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const BUTTON_VARIANTS = ["solid", "outline", "ghost", "text"] as const;
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export const BUTTON_ICON_POSITIONS = ["left", "right"] as const;
export type ButtonIconPosition = (typeof BUTTON_ICON_POSITIONS)[number];

export const BUTTON_BASE_CLASSES = "rounded-md font-medium border";
export const BUTTON_CLASSES = `${BUTTON_BASE_CLASSES} px-4 py-2`;
export const ICON_BUTTON_CLASSES = `${BUTTON_BASE_CLASSES} p-2`;

export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  ghost: "",
  outline: "border-amber-400 bg-transparent text-amber-400",
  solid:
    "bg-amber-400 border-amber-400 text-white dark:text-amber-800 dark:bg-amber-200 dark:border-amber-200",
  text: "",
} as const;

export const ICON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  ghost: "",
  outline: "",
  solid: "",
  text: "",
} as const;

export const getButtonClasses = (
  variant: ButtonVariant = "solid",
  hasIcon = false,
  ...rest: string[]
) => {
  return clsx(
    hasIcon ? ICON_BUTTON_CLASSES : BUTTON_CLASSES,
    BUTTON_VARIANT_CLASSES[variant],
    ...rest,
  );
};

export type ButtonProps = {
  icon?: ReactElement;
  iconPosition?: ButtonIconPosition;
  variant?: ButtonVariant;
} & HTMLButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className = "",
      icon,
      iconPosition = "left",
      variant,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        className={getButtonClasses(variant, !!icon, className)}
        {...rest}
      >
        {icon && iconPosition === "left" && <span>{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </button>
    );
  },
);

Button.displayName = "Button";
