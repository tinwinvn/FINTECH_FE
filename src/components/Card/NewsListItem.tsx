

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
      className={`flex gap-4 py-2 border-b border-border-hairline cursor-pointer group transition-colors duration-150 hover:bg-gray-50 ${className}`}
      onClick={onClick}
    >
      {/* Thumbnail 80×55 */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-[80px] h-[55px] object-cover rounded-sm shrink-0"
      />

      {/* Content */}
      <div className="flex flex-col justify-center min-w-0">
        <h4 className="font-sans text-[14px] font-semibold leading-[1.4] text-text-primary m-0 group-hover:text-brand-navy transition-colors duration-150 line-clamp-2">
          {title}
        </h4>
        <span className="font-sans text-[12px] font-normal leading-[1.4] text-text-muted mt-1">
          {date}
        </span>
      </div>
    </div>
  );
};
