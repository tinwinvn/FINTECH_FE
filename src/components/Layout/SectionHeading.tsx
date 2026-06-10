

export type SectionHeadingProps = {
  title: string;
  linkText?: string;
  onLinkClick?: () => void;
  className?: string;
};

export const SectionHeading = ({
  title,
  linkText,
  onLinkClick,
  className = "",
}: SectionHeadingProps) => {
  return (
    <div
      className={`flex items-center justify-between border-b-2 border-brand-navy pb-2 mb-6 ${className}`}
    >
      <h2 className="font-sans text-[18px] font-bold leading-[1.3] uppercase text-brand-navy m-0">
        {title}
      </h2>
      {linkText && (
        <button
          onClick={onLinkClick}
          className="bg-transparent border-none font-sans text-[13px] font-semibold text-brand-orange cursor-pointer hover:underline underline-offset-2 uppercase transition-colors duration-150"
        >
          {linkText}
        </button>
      )}
    </div>
  );
};
