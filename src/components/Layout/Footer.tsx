
import { Link } from "react-router-dom";
import {
  IconFacebook,
  IconYoutube,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconMapPin,
} from "../Icons/Icons";

export type FooterProps = {
  className?: string;
};

const footerLinks = [
  {
    title: "LIÊN KẾT NHANH",
    links: [
      { label: "Trang chủ", href: "/" },
      { label: "Giới thiệu", href: "/about" },
      { label: "Nghiên cứu", href: "/research" },
      { label: "Đào tạo", href: "/training" },
      { label: "Sự kiện", href: "/events" },
    ],
  },
  {
    title: "LĨNH VỰC TRỌNG TÂM",
    links: [
      { label: "Công nghệ Tài chính", href: "#" },
      { label: "Đổi mới sáng tạo", href: "#" },
      { label: "Phát triển bền vững", href: "#" },
      { label: "Chuyển đổi số", href: "#" },
      { label: "Kinh tế xanh", href: "#" },
    ],
  },
];

const contactInfo = [
  {
    icon: <IconMapPin size={16} />,
    text: "Đại học Đà Nẵng, TP. Đà Nẵng, Việt Nam",
  },
  {
    icon: <IconPhone size={16} />,
    text: "(+84) 236 123 4567",
  },
  {
    icon: <IconMail size={16} />,
    text: "contact@ifisd.edu.vn",
  },
];

const socialLinks = [
  { icon: <IconFacebook size={18} />, href: "#", label: "Facebook" },
  { icon: <IconYoutube size={18} />, href: "#", label: "YouTube" },
  { icon: <IconLinkedIn size={18} />, href: "#", label: "LinkedIn" },
];

export const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer className={`bg-surface-navy text-text-inverse ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-brand-orange flex items-center justify-center text-text-inverse font-bold text-[14px]">
                IF
              </div>
              <span className="font-sans text-[16px] font-bold">IFISD</span>
            </div>
            <p className="font-sans text-[14px] font-normal leading-[1.5] text-text-inverse-muted m-0 mb-6">
              Viện Nghiên cứu - Đào tạo FinTech, Đổi mới sáng tạo và Phát triển bền vững
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-sm bg-border-dark flex items-center justify-center text-text-inverse-muted hover:text-text-inverse hover:bg-brand-orange transition-all duration-200 no-underline"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-sans text-[13px] font-semibold uppercase text-text-inverse m-0 mb-4 tracking-wide">
                {section.title}
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-sans text-[14px] font-normal text-text-inverse-muted no-underline hover:text-text-inverse transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="font-sans text-[13px] font-semibold uppercase text-text-inverse m-0 mb-4 tracking-wide">
              LIÊN HỆ
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-text-inverse-muted shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <span className="font-sans text-[14px] font-normal text-text-inverse-muted">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-surface-navy-dark border-t border-border-dark">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-sans text-[12px] text-text-inverse-muted">
            © 2026 IFISD. Bảo lưu mọi quyền.
          </span>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="font-sans text-[12px] text-text-inverse-muted no-underline hover:text-text-inverse transition-colors"
            >
              Chính sách bảo mật
            </a>
            <a
              href="#"
              className="font-sans text-[12px] text-text-inverse-muted no-underline hover:text-text-inverse transition-colors"
            >
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
