import React from "react";
import { TruncateTooltip } from "../TruncateTooltip/TruncateTooltip";

export type SectionHeadingProps = {
  title: string;
  linkText?: string;
  onLinkClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
};

export const SectionHeading = ({
  title,
  linkText,
  onLinkClick,
  icon,
  className = "",
}: SectionHeadingProps) => {
  return (
    <div
      className={`flex items-end justify-between gap-3 border-b-2 border-brand-navy pb-2 mb-4 md:mb-6 ${className}`}
    >
      <div className="flex items-start gap-2 min-w-0">
        {icon && (
          <span className="text-brand-navy shrink-0 mt-0.5 animate-icon-float">
            {icon}
          </span>
        )}
        <TruncateTooltip text={title}>
          <h2 className="font-sans text-[15px] sm:text-[18px] font-bold leading-[1.3] uppercase text-brand-navy m-0 line-clamp-1 ">
            {title}
          </h2>
        </TruncateTooltip>
      </div>
      {linkText && (
        <button
          onClick={onLinkClick}
          className="bg-transparent border-none font-sans text-[12px] sm:text-[13px] font-semibold text-brand-orange cursor-pointer hover:underline underline-offset-2 uppercase transition-colors duration-150 whitespace-nowrap shrink-0"
        >
          {linkText}
        </button>
      )}
    </div>
  );
};
