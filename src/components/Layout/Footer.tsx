
import { Link } from "react-router-dom";
import {
  IconFacebook,
  IconYoutube,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconMapPin,
  IconGlobe,
} from "../Icons/Icons";

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

const contactInfo = [
  {
    icon: <IconMapPin size={14} />,
    text: "71 Ngô Hành Sơn, Phường Ngũ Hành Sơn, Thành phố Đà Nẵng",
  },
  {
    icon: <IconPhone size={14} />,
    text: "0935549555",
  },
  {
    icon: <IconMail size={14} />,
    text: "info@ifisd.edu.vn",
  },
  {
    icon: <IconGlobe size={14} />,
    text: "www.ifisd.edu.vn",
  },
];

const socialLinks = [
  { icon: <IconFacebook size={16} />, href: "#", label: "Facebook" },
  { icon: <IconLinkedIn size={16} />, href: "#", label: "LinkedIn" },
  { icon: <IconYoutube size={16} />, href: "#", label: "YouTube" },
];

export const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer className={`bg-surface-navy text-text-inverse ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-[1672px] mx-auto px-6 py-12">
        {/* 5-column grid with vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
          {/* Brand Column */}
          <div className="px-5 first:pl-0 lg:border-r lg:border-border-dark">
            <div className="flex items-center gap-2 mb-4">
              {/* Logo */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="36" height="36" rx="4" fill="#f05123" />
                <path
                  d="M8 28V8l10 4v12l-10 4z"
                  fill="#1a8a34"
                  opacity="0.9"
                />
                <path
                  d="M18 12l10-4v20l-10-4V12z"
                  fill="white"
                  opacity="0.6"
                />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-sans text-[16px] font-bold text-text-inverse">
                  IFISD
                </span>
                <span className="font-sans text-[7px] font-medium text-text-inverse-muted uppercase leading-[1.2]">
                  Viện nghiên cứu - Đào tạo Fintech,
                  <br />
                  Đổi mới sáng tạo và Phát triển bền vững
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full bg-border-dark flex items-center justify-center text-text-inverse-muted hover:text-text-inverse hover:bg-brand-orange transition-all duration-200 no-underline"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Description Column */}
          <div className="px-5 lg:border-r lg:border-border-dark">
            <p className="font-sans text-[13px] font-normal leading-[1.7] text-text-inverse-muted m-0">
              Viện nghiên cứu - đào tạo hàng đầu tại Việt Nam trong lĩnh vực
              FinTech, đổi mới sáng tạo và phát triển bền vững, kết nối tri
              thức, dẫn dắt đổi mới và kiến tạo giá trị bền vững.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section, idx) => (
            <div
              key={section.title}
              className={`px-5 ${idx < footerLinks.length - 1 || true ? "lg:border-r lg:border-border-dark" : ""}`}
            >
              <h4 className="font-sans text-[12px] font-semibold uppercase text-text-inverse m-0 mb-4 tracking-wide">
                {section.title}
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-sans text-[13px] font-normal text-text-inverse-muted no-underline hover:text-text-inverse transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="px-5 last:pr-0">
            <h4 className="font-sans text-[12px] font-semibold uppercase text-text-inverse m-0 mb-4 tracking-wide">
              THÔNG TIN LIÊN HỆ
            </h4>
            <div className="flex gap-5">
              {/* Contact items */}
              <ul className="list-none p-0 m-0 flex flex-col gap-3 flex-1">
                {contactInfo.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-text-inverse-muted shrink-0 mt-0.5">
                      {item.icon}
                    </span>
                    <span className="font-sans text-[13px] font-normal text-text-inverse-muted leading-[1.5]">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* QR Code — horizontal, next to contact */}
              <div className="w-20 h-20 rounded-sm bg-white flex items-center justify-center shrink-0 self-start">
                <div className="w-16 h-16 bg-gray-200 rounded-sm flex items-center justify-center">
                  <span className="font-sans text-[8px] text-text-muted text-center leading-[1.2]">
                    QR CODE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar — same bg as footer, divider on top */}
      <div className="border-t border-border-dark">
        <div className="max-w-[1672px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-sans text-[11px] text-text-inverse-muted">
            © 2026 Viện Nghiên cứu – Đào tạo FinTech, Đổi mới sáng tạo và
            Phát triển bền vững. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="font-sans text-[11px] text-text-inverse-muted no-underline hover:text-text-inverse transition-colors"
            >
              Điều khoản sử dụng
            </a>
            <a
              href="#"
              className="font-sans text-[11px] text-text-inverse-muted no-underline hover:text-text-inverse transition-colors"
            >
              Chính sách bảo mật
            </a>
            <a
              href="#"
              className="font-sans text-[11px] text-text-inverse-muted no-underline hover:text-text-inverse transition-colors"
            >
              Sơ đồ website
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
