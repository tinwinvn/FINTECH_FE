import React from "react";

export type BadgeVariant = "navy" | "orange" | "green" | "outline";

export type BadgeProps = {
  variant: BadgeVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
};

const variantClasses: Record<BadgeVariant, string> = {
  navy: "bg-brand-navy text-text-inverse",
  orange: "bg-brand-orange text-text-inverse",
  green: "bg-brand-green text-text-inverse",
  outline: "bg-transparent text-text-secondary border border-border-hairline",
};

export const Badge = ({
  variant,
  children,
  icon,
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap select-none rounded-sm px-2 py-0.5 font-sans text-[12px] font-semibold uppercase leading-[1.4] animate-fade-in ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </span>
  );
};
