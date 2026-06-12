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
  <div className="flex flex-col items-center justify-center min-w-[140px] h-[70px] px-6 select-none">
    <span className="font-sans text-[16px] font-bold text-text-secondary tracking-wide whitespace-nowrap">
      {name}
    </span>
    {subtitle && (
      <span className="font-sans text-[9px] font-normal text-text-muted uppercase tracking-wider whitespace-nowrap mt-0.5">
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
        border-t border-border-hairline bg-canvas py-10
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="max-w-[1672px] mx-auto px-6">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px flex-1 bg-border-hairline" />
          <h2 className="font-sans text-[14px] font-bold uppercase text-brand-navy px-6 whitespace-nowrap tracking-wider">
            ĐỐI TÁC & MẠNG LƯỚI
          </h2>
          <div className="h-px flex-1 bg-border-hairline" />
        </div>

        {/* Logos Marquee */}
        <div className="overflow-hidden relative">
          {/* Gradient fades on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee gap-4">
            {/* Duplicate for infinite scroll */}
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <PartnerLogo key={i} name={logo.name} subtitle={logo.subtitle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
