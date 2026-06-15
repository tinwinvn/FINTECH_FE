import { useState, useRef, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconChevronDown } from "../../Icons/Icons";
import { NavDropdownPanel } from "./NavDropdownPanel";
import type { NavItemData } from "./navData";

export type DesktopNavLinkProps = {
  item: NavItemData;
};

export const DesktopNavLink = ({ item }: DesktopNavLinkProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasDropdown = item.subItems && item.subItems.length > 0;
  const isActive =
    location.pathname === item.href ||
    item.subItems?.some((sub) => location.pathname === sub.href);

  const handleMouseEnter = useCallback(() => {
    if (!hasDropdown) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  }, [hasDropdown]);

  const handleMouseLeave = useCallback(() => {
    if (!hasDropdown) return;
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  }, [hasDropdown]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const baseLinkClass = `
    inline-flex items-center gap-0.5 whitespace-nowrap
    font-sans text-[11px] font-semibold leading-normal uppercase no-underline
    px-2 h-full border-b-[3px] transition-all duration-150 cursor-pointer
  `;

  if (!hasDropdown) {
    return (
      <Link
        to={item.href}
        className={`${baseLinkClass} ${
          isActive
            ? "text-brand-navy border-brand-navy"
            : "text-text-primary border-transparent hover:text-brand-navy"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative flex items-stretch h-full group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={`${baseLinkClass} select-none ${
          isActive
            ? "text-brand-navy border-brand-navy"
            : "text-text-primary border-transparent hover:text-brand-navy"
        }`}
      >
        {item.label}
        <IconChevronDown
          size={10}
          className={`opacity-60 transition-transform duration-250 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        />
      </span>

      <NavDropdownPanel
        subItems={item.subItems!}
        isOpen={isOpen}
        onClose={handleClose}
        parentLabel={item.label}
      />
    </div>
  );
};
