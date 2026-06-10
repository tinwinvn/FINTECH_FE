import React from "react";

export type ButtonVariant =
  | "primary-orange"
  | "primary-green"
  | "outline-white"
  | "link-navy"
  | "link-orange"
  | "link-green";

export type ButtonSize = "sm" | "md" | "lg";

type ButtonOwnProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonOwnProps;

const variantClasses: Record<ButtonVariant, string> = {
  "primary-orange":
    "bg-brand-orange text-text-inverse rounded-sm px-5 py-2 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed",
  "primary-green":
    "bg-brand-green text-text-inverse rounded-sm px-6 py-2.5 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed",
  "outline-white":
    "bg-transparent text-text-inverse rounded-sm px-6 py-2.5 border border-text-inverse hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed",
  "link-navy":
    "bg-transparent text-brand-navy p-0 rounded-none hover:underline hover:underline-offset-2",
  "link-orange":
    "bg-transparent text-brand-orange p-0 rounded-none hover:underline hover:underline-offset-2",
  "link-green":
    "bg-transparent text-brand-green p-0 rounded-none hover:underline hover:underline-offset-2",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-[12px] px-4 py-1.5",
  md: "",
  lg: "text-[14px] px-8 py-3",
};

export const Button = ({
  variant = "primary-orange",
  size = "md",
  iconLeft,
  iconRight,
  loading = false,
  disabled,
  children,
  className = "",
  onClick,
  ...rest
}: ButtonProps) => {
  const isLink = variant.startsWith("link-");

  const classes = [
    "inline-flex items-center justify-center gap-2 font-sans text-[13px] font-semibold uppercase",
    "cursor-pointer border-0 outline-none whitespace-nowrap select-none",
    "transition-all duration-150 ease-in-out",
    "focus-visible:outline-2 focus-visible:outline-brand-navy focus-visible:outline-offset-2",
    variantClasses[variant],
    !isLink ? sizeClasses[size] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {iconLeft && (
        <span className="inline-flex items-center shrink-0">{iconLeft}</span>
      )}
      {loading ? <span className="opacity-70">Đang xử lý…</span> : children}
      {iconRight && (
        <span className="inline-flex items-center shrink-0">{iconRight}</span>
      )}
    </button>
  );
};
