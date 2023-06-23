import { forwardRef, type ComponentProps, type ReactElement } from "react";
import clsx from "clsx";

export type HTMLButtonProps = ComponentProps<"button">;

export const BUTTON_VARIANTS = ["solid", "outline", "ghost", "text"] as const;
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export const BUTTON_COLORS = ["primary", "black", "white"] as const;
export type ButtonColor = (typeof BUTTON_COLORS)[number];

export type ButtonStyle = {
  color?: ButtonColor;
  variant?: ButtonVariant;
};

export const BUTTON_ICON_POSITIONS = ["left", "right"] as const;
export type ButtonIconPosition = (typeof BUTTON_ICON_POSITIONS)[number];

export const BUTTON_BASE_CLASSES = "rounded-md font-medium border";
export const BUTTON_CLASSES = `${BUTTON_BASE_CLASSES} px-4 py-2`;
export const ICON_BUTTON_CLASSES = `${BUTTON_BASE_CLASSES} p-2`;

export const BUTTON_STYLE_CLASSES: Record<
  ButtonVariant,
  Record<ButtonColor, string>
> = {
  ghost: {
    primary: "text-amber-400",
    black: "text-black",
    white: "text-white",
  },
  outline: {
    primary:
      "text-amber-400 border-amber-400 bg-transparent dark:text-amber-200 dark:border-amber-200",
    black:
      "text-black border-black bg-transparent dark:text-white dark:border-white",
    white:
      "text-white border-white bg-transparent dark:text-black dark:border-black",
  },
  solid: {
    primary:
      "bg-amber-400 border-amber-400 text-white dark:text-amber-800 dark:bg-amber-200 dark:border-amber-200",
    black:
      "bg-black border-black text-white dark:text-black dark:bg-white dark:border-white",
    white:
      "bg-white border-white text-black dark:text-white dark:bg-black dark:border-black",
  },
  text: {
    primary: "text-amber-400",
    black: "text-black dark:text-white",
    white: "text-white dark:text-black",
  },
};

export const ICON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  ghost: "",
  outline: "",
  solid: "",
  text: "",
} as const;

export const getButtonClasses = (
  { color = "primary", variant = "solid" }: ButtonStyle,
  hasIcon = false,
  ...rest: string[]
) => {
  return clsx(
    hasIcon ? ICON_BUTTON_CLASSES : BUTTON_CLASSES,
    BUTTON_STYLE_CLASSES[variant][color],
    ...rest,
  );
};

export type ButtonProps = {
  color?: ButtonColor;
  icon?: ReactElement;
  iconPosition?: ButtonIconPosition;
  variant?: ButtonVariant;
} & HTMLButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className = "",
      color,
      icon,
      iconPosition = "left",
      variant,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        className={getButtonClasses({ color, variant }, !!icon, className)}
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
