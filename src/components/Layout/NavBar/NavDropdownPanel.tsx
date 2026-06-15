import { useRef, useEffect } from "react";
import type { NavSubItem } from "./navData";
import { NavDropdownItem } from "./NavDropdownItem";

export type NavDropdownPanelProps = {
  subItems: NavSubItem[];
  isOpen: boolean;
  onClose: () => void;
  parentLabel: string;
};

export const NavDropdownPanel = ({
  subItems,
  isOpen,
  onClose,
  parentLabel,
}: NavDropdownPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      className="absolute top-full left-0 min-w-65 bg-canvas rounded-xl z-100 overflow-hidden pb-1.5 animate-dropdown-enter"
      style={{
        boxShadow:
          "0 10px 40px -8px rgba(10, 46, 92, 0.18), 0 4px 12px -2px rgba(10, 46, 92, 0.08), 0 0 0 1px rgba(10, 46, 92, 0.06)",
      }}
      role="menu"
      aria-label={parentLabel}
    >
      <div
        className="h-0.75 rounded-t-sm"
        style={{
          background:
            "linear-gradient(90deg, #0a2e5c 0%, #1a8a34 50%, #f05123 100%)",
        }}
      />
      <div className="p-1.5">
        {subItems.map((sub, i) => (
          <NavDropdownItem
            key={sub.href}
            item={sub}
            index={i}
            onNavigate={onClose}
          />
        ))}
      </div>
    </div>
  );
};
