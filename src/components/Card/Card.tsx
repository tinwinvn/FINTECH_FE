import React from "react";

export type CardVariant = "base" | "newsletter";

export type CardProps = {
  variant?: CardVariant;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const variantClasses: Record<CardVariant, string> = {
  base: "bg-canvas rounded-sm p-6 border border-border-hairline",
  newsletter:
    "bg-surface-navy text-text-inverse rounded-md p-8",
};

export const Card = ({
  variant = "base",
  icon,
  title,
  description,
  children,
  footer,
  className = "",
  style,
}: CardProps) => {
  return (
    <div
      className={`flex flex-col transition-all duration-200 ease-in-out ${variantClasses[variant]} ${className}`}
      style={style}
    >
      {(icon || title || description) && (
        <div className="mb-4">
          {icon && (
            <div className="w-10 h-10 flex items-center justify-center rounded-sm mb-4">
              {icon}
            </div>
          )}
          {title && (
            <div className="font-sans text-[14px] font-semibold leading-[1.4] mb-2">
              {title}
            </div>
          )}
          {description && (
            <div
              className={`font-sans text-[14px] font-normal leading-[1.5] ${
                variant === "newsletter"
                  ? "text-text-inverse-muted"
                  : "text-text-secondary"
              }`}
            >
              {description}
            </div>
          )}
        </div>
      )}
      {children && <div className="flex-1">{children}</div>}
      {footer && <div className="mt-5">{footer}</div>}
    </div>
  );
};
