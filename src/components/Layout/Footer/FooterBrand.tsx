import { IconFacebook, IconYoutube, IconLinkedIn } from "../../Icons/Icons";

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
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-105"
          >
            <rect width="36" height="36" rx="6" fill="#f05123" />
            <path d="M8 28V8l10 4v12l-10 4z" fill="#1a8a34" opacity="0.9" />
            <path d="M18 12l10-4v20l-10-4V12z" fill="white" opacity="0.6" />
          </svg>
          <div
            className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              boxShadow: "0 0 16px 2px rgba(240, 81, 35, 0.3)",
            }}
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-sans text-[17px] font-bold text-text-inverse tracking-wide">
            IFISD
          </span>
          <span className="font-sans text-[8px] font-medium text-text-inverse-muted uppercase leading-[1.3] mt-0.5 max-w-40">
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
