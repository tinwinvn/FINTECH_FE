import { IconChevronRight } from "../../Icons/Icons";

export const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();

  const policyLinks = [
    { label: "Điều khoản sử dụng", href: "#" },
    { label: "Chính sách bảo mật", href: "#" },
    { label: "Sơ đồ website", href: "#" },
  ];

  return (
    <div className="border-t border-border-dark bg-surface-navy-dark/40">
      <div className="max-w-456 mx-auto px-5 md:px-8 py-4 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-sans text-[11px] text-text-inverse-muted text-center sm:text-left leading-relaxed">
          © {currentYear} Viện Nghiên cứu – Đào tạo FinTech, Đổi mới sáng tạo
          và Phát triển bền vững. All rights reserved.
        </span>

        <nav
          className="flex items-center gap-1 flex-wrap justify-center"
          aria-label="Policy links"
        >
          {policyLinks.map((link, index) => (
            <span key={link.label} className="flex items-center">
              <a
                href={link.href}
                className="group font-sans text-[11px] text-text-inverse-muted no-underline hover:text-text-inverse transition-colors duration-200 inline-flex items-center gap-0.5 py-1 px-1.5 rounded hover:bg-white/5"
              >
                <IconChevronRight
                  size={10}
                  className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                />
                {link.label}
              </a>
              {index < policyLinks.length - 1 && (
                <span
                  className="text-border-dark mx-1 text-[10px] select-none"
                  aria-hidden="true"
                >
                  •
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};
