import type { ComponentType } from "react";
import type { IconProps } from "../../Icons/Icons";
import {
  IconBuilding,
  IconTarget,
  IconSitemap,
  IconUserTie,
  IconHandshake,
  IconMonitor,
  IconLightbulb,
  IconLeaf,
  IconFileSearch,
  IconFileText,
  IconMessageCircle,
  IconGraduationCap,
  IconClipboardList,
} from "../../Icons/Icons";

export type NavSubItem = {
  label: string;
  href: string;
  icon: ComponentType<IconProps>;
  color: string;
};

export type NavItemData = {
  label: string;
  href: string;
  subItems?: NavSubItem[];
};

export const navItemsData: NavItemData[] = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Giới thiệu",
    href: "/about",
    subItems: [
      {
        label: "Tổng quan về Viện",
        href: "/about/overview",
        icon: IconBuilding,
        color: "#0a2e5c",
      },
      {
        label: "Sứ mạng - Tầm nhìn",
        href: "/about/mission",
        icon: IconTarget,
        color: "#0a2e5c",
      },
      {
        label: "Cơ cấu tổ chức",
        href: "/about/structure",
        icon: IconSitemap,
        color: "#1a8a34",
      },
      {
        label: "Ban Lãnh đạo",
        href: "/about/leadership",
        icon: IconUserTie,
        color: "#0a2e5c",
      },
      {
        label: "Hội đồng tư vấn",
        href: "/about/advisory",
        icon: IconHandshake,
        color: "#0a2e5c",
      },
    ],
  },
  {
    label: "Lĩnh vực hoạt động",
    href: "/domains",
    subItems: [
      {
        label: "FinTech và tài chính số",
        href: "/domains/fintech",
        icon: IconMonitor,
        color: "#0a2e5c",
      },
      {
        label: "Đổi mới sáng tạo",
        href: "/domains/innovation",
        icon: IconLightbulb,
        color: "#1a8a34",
      },
      {
        label: "Phát triển bền vững",
        href: "/domains/sustainability",
        icon: IconLeaf,
        color: "#f05123",
      },
    ],
  },
  {
    label: "Nghiên cứu & Tư vấn chính sách",
    href: "/research",
    subItems: [
      {
        label: "Đề tài/ dự án nghiên cứu",
        href: "/research/projects",
        icon: IconFileSearch,
        color: "#0a2e5c",
      },
      {
        label: "Báo cáo & ấn phẩm",
        href: "/research/publications",
        icon: IconFileText,
        color: "#1a8a34",
      },
      {
        label: "Dịch vụ tư vấn chính sách",
        href: "/research/consulting",
        icon: IconMessageCircle,
        color: "#f05123",
      },
    ],
  },
  {
    label: "Đào tạo",
    href: "/training",
    subItems: [
      {
        label: "Chương trình đào tạo",
        href: "/training/programs",
        icon: IconGraduationCap,
        color: "#0a2e5c",
      },
      {
        label: "Thông tin tuyển sinh",
        href: "/training/admission",
        icon: IconClipboardList,
        color: "#1a8a34",
      },
    ],
  },
  {
    label: "Hợp tác",
    href: "/cooperation",
  },
  {
    label: "Sự kiện",
    href: "/events",
  },
  {
    label: "Tin tức",
    href: "/news",
  },
  {
    label: "Thư viện tri thức",
    href: "/library",
  },
  {
    label: "Liên hệ",
    href: "/contact",
  },
];
