import { TruncateTooltip } from "../TruncateTooltip/TruncateTooltip";

export type NewsListItemProps = {
  thumbnailUrl: string;
  title: string;
  date: string;
  onClick?: () => void;
  className?: string;
};

export const NewsListItem = ({
  thumbnailUrl,
  title,
  date,
  onClick,
  className = "",
}: NewsListItemProps) => {
  return (
    <div
      className={`flex gap-3 sm:gap-4 py-2.5 border-b border-border-hairline cursor-pointer group transition-all duration-200 hover:bg-gray-50 hover:pl-1 ${className}`}
      onClick={onClick}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-17.5 h-12 sm:w-[80px] sm:h-13.75 object-cover rounded-sm shrink-0 group-hover:scale-105 transition-transform duration-200"
      />

      <div className="flex flex-col justify-center min-w-0">
        <TruncateTooltip text={title}>
          <h4 className="font-sans text-[13px] sm:text-[14px] font-semibold leading-[1.4] text-text-primary m-0 group-hover:text-brand-navy transition-colors duration-150 line-clamp-2">
            {title}
          </h4>
        </TruncateTooltip>
        {date && (
          <span className="font-sans text-[11px] sm:text-[12px] font-normal leading-[1.4] text-text-muted mt-1">
            {date}
          </span>
        )}
      </div>
    </div>
  );
};
