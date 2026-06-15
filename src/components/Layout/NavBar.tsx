import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../Button/Button";
import {
  IconChevronDown,
  IconMenu,
  IconClose,
  IconSearch,
} from "../Icons/Icons";
import Logo from "../../assets/Logo_display.jpg";

export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export type NavBarProps = {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  className?: string;
};

const defaultNavItems: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about", hasDropdown: true },
  { label: "Lĩnh vực hoạt động", href: "/domains", hasDropdown: true },
  {
    label: "Nghiên cứu & Tư vấn chính sách",
    href: "/research",
    hasDropdown: true,
  },
  { label: "Đào tạo", href: "/training", hasDropdown: true },
  { label: "Hợp tác", href: "/cooperation", hasDropdown: true },
  { label: "Sự kiện", href: "/events" },
  { label: "Tin tức", href: "/news" },
  { label: "Thư viện tri thức", href: "/library" },
  { label: "Liên hệ", href: "/contact" },
];

export const NavBar = ({
  logo: _logo,
  navItems = defaultNavItems,
  className = "",
}: NavBarProps) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("VI");
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={`w-full bg-canvas border-b border-border-hairline sticky top-0 z-50 shadow-sm ${className}`}
    >
      <div className="max-w-456 mx-auto px-4">
        <div className="flex">
          <Link
            to="/"
            className="flex items-center no-underline shrink-0 mr-5 self-stretch"
          >
            <img
              src={Logo}
              className="h-16 w-40 py-2 px-3 sm:h-20 sm:w-56 sm:py-3 sm:px-5 lg:h-30 lg:w-90 lg:py-5 lg:px-10"
              alt="logo"
            />
          </Link>

          <div className="flex-1 min-w-0 flex flex-col">
            <div className="hidden lg:flex items-center justify-end gap-3 h-10 pb-8 pt-10">
              <div className="flex items-center bg-canvas text-text-primary rounded-sm px-3 py-1.5 border border-border-hairline h-8 w-64 focus-within:border-brand-navy transition-colors duration-150">
                <input
                  className="w-full border-none outline-none bg-transparent font-sans text-[12px] text-inherit placeholder:text-text-muted"
                  placeholder="Tìm kiếm..."
                />
                <span className="flex items-center shrink-0 text-text-muted ml-2 cursor-pointer hover:text-brand-navy transition-colors">
                  <IconSearch size={14} />
                </span>
              </div>

              <div ref={langRef} className="relative">
                <div
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center bg-canvas rounded-sm px-2.5 py-1.5 border border-border-hairline h-8 cursor-pointer hover:border-brand-navy transition-colors select-none"
                >
                  <span className="font-sans text-[12px] font-semibold text-text-primary">
                    {lang}
                  </span>
                  <IconChevronDown size={10} className="ml-1 opacity-60" />
                </div>
                {langOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-canvas border border-border-hairline rounded-sm shadow-md z-50 min-w-18 overflow-hidden">
                    {["VI", "EN"].map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 font-sans text-[12px] font-semibold border-none cursor-pointer transition-colors ${
                          lang === l
                            ? "bg-blue-50 text-brand-navy"
                            : "bg-transparent text-text-primary hover:bg-gray-50"
                        }`}
                      >
                        {l === "VI" ? "🇻🇳 VI" : "🇬🇧 EN"}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button variant="primary-orange" size="sm">
                KẾT NỐI HỢP TÁC
              </Button>
            </div>

            <nav className="hidden lg:flex items-center justify-center h-10">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`
                      inline-flex items-center gap-0.5 whitespace-nowrap
                      font-sans text-[11px] font-semibold leading-normal uppercase no-underline
                      px-2 h-full border-b-[3px] transition-all duration-150
                      ${
                        isActive
                          ? "text-brand-navy border-brand-navy"
                          : "text-text-primary border-transparent hover:text-brand-navy"
                      }
                    `}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <IconChevronDown size={10} className="opacity-60" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <button
            className="lg:hidden bg-transparent border-none cursor-pointer text-text-primary p-1 ml-auto self-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border-hairline bg-canvas animate-slide-up max-h-[70vh] overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  flex items-center justify-between font-sans text-[13px] font-semibold uppercase no-underline
                  px-6 py-3 border-l-[3px] transition-all duration-150
                  ${
                    isActive
                      ? "text-brand-navy border-brand-navy bg-blue-50"
                      : "text-text-primary border-transparent hover:text-brand-navy hover:bg-gray-50"
                  }
                `}
              >
                {item.label}
                {item.hasDropdown && (
                  <IconChevronDown size={12} className="opacity-60" />
                )}
              </Link>
            );
          })}
          <div className="px-6 py-3 border-t border-border-hairline flex items-center gap-3">
            <div className="flex items-center flex-1 bg-canvas text-text-primary rounded-sm px-3 py-1.5 border border-border-hairline">
              <input
                className="w-full border-none outline-none bg-transparent font-sans text-[13px] text-inherit placeholder:text-text-muted"
                placeholder="Tìm kiếm..."
              />
              <IconSearch size={14} className="text-text-muted ml-2" />
            </div>
            <Button variant="primary-orange" size="sm">
              KẾT NỐI HỢP TÁC
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
