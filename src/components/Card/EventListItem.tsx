import { TruncateTooltip } from "../TruncateTooltip/TruncateTooltip";

export type EventListItemProps = {
  day: string;
  month: string;
  title: string;
  time?: string;
  location?: string;
  onClick?: () => void;
  className?: string;
};

export const EventListItem = ({
  day,
  month,
  title,
  time,
  location,
  onClick,
  className = "",
}: EventListItemProps) => {
  return (
    <div
      className={`flex gap-3 sm:gap-4 py-2.5 border-b border-border-hairline cursor-pointer group transition-all duration-200 hover:bg-gray-50 hover:pl-1 ${className}`}
      onClick={onClick}
    >
      <div className="h-20 w-20 flex flex-col justify-center items-center min-w-10.5 sm:min-w-11.25 shrink-0 group-hover:scale-105 transition-transform duration-200">
        <span className="font-sans text-[20px] sm:text-[24px] font-bold leading-none text-brand-navy">
          {day}
        </span>
        <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase text-brand-navy">
          {month}
        </span>
      </div>

      <div className="flex flex-col justify-center min-w-0">
        <TruncateTooltip text={title}>
          <h4 className="font-sans text-[13px] sm:text-[14px] font-semibold leading-[1.4] text-text-primary m-0 group-hover:text-brand-navy transition-colors duration-150 line-clamp-3">
            {title}
          </h4>
        </TruncateTooltip>
        {(time || location) && (
          <div className="flex items-center gap-2 mt-1">
            {time && (
              <span className="font-sans text-[11px] sm:text-[12px] font-normal leading-[1.4] text-text-muted">
                {time}
              </span>
            )}
            {time && location && (
              <span className="text-text-muted text-[10px]">•</span>
            )}
            {location && (
              <span className="font-sans text-[11px] sm:text-[12px] font-normal leading-[1.4] text-text-muted">
                {location}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
