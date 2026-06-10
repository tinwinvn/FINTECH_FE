import React from "react";

export type TypographyVariant =
  | "hero-display"
  | "hero-highlight"
  | "hero-subtitle"
  | "section-heading"
  | "pillar-heading"
  | "card-title"
  | "body-md"
  | "meta-text"
  | "event-day"
  | "event-month"
  | "nav-link"
  | "button-label";

export type TypographyColor =
  | "primary"
  | "secondary"
  | "muted"
  | "inverse"
  | "inverse-muted"
  | "navy"
  | "orange"
  | "green";

const defaultTagMap: Record<
  TypographyVariant,
  keyof React.JSX.IntrinsicElements
> = {
  "hero-display": "h1",
  "hero-highlight": "span",
  "hero-subtitle": "p",
  "section-heading": "h2",
  "pillar-heading": "h3",
  "card-title": "h4",
  "body-md": "p",
  "meta-text": "span",
  "event-day": "span",
  "event-month": "span",
  "nav-link": "span",
  "button-label": "span",
};

const variantClasses: Record<TypographyVariant, string> = {
  "hero-display":
    "font-sans text-[40px] font-bold leading-[1.25] uppercase text-text-inverse max-md:text-[28px] max-sm:text-[22px]",
  "hero-highlight":
    "font-sans text-[40px] font-bold leading-[1.25] uppercase text-brand-orange max-md:text-[28px] max-sm:text-[22px]",
  "hero-subtitle":
    "font-sans text-[16px] font-normal leading-[1.5] text-text-inverse",
  "section-heading":
    "font-sans text-[18px] font-bold leading-[1.3] uppercase text-brand-navy",
  "pillar-heading":
    "font-sans text-[18px] font-bold leading-[1.3] uppercase text-text-primary",
  "card-title":
    "font-sans text-[14px] font-semibold leading-[1.4] text-text-primary",
  "body-md":
    "font-sans text-[14px] font-normal leading-[1.5] text-text-secondary",
  "meta-text":
    "font-sans text-[12px] font-normal leading-[1.4] text-text-muted",
  "event-day":
    "font-sans text-[24px] font-bold leading-[1] text-brand-navy",
  "event-month":
    "font-sans text-[11px] font-semibold uppercase text-brand-navy",
  "nav-link":
    "font-sans text-[13px] font-semibold leading-[1.5] uppercase text-text-primary",
  "button-label":
    "font-sans text-[13px] font-semibold uppercase text-text-inverse",
};

const colorClasses: Record<TypographyColor, string> = {
  primary: "!text-text-primary",
  secondary: "!text-text-secondary",
  muted: "!text-text-muted",
  inverse: "!text-text-inverse",
  "inverse-muted": "!text-text-inverse-muted",
  navy: "!text-brand-navy",
  orange: "!text-brand-orange",
  green: "!text-brand-green",
};

export type TypographyProps = {
  variant?: TypographyVariant;
  as?: keyof React.JSX.IntrinsicElements;
  color?: TypographyColor;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

export const Typography = ({
  variant = "body-md",
  as,
  color,
  children,
  className = "",
  style,
  id,
}: TypographyProps) => {
  const Tag = as || defaultTagMap[variant];
  const classes = [
    "m-0 p-0",
    variantClasses[variant],
    color ? colorClasses[color] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} style={style} id={id}>
      {children}
    </Tag>
  );
};
