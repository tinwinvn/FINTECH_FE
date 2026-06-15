import { Link } from "react-router-dom";
import { IconChevronRight } from "../../Icons/Icons";
import type { NavSubItem } from "./navData";

export type NavDropdownItemProps = {
  item: NavSubItem;
  index: number;
  onNavigate: () => void;
};

export const NavDropdownItem = ({
  item,
  index,
  onNavigate,
}: NavDropdownItemProps) => {
  const Icon = item.icon;

  return (
    <Link
      to={item.href}
      onClick={onNavigate}
      className="group/item flex items-center gap-3 px-3.5 py-1.5 rounded-md no-underline text-text-primary font-sans text-[13px] font-medium leading-snug relative transition-all duration-200 animate-dropdown-item hover:translate-x-0.75 hover:text-brand-navy active:translate-x-px active:scale-[0.99]"
      style={{
        animationDelay: `${index * 40}ms`,
      }}
    >
      <span
        className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0 transition-transform duration-250 group-hover/item:scale-110"
        style={{
          backgroundColor: `${item.color}12`,
          color: item.color,
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <Icon size={18} />
      </span>
      <span className="flex-1 min-w-0">{item.label}</span>
      <IconChevronRight
        size={14}
        className="shrink-0 text-brand-navy opacity-0 -translate-x-1.5 transition-all duration-200 group-hover/item:opacity-60 group-hover/item:translate-x-0"
      />
    </Link>
  );
};
