import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const partnerLogos = [
  { name: "THE WORLD BANK", subtitle: "IBRD · IDA" },
  { name: "ADB", subtitle: "ASIAN DEVELOPMENT BANK" },
  { name: "USAID", subtitle: "FROM THE AMERICAN PEOPLE" },
  { name: "IFC", subtitle: "International Finance Corporation" },
  { name: "Vietcombank", subtitle: "" },
  { name: "BIDV", subtitle: "" },
  { name: "VISA", subtitle: "" },
  { name: "NAPAS", subtitle: "" },
];

const PartnerLogo = ({
  name,
  subtitle,
}: {
  name: string;
  subtitle: string;
}) => (
  <div className="flex flex-col items-center justify-center min-w-27.5 sm:min-w-35 h-15 sm:h-17.5 px-4 sm:px-6 select-none">
    <span className="font-sans text-[13px] sm:text-[16px] font-bold text-text-secondary tracking-wide whitespace-nowrap">
      {name}
    </span>
    {subtitle && (
      <span className="font-sans text-[8px] sm:text-[9px] font-normal text-text-muted uppercase tracking-wider whitespace-nowrap mt-0.5">
        {subtitle}
      </span>
    )}
  </div>
);

export const PartnersSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`
         bg-canvas py-6 md:py-8
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="max-w-456 mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center mb-6 md:mb-8">
          <div className="h-px flex-1 bg-border-hairline" />
          <h2 className="font-sans text-[12px] md:text-[14px] font-bold uppercase text-brand-navy px-4 md:px-6 whitespace-nowrap tracking-wider">
            ĐỐI TÁC & MẠNG LƯỚI
          </h2>
          <div className="h-px flex-1 bg-border-hairline" />
        </div>

        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-linear-to-r from-canvas to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-linear-to-l from-canvas to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee gap-2 sm:gap-4">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <PartnerLogo key={i} name={logo.name} subtitle={logo.subtitle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
