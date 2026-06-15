import { FooterBrand } from "./FooterBrand";
import { FooterDescription } from "./FooterDescription";
import { FooterLinkColumn } from "./FooterLinkColumn";
import { FooterContact } from "./FooterContact";
import { FooterCopyright } from "./FooterCopyright";

export type FooterProps = {
  className?: string;
};

const footerLinks = [
  {
    title: "LIÊN KẾT NHANH",
    links: [
      { label: "Giới thiệu", href: "/about" },
      { label: "Nghiên cứu", href: "/research" },
      { label: "Đào tạo", href: "/training" },
      { label: "Tư vấn & Dịch vụ", href: "/consulting" },
    ],
  },
  {
    title: "LĨNH VỰC TRỌNG TÂM",
    links: [
      { label: "FinTech và tài chính số", href: "#" },
      { label: "Đổi mới sáng tạo", href: "#" },
      { label: "Phát triển bền vững & ESG", href: "#" },
      { label: "Tài chính xanh", href: "#" },
      { label: "Kinh tế số", href: "#" },
    ],
  },
];

export const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer
      id="footer"
      className={`bg-surface-navy text-text-inverse relative overflow-hidden ${className}`}
      role="contentinfo"
    >
      <div className="footer-accent-line" aria-hidden="true" />

      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f05123 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #1a8a34 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-456 mx-auto px-5 md:px-8 py-5 md:py-7 lg:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.1fr_1.3fr_1fr_1fr_1.5fr] gap-y-10 gap-x-6 sm:gap-x-8 lg:gap-x-10">
          <div className="sm:col-span-2 lg:col-span-1 animate-footer-reveal stagger-1">
            <div className="footer-col-divider lg:pr-8 h-full">
              <FooterBrand />
            </div>
          </div>

          <div className="animate-footer-reveal stagger-2">
            <div className="footer-col-divider lg:pr-8 h-full">
              <FooterDescription />
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div
              key={section.title}
              className={`animate-footer-reveal stagger-${index + 3}`}
            >
              <div className="footer-col-divider lg:pr-8 h-full">
                <FooterLinkColumn title={section.title} links={section.links} />
              </div>
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-1 animate-footer-reveal stagger-5">
            <FooterContact />
          </div>
        </div>
      </div>

      <FooterCopyright />
    </footer>
  );
};
