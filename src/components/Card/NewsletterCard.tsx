import React, { useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { IconMail, IconSend } from "../Icons/Icons";

export type NewsletterCardProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
  className?: string;
};

export const NewsletterCard = ({
  title = "ĐĂNG KÝ BẢN TIN",
  description = "Nhận thông tin mới nhất về nghiên cứu, sự kiện và đào tạo FinTech trực tiếp qua email.",
  buttonText = "ĐĂNG KÝ",
  onSubmit,
  className = "",
}: NewsletterCardProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubmit?.(email);
      setEmail("");
    }
  };

  return (
    <div
      className={`bg-surface-navy text-text-inverse rounded-md p-8 h-full flex flex-col ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center animate-icon-float">
          <IconMail size={20} color="#ffffff" />
        </div>
        <h3 className="font-sans text-[18px] font-bold leading-[1.3] uppercase m-0">
          {title}
        </h3>
      </div>

      <p className="font-sans text-[18px] font-normal leading-normal text-text-inverse-muted mb-5 m-0 line-clamp-3">
        {description}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-auto">
        <Input
          variant="newsletter"
          placeholder="Nhập email của bạn..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Button
          variant="primary-green"
          type="submit"
          className="w-full animate-pulse-glow"
          iconRight={<IconSend size={14} />}
        >
          {buttonText}
        </Button>
      </form>
    </div>
  );
};
