import { Button } from "../Button/Button";
import type { ButtonVariant } from "../Button/Button";
import { IconArrowRight } from "../Icons/Icons";

export type HeroButton = {
  text: string;
  variant: ButtonVariant;
  onClick?: () => void;
};

export type HeroBannerProps = {
  backgroundImage?: string;
  titleWhite?: string;
  titleHighlight?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  buttons?: HeroButton[];
  className?: string;
};

export const HeroBanner = ({
  backgroundImage,
  titleWhite,
  titleHighlight,
  titleLine1,
  titleLine2,
  titleLine3,
  subtitle = "Tiên phong trong nghiên cứu, đào tạo Công nghệ Tài chính và Phát triển bền vững tại Việt Nam.",
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  buttons,
  className = "",
}: HeroBannerProps) => {
  const isMultiLine = !!(titleLine1 || titleLine2 || titleLine3);

  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: 320, maxHeight: 340 }}
    >
      {backgroundImage ? (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-brand-navy" />
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10, 46, 92, 0.95) 0%, rgba(10, 46, 92, 0.80) 35%, rgba(10, 46, 92, 0.3) 65%, rgba(10, 46, 92, 0) 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(135deg, transparent 40%, rgba(240, 81, 35, 0.15) 50%, transparent 60%),
            linear-gradient(45deg, transparent 45%, rgba(26, 138, 52, 0.1) 55%, transparent 65%)
          `,
        }}
      />

      <div className="relative z-10 max-w-418 mx-auto px-6 h-full flex items-center">
        <div className="w-full max-w-[55%] max-lg:max-w-[70%] max-md:max-w-full py-8">
          {isMultiLine ? (
            <h1 className="font-sans text-[26px] max-md:text-[20px] max-sm:text-[16px] font-bold leading-tight uppercase text-text-inverse m-0 mb-2">
              <span className="animate-fade-in">{titleLine1}</span>
              <br />
              <span
                className="text-brand-orange animate-fade-in"
                style={{ animationDelay: "0.15s" }}
              >
                {titleLine2}
              </span>
              <br />
              <span
                className="text-brand-green animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                {titleLine3}
              </span>
            </h1>
          ) : (
            <h1 className="font-sans text-[32px] max-md:text-[24px] max-sm:text-[18px] font-bold leading-tight uppercase text-text-inverse m-0 mb-2 animate-fade-in">
              {titleWhite}
              <br />
              <span className="text-brand-orange">{titleHighlight}</span>
            </h1>
          )}

          <p
            className="font-sans text-[12px] font-normal leading-[1.65] text-text-inverse/85 mt-2 mb-4 m-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {subtitle}
          </p>

          <div
            className="flex flex-wrap gap-2 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            {buttons ? (
              buttons.map((btn, i) => (
                <Button
                  key={i}
                  variant={btn.variant}
                  size="md"
                  onClick={btn.onClick}
                  iconRight={<IconArrowRight size={12} />}
                >
                  {btn.text}
                </Button>
              ))
            ) : (
              <>
                {primaryButtonText && (
                  <Button
                    variant="primary-green"
                    size="lg"
                    onClick={onPrimaryClick}
                  >
                    {primaryButtonText}
                  </Button>
                )}
                {secondaryButtonText && (
                  <Button
                    variant="outline-white"
                    size="lg"
                    onClick={onSecondaryClick}
                  >
                    {secondaryButtonText}
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
