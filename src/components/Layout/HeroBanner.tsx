
import { Button } from "../Button/Button";

export type HeroBannerProps = {
  backgroundImage?: string;
  titleWhite?: string;
  titleHighlight?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
};

export const HeroBanner = ({
  backgroundImage,
  titleWhite = "VIỆN NGHIÊN CỨU - ĐÀO TẠO",
  titleHighlight = "FINTECH, ĐỔI MỚI SÁNG TẠO",
  subtitle = "Tiên phong trong nghiên cứu, đào tạo Công nghệ Tài chính và Phát triển bền vững tại Việt Nam.",
  primaryButtonText = "TÌM HIỂU THÊM",
  secondaryButtonText = "CHƯƠNG TRÌNH ĐÀO TẠO",
  onPrimaryClick,
  onSecondaryClick,
  className = "",
}: HeroBannerProps) => {
  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      style={{ minHeight: 400 }}
    >
      {/* Background Image */}
      {backgroundImage ? (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-brand-navy" />
      )}

      {/* Navy Gradient Overlay — heavy from left, transparent to right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10, 46, 92, 0.95) 0%, rgba(10, 46, 92, 0.6) 40%, rgba(10, 46, 92, 0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-28 flex flex-col justify-center min-h-[400px]">
        {/* Headline */}
        <h1 className="font-sans text-[40px] max-md:text-[28px] max-sm:text-[22px] font-bold leading-[1.25] uppercase text-text-inverse m-0 mb-2 animate-fade-in max-w-2xl">
          {titleWhite}
          <br />
          <span className="text-brand-orange">{titleHighlight}</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-[16px] font-normal leading-[1.5] text-text-inverse mt-4 mb-8 max-w-xl m-0 animate-fade-in opacity-90">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 animate-slide-up">
          <Button variant="primary-green" size="lg" onClick={onPrimaryClick}>
            {primaryButtonText}
          </Button>
          <Button variant="outline-white" size="lg" onClick={onSecondaryClick}>
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
};
