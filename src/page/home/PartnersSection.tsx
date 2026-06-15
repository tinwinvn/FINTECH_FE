import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import vcbLogo from "../../assets/VCB.jpg";
import twbLogo from "../../assets/TWB.jpg";
import adbLogo from "../../assets/ADB.png";
import usaidLogo from "../../assets/USAID.png";
import ifcLogo from "../../assets/IFC.jpg"
import bidvLogo from "../../assets/BIDV.png"
import visaLogo from "../../assets/VISA.png"
import napasLogo from "../../assets/NAPAS.png"

const partnerLogos = [
  { name: "THE WORLD BANK", image: twbLogo },
  { name: "ADB", image: adbLogo },
  { name: "USAID", image: usaidLogo },
  { name: "IFC", image: ifcLogo },
  { name: "Vietcombank", image: vcbLogo },
  { name: "BIDV", image: bidvLogo },
  { name: "VISA", image: visaLogo },
  { name: "NAPAS", image: napasLogo },
];

const PartnerLogo = ({
  name,
  image,
}: {
  name: string;
  image: string;
}) => (
  <div className="partner-logo-item flex items-center justify-center min-w-40 sm:min-w-48 h-20 sm:h-24 px-5 sm:px-8 select-none">
    <img
      src={image}
      alt={name}
      className="partner-logo-img max-h-16 sm:max-h-20 w-auto object-contain"
      loading="lazy"
      draggable={false}
    />
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
              <PartnerLogo key={i} name={logo.name} image={logo.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
