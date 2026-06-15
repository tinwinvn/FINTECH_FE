import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconChevronDown } from "../../Icons/Icons";
import type { NavItemData } from "./navData";

export type MobileNavItemProps = {
  item: NavItemData;
  onNavigate: () => void;
};

export const MobileNavItem = ({ item, onNavigate }: MobileNavItemProps) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const hasDropdown = item.subItems && item.subItems.length > 0;
  const isActive =
    location.pathname === item.href ||
    item.subItems?.some((sub) => location.pathname === sub.href);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [expanded, item.subItems]);

  const baseClass = `
    flex items-center justify-between w-full font-sans text-[13px] font-semibold
    uppercase no-underline px-6 py-3 border-l-[3px] transition-all duration-150
    cursor-pointer bg-transparent border-t-0 border-r-0 border-b-0
  `;

  if (!hasDropdown) {
    return (
      <Link
        to={item.href}
        onClick={onNavigate}
        className={`${baseClass} ${
          isActive
            ? "text-brand-navy border-brand-navy bg-blue-50/50"
            : "text-text-primary border-transparent hover:text-brand-navy hover:bg-gray-50"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className={`${baseClass} ${
          isActive
            ? "text-brand-navy border-brand-navy bg-blue-50/50"
            : "text-text-primary border-transparent hover:text-brand-navy hover:bg-gray-50"
        }`}
      >
        <span>{item.label}</span>
        <IconChevronDown
          size={12}
          className={`opacity-60 transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        />
      </button>

      <div
        className="overflow-hidden transition-[max-height] duration-350"
        style={{
          maxHeight: expanded ? `${contentHeight}px` : "0px",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          ref={contentRef}
          className="py-0.5 pb-1.5 pl-4.5 ml-5.5 border-l-2 border-border-hairline"
        >
          {item.subItems!.map((sub, i) => {
            const Icon = sub.icon;
            const isSubActive = location.pathname === sub.href;
            return (
              <Link
                key={sub.href}
                to={sub.href}
                onClick={onNavigate}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-md no-underline font-sans text-[13px] font-medium
                  transition-all duration-200 animate-dropdown-item
                  hover:translate-x0.75
                  ${
                    isSubActive
                      ? "text-brand-navy font-semibold"
                      : "text-text-secondary hover:bg-brand-navy/5 hover:text-brand-navy"
                  }`}
                style={{
                  animationDelay: expanded ? `${i * 50}ms` : "0ms",
                }}
              >
                <span
                  className="flex items-center justify-center w-7.5 h-7.5 rounded-md shrink-0"
                  style={{
                    backgroundColor: `${sub.color}12`,
                    color: sub.color,
                  }}
                >
                  <Icon size={16} />
                </span>
                <span>{sub.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
