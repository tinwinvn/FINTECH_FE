import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Button/Button";
import {
  IconChevronDown,
  IconMenu,
  IconClose,
  IconSearch,
} from "../../Icons/Icons";
import { DesktopNavLink } from "./DesktopNavLink";
import { MobileNavItem } from "./MobileNavItem";
import { navItemsData } from "./navData";
import type { NavItemData } from "./navData";
import Logo from "../../../assets/Home/Logo_display.jpg";

export type NavBarProps = {
  logo?: React.ReactNode;
  navItems?: NavItemData[];
  className?: string;
};

export const NavBar = ({
  logo: _logo,
  navItems = navItemsData,
  className = "",
}: NavBarProps) => {
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

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
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
              className="h-10 w-32 py-1 px-1.5 sm:h-16 sm:w-48 sm:py-1.5 sm:px-2.5 lg:h-20 lg:w-80 lg:py-2.5 lg:px-5"
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
              {navItems.map((item) => (
                <DesktopNavLink key={item.href} item={item} />
              ))}
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
          {navItems.map((item) => (
            <MobileNavItem
              key={item.href}
              item={item}
              onNavigate={() => setMobileOpen(false)}
            />
          ))}
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
