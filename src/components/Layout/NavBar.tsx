import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { IconChevronDown, IconMenu, IconClose } from "../Icons/Icons";

export type NavItem = {
  label: string;
  href: string;
};

export type NavBarProps = {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  className?: string;
};

const defaultNavItems: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Nghiên cứu", href: "/research" },
  { label: "Đào tạo", href: "/training" },
  { label: "Sự kiện", href: "/events" },
  { label: "Thành phần", href: "/component" },
];

export const NavBar = ({
  logo,
  navItems = defaultNavItems,
  className = "",
}: NavBarProps) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={`w-full bg-canvas border-b border-border-hairline sticky top-0 z-50 ${className}`}>
      {/* Top Utility Bar */}
      <div className="bg-gray-50 border-b border-border-hairline">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-3 h-10">
          <Input
            variant="search"
            placeholder="Tìm kiếm..."
            className="w-48 hidden sm:flex"
          />

          {/* Language Selector */}
          <button className="inline-flex items-center gap-1 font-sans text-[13px] font-semibold text-text-primary bg-transparent border-none cursor-pointer hover:text-brand-navy transition-colors">
            VI
            <IconChevronDown size={12} />
          </button>

          <Button variant="primary-orange" size="sm">
            Liên hệ
          </Button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline shrink-0">
          {logo || (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-brand-navy flex items-center justify-center text-text-inverse font-bold text-[14px]">
                IF
              </div>
              <span className="font-sans text-[16px] font-bold text-brand-navy hidden sm:inline">
                IFISD
              </span>
            </div>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center h-full">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`
                  font-sans text-[13px] font-semibold leading-[1.5] uppercase no-underline
                  px-4 h-full flex items-center border-b-[3px] transition-all duration-150
                  ${
                    isActive
                      ? "text-brand-navy border-brand-navy"
                      : "text-text-primary border-transparent hover:text-brand-navy"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer text-text-primary p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border-hairline bg-canvas animate-slide-up">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  block font-sans text-[13px] font-semibold uppercase no-underline
                  px-6 py-3 border-l-[3px] transition-all duration-150
                  ${
                    isActive
                      ? "text-brand-navy border-brand-navy bg-blue-50"
                      : "text-text-primary border-transparent hover:text-brand-navy hover:bg-gray-50"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="px-6 py-3 border-t border-border-hairline">
            <Input variant="search" placeholder="Tìm kiếm..." />
          </div>
        </div>
      )}
    </header>
  );
};
