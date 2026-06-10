

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
      className={`flex gap-4 py-2 border-b border-border-hairline cursor-pointer group transition-colors duration-150 hover:bg-gray-50 ${className}`}
      onClick={onClick}
    >
      {/* Date Box */}
      <div className="flex flex-col items-center min-w-[45px] shrink-0">
        <span className="font-sans text-[24px] font-bold leading-[1] text-brand-navy">
          {day}
        </span>
        <span className="font-sans text-[11px] font-semibold uppercase text-brand-navy">
          {month}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center min-w-0">
        <h4 className="font-sans text-[14px] font-semibold leading-[1.4] text-text-primary m-0 group-hover:text-brand-navy transition-colors duration-150 line-clamp-2">
          {title}
        </h4>
        {(time || location) && (
          <div className="flex items-center gap-2 mt-1">
            {time && (
              <span className="font-sans text-[12px] font-normal leading-[1.4] text-text-muted">
                {time}
              </span>
            )}
            {time && location && (
              <span className="text-text-muted">•</span>
            )}
            {location && (
              <span className="font-sans text-[12px] font-normal leading-[1.4] text-text-muted">
                {location}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
