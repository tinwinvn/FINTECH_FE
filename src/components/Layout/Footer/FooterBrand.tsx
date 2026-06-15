import { IconFacebook, IconYoutube, IconLinkedIn } from "../../Icons/Icons";
import Logo from "../../../assets/Logo_nontech_navy.jpg";

const socialLinks = [
  {
    icon: <IconFacebook size={16} />,
    href: "#",
    label: "Facebook",
    hoverColor: "#1877F2",
  },
  {
    icon: <IconLinkedIn size={16} />,
    href: "#",
    label: "LinkedIn",
    hoverColor: "#0A66C2",
  },
  {
    icon: <IconYoutube size={16} />,
    href: "#",
    label: "YouTube",
    hoverColor: "#FF0000",
  },
];

export const FooterBrand = () => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <a
        href="/"
        className="flex items-center gap-3 mb-5 group no-underline"
        aria-label="IFISD Homepage"
      >
        <div className="relative">
          <img src={Logo} className="w-18 h-18" alt="" />
          <div
            className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              boxShadow: "0 0 16px 2px rgba(240, 81, 35, 0.3)",
            }}
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-sans text-[18px] font-bold text-text-inverse tracking-wide">
            IFISD
          </span>
          <span className="font-sans text-[9px] font-medium text-text-inverse-muted uppercase leading-[1.3] mt-0.5 max-w-40">
            Viện nghiên cứu - Đào tạo Fintech,
            <br />
            Đổi mới sáng tạo và Phát triển bền vững
          </span>
        </div>
      </a>

      <div className="flex items-center gap-2.5 mt-1">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="footer-social-icon w-10 h-10 rounded-full bg-border-dark flex items-center justify-center text-text-inverse-muted hover:text-text-inverse hover:bg-brand-orange no-underline"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <p className="font-sans text-[11px] text-text-inverse-muted mt-4 text-center lg:text-left leading-relaxed italic opacity-70">
        "Kết nối tri thức – Dẫn dắt đổi mới"
      </p>
    </div>
  );
};
