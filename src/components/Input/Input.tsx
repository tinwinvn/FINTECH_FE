import React from "react";
import { IconSearch } from "../Icons/Icons";

export type InputVariant = "search" | "newsletter" | "text";

type InputOwnProps = {
  variant?: InputVariant;
  label?: string;
  helperText?: string;
  error?: boolean;
  errorText?: string;
};

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> &
  InputOwnProps;

export const Input = ({
  variant = "text",
  label,
  helperText,
  error = false,
  errorText,
  className = "",
  ...rest
}: InputProps) => {
  const isSearch = variant === "search";

  const wrapperClasses = {
    search:
      "flex items-center gap-2 bg-canvas text-text-primary rounded-sm px-3 py-1.5 border border-border-hairline h-9 cursor-text focus-within:border-brand-navy transition-colors duration-150",
    newsletter:
      "flex items-center bg-canvas text-text-primary rounded-sm px-4 py-2.5 border-none w-full focus-within:ring-1 focus-within:ring-brand-green transition-all duration-150",
    text: `flex items-center bg-canvas text-text-primary rounded-sm px-4 py-2.5 border h-10 transition-colors duration-150 ${
      error
        ? "border-brand-orange focus-within:border-brand-orange"
        : "border-border-hairline focus-within:border-brand-navy"
    }`,
  };

  return (
    <div>
      {label && (
        <label className="block font-sans text-[14px] font-medium leading-normal text-text-primary mb-2">
          {label}
        </label>
      )}
      <div className={`${wrapperClasses[variant]} ${className}`}>
        {isSearch && (
          <span className="flex items-center shrink-0 text-text-muted">
            <IconSearch size={14} />
          </span>
        )}
        <input
          className="w-full border-none outline-none bg-transparent font-sans text-[14px] text-inherit placeholder:text-text-muted"
          {...rest}
        />
      </div>
      {(helperText || errorText) && (
        <p
          className={`font-sans text-[12px] font-normal leading-[1.4] mt-1 ${
            error && errorText ? "text-brand-orange" : "text-text-muted"
          }`}
        >
          {error && errorText ? errorText : helperText}
        </p>
      )}
    </div>
  );
};
