import { IconMapPin, IconPhone, IconMail, IconGlobe } from "../../Icons/Icons";

const contactInfo = [
  {
    icon: <IconMapPin size={14} />,
    text: "71 Ngũ Hành Sơn, Phường Ngũ Hành Sơn, Thành phố Đà Nẵng",
    href: undefined,
  },
  {
    icon: <IconPhone size={14} />,
    text: "0935 549 555",
    href: "tel:0935549555",
  },
  {
    icon: <IconMail size={14} />,
    text: "info@ifisd.edu.vn",
    href: "mailto:info@ifisd.edu.vn",
  },
  {
    icon: <IconGlobe size={14} />,
    text: "www.ifisd.edu.vn",
    href: "https://www.ifisd.edu.vn",
  },
];

export const FooterContact = () => {
  return (
    <div>
      <h4 className="font-sans text-[12px] font-semibold uppercase text-text-inverse m-0 mb-5 tracking-wider footer-title-accent">
        THÔNG TIN LIÊN HỆ
      </h4>
      <div className="flex flex-row gap-6 items-stretch">
        <div className="flex-1 min-w-0">
          <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
            {contactInfo.map((item, i) => (
              <li
                key={i}
                className="group"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-start gap-3 no-underline footer-contact-row"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <span className="footer-contact-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="font-sans text-[13px] font-normal text-text-inverse-muted leading-[1.6] group-hover:text-text-inverse transition-colors duration-200 mt-0.5">
                      {item.text}
                    </span>
                  </a>
                ) : (
                  <div className="flex items-start gap-3 footer-contact-row">
                    <span className="footer-contact-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="font-sans text-[13px] font-normal text-text-inverse-muted leading-[1.6] mt-0.5">
                      {item.text}
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-qr-section flex flex-col items-center justify-center shrink-0 pl-6">
          <div className="footer-qr-wrapper">
            <div className="footer-qr-pulse-ring" aria-hidden="true" />
            <div className="footer-qr-container w-22 h-22">
              <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center">
                <svg
                  viewBox="0 0 64 64"
                  width="72"
                  height="72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="QR Code"
                  role="img"
                >
                  <rect
                    x="4"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="7"
                    y="7"
                    width="12"
                    height="12"
                    rx="1"
                    fill="white"
                  />
                  <rect
                    x="10"
                    y="10"
                    width="6"
                    height="6"
                    rx="1"
                    fill="#0a2e5c"
                  />

                  <rect
                    x="42"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="45"
                    y="7"
                    width="12"
                    height="12"
                    rx="1"
                    fill="white"
                  />
                  <rect
                    x="48"
                    y="10"
                    width="6"
                    height="6"
                    rx="1"
                    fill="#0a2e5c"
                  />

                  <rect
                    x="4"
                    y="42"
                    width="18"
                    height="18"
                    rx="2"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="7"
                    y="45"
                    width="12"
                    height="12"
                    rx="1"
                    fill="white"
                  />
                  <rect
                    x="10"
                    y="48"
                    width="6"
                    height="6"
                    rx="1"
                    fill="#0a2e5c"
                  />

                  <rect
                    x="26"
                    y="4"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="34"
                    y="4"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#f05123"
                  />
                  <rect
                    x="26"
                    y="12"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#1a8a34"
                  />
                  <rect
                    x="34"
                    y="12"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="30"
                    y="8"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="26"
                    y="26"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="30"
                    y="30"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#f05123"
                  />
                  <rect
                    x="34"
                    y="26"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="42"
                    y="26"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#1a8a34"
                  />
                  <rect
                    x="50"
                    y="26"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="42"
                    y="34"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="50"
                    y="34"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="26"
                    y="42"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="34"
                    y="42"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#f05123"
                  />
                  <rect
                    x="42"
                    y="50"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="50"
                    y="50"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#1a8a34"
                  />
                  <rect
                    x="56"
                    y="42"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="56"
                    y="56"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="34"
                    y="56"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#0a2e5c"
                  />
                  <rect
                    x="26"
                    y="56"
                    width="4"
                    height="4"
                    rx="0.5"
                    fill="#0a2e5c"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 mt-3">
            <span className="font-sans text-[11px] font-semibold text-text-inverse uppercase tracking-wide flex items-center gap-1.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="footer-scan-icon"
                aria-hidden="true"
              >
                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                <line x1="7" y1="12" x2="17" y2="12" />
              </svg>
              Quét mã QR
            </span>
            <span className="font-sans text-[10px] font-normal text-text-inverse-muted leading-normal text-center">
              Truy cập website nhanh chóng
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
