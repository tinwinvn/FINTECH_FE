import { useState } from "react";

export type TabItem = {
  label: string;
  value: string;
  badge?: React.ReactNode;
};

export type TabsProps = {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export const Tabs = ({
  items,
  defaultValue,
  value: controlledValue,
  onChange,
  className = "",
}: TabsProps) => {
  const [internalValue, setInternalValue] = useState(
    defaultValue || items[0]?.value || "",
  );
  const activeValue = controlledValue ?? internalValue;

  const handleSelect = (val: string) => {
    if (controlledValue === undefined) setInternalValue(val);
    onChange?.(val);
  };

  return (
    <div
      className={`inline-flex items-center border-b border-border-hairline ${className}`}
      role="tablist"
    >
      {items.map((item) => {
        const isActive = activeValue === item.value;
        return (
          <button
            key={item.value}
            role="tab"
            aria-selected={isActive}
            className={`
              bg-transparent font-sans text-[13px] font-semibold leading-[1.5] uppercase
              px-4 py-3 border-b-[3px] cursor-pointer transition-all duration-150 ease-in-out outline-none
              ${
                isActive
                  ? "text-brand-navy border-brand-navy"
                  : "text-text-primary border-transparent hover:text-brand-navy"
              }
            `}
            onClick={() => handleSelect(item.value)}
          >
            {item.label}
            {item.badge && <span className="ml-1.5">{item.badge}</span>}
          </button>
        );
      })}
    </div>
  );
};
