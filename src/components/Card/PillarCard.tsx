import React from "react";

export type PillarColor = "navy" | "orange" | "green";

export type PillarCardProps = {
  color: PillarColor;
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText?: string;
  onLinkClick?: () => void;
  className?: string;
};

const iconBgClasses: Record<PillarColor, string> = {
  navy: "bg-brand-navy",
  orange: "bg-brand-orange",
  green: "bg-brand-green",
};

const linkColorClasses: Record<PillarColor, string> = {
  navy: "text-brand-navy hover:underline",
  orange: "text-brand-orange hover:underline",
  green: "text-brand-green hover:underline",
};

export const PillarCard = ({
  color,
  icon,
  title,
  description,
  linkText = "Xem chi tiết →",
  onLinkClick,
  className = "",
}: PillarCardProps) => {
  return (
    <div
      className={`flex flex-col items-center text-center px-6 py-8 animate-fade-in-up ${className}`}
    >
      {/* Circular Icon Wrapper — 64px */}
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center text-text-inverse mb-5 ${iconBgClasses[color]}`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-sans text-[18px] font-bold leading-[1.3] uppercase text-text-primary mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="font-sans text-[14px] font-normal leading-[1.5] text-text-secondary mb-4 max-w-[320px]">
        {description}
      </p>

      {/* Link */}
      <button
        onClick={onLinkClick}
        className={`bg-transparent border-none font-sans text-[13px] font-semibold uppercase cursor-pointer transition-all duration-150 underline-offset-2 ${linkColorClasses[color]}`}
      >
        {linkText}
      </button>
    </div>
  );
};
