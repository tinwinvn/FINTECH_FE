import React, { useState } from "react";
import { Typography } from "../../components/Typography/Typography";
import { Button } from "../../components/Button/Button";
import { Badge } from "../../components/Badge/Badge";
import { Input } from "../../components/Input/Input";
import { Tabs } from "../../components/Tabs/Tabs";
import { Card } from "../../components/Card/Card";
import { PillarCard } from "../../components/Card/PillarCard";
import { NewsListItem } from "../../components/Card/NewsListItem";
import { EventListItem } from "../../components/Card/EventListItem";
import { NewsletterCard } from "../../components/Card/NewsletterCard";
import { HeroBanner } from "../../components/Layout/HeroBanner";
import { SectionHeading } from "../../components/Layout/SectionHeading";
import {
  IconGraduationCap,
  IconLightbulb,
  IconLeaf,
  IconArrowRight,
  IconStar,
  IconBookOpen,
} from "../../components/Icons/Icons";

/* ── Sample Data ── */
const sampleNews = [
  {
    thumbnailUrl:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=160&h=110&fit=crop",
    title: "IFISD ký kết hợp tác chiến lược với tổ chức tài chính quốc tế",
    date: "08 Tháng 6, 2026",
  },
  {
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=160&h=110&fit=crop",
    title:
      "Nghiên cứu mới về ứng dụng Blockchain trong thanh toán xuyên biên giới",
    date: "05 Tháng 6, 2026",
  },
  {
    thumbnailUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=160&h=110&fit=crop",
    title: "Chương trình đào tạo FinTech nhận chứng chỉ quốc tế",
    date: "02 Tháng 6, 2026",
  },
];

const sampleEvents = [
  {
    day: "15",
    month: "Th6",
    title: "Hội thảo quốc tế về Công nghệ Tài chính 2026",
    time: "08:00 - 17:00",
    location: "Đà Nẵng",
  },
  {
    day: "22",
    month: "Th6",
    title: "Workshop: Ứng dụng AI trong phân tích dữ liệu tài chính",
    time: "14:00 - 16:30",
    location: "Trực tuyến",
  },
  {
    day: "01",
    month: "Th7",
    title: "Khóa đào tạo chuyên sâu về Kinh tế xanh và ESG",
    time: "09:00 - 12:00",
    location: "Hà Nội",
  },
];

/* ── Section Wrapper ── */
const ShowcaseSection = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="mb-16 animate-fade-in-up scroll-mt-32">
    <SectionHeading title={title} />
    {children}
  </section>
);

/* ── Sidebar Navigation ── */
const sections = [
  { id: "hero-banner", label: "Hero Banner" },
  { id: "typography", label: "Kiểu chữ" },
  { id: "buttons", label: "Nút bấm" },
  { id: "badges", label: "Nhãn" },
  { id: "inputs", label: "Ô nhập liệu" },
  { id: "tabs", label: "Điều hướng" },
  { id: "cards", label: "Thẻ cơ bản" },
  { id: "pillars", label: "Thẻ trụ cột" },
  { id: "news", label: "Danh sách tin tức" },
  { id: "events", label: "Danh sách sự kiện" },
  { id: "newsletter", label: "Đăng ký bản tin" },
];

export const ComponentShowcase = () => {
  const [activeSection, setActiveSection] = useState("hero-banner");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="bg-brand-navy text-text-inverse py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-sans text-[32px] max-md:text-[24px] font-bold uppercase m-0 mb-3 animate-fade-in">
            Thư Viện Thành Phần
          </h1>
          <p className="font-sans text-[16px] font-normal leading-normal text-text-inverse-muted m-0 max-w-2xl animate-fade-in">
            Tất cả các thành phần giao diện được thiết kế theo Hệ thống Thiết kế
            IFISD — phong cách học thuật, chuyên nghiệp với hệ màu ngữ nghĩa ba
            màu.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-8">
        <aside className="hidden lg:block w-56 shrink-0">
          <nav className="sticky top-32">
            <h3 className="font-sans text-[13px] font-semibold uppercase text-text-muted mb-4 m-0">
              Thành phần
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollToSection(s.id)}
                    className={`
                      w-full text-left bg-transparent border-none font-sans text-[14px] py-1.5 px-3
                      rounded-sm cursor-pointer transition-all duration-150
                      ${
                        activeSection === s.id
                          ? "text-brand-navy font-semibold bg-blue-50 border-l-2 border-l-brand-navy"
                          : "text-text-secondary hover:text-brand-navy hover:bg-gray-50"
                      }
                    `}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="flex-1 min-w-0">
          <ShowcaseSection id="hero-banner" title="HERO BANNER">
            <p className="font-sans text-[14px] text-text-secondary mb-6">
              Banner chính với hình nền, lớp phủ gradient màu navy và nội dung
              chữ trắng + cam. Sử dụng nút xanh lá chính và nút viền trắng.
            </p>
            <div className="rounded-sm overflow-hidden border border-border-hairline">
              <HeroBanner />
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="typography" title="KIỂU CHỮ">
            <p className="font-sans text-[14px] text-text-secondary mb-6">
              Hệ thống kiểu chữ tuân theo nguyên tắc chữ in hoa cho tiêu đề,
              điều hướng và nút bấm. Phông chữ chính: Roboto / Inter.
            </p>
            <div className="flex flex-col gap-6 p-6 bg-white border border-border-hairline rounded-sm">
              <div>
                <span className="font-sans text-[12px] text-text-muted uppercase mb-1 block">
                  hero-display (40px, bold, uppercase)
                </span>
                <Typography variant="hero-display" color="navy">
                  TIÊU ĐỀ HERO
                </Typography>
              </div>
              <div>
                <span className="font-sans text-[12px] text-text-muted uppercase mb-1 block">
                  hero-highlight (40px, bold, uppercase, orange)
                </span>
                <Typography variant="hero-highlight">
                  FINTECH & ĐỔI MỚI
                </Typography>
              </div>
              <div>
                <span className="font-sans text-[12px] text-text-muted uppercase mb-1 block">
                  section-heading (18px, bold, uppercase, navy)
                </span>
                <Typography variant="section-heading">TIÊU ĐỀ MỤC</Typography>
              </div>
              <div>
                <span className="font-sans text-[12px] text-text-muted uppercase mb-1 block">
                  pillar-heading (18px, bold, uppercase)
                </span>
                <Typography variant="pillar-heading">
                  TIÊU ĐỀ TRỤ CỘT
                </Typography>
              </div>
              <div>
                <span className="font-sans text-[12px] text-text-muted uppercase mb-1 block">
                  card-title (14px, semibold)
                </span>
                <Typography variant="card-title">
                  Tiêu đề thẻ nội dung
                </Typography>
              </div>
              <div>
                <span className="font-sans text-[12px] text-text-muted uppercase mb-1 block">
                  body-md (14px, regular)
                </span>
                <Typography variant="body-md">
                  Nội dung chính — IFISD tiên phong trong nghiên cứu và đào tạo
                  công nghệ tài chính tại Việt Nam.
                </Typography>
              </div>
              <div>
                <span className="font-sans text-[12px] text-text-muted uppercase mb-1 block">
                  meta-text (12px, muted)
                </span>
                <Typography variant="meta-text">
                  08 Tháng 6, 2026 • Đà Nẵng
                </Typography>
              </div>
              <div className="flex items-end gap-4">
                <div>
                  <span className="font-sans text-[12px] text-text-muted uppercase mb-1 block">
                    event-day (24px, bold)
                  </span>
                  <Typography variant="event-day">15</Typography>
                </div>
                <div>
                  <span className="font-sans text-[12px] text-text-muted uppercase mb-1 block">
                    event-month (11px, semibold)
                  </span>
                  <Typography variant="event-month">Th6</Typography>
                </div>
              </div>
              <div>
                <span className="font-sans text-[12px] text-text-muted uppercase mb-1 block">
                  nav-link (13px, semibold, uppercase)
                </span>
                <Typography variant="nav-link">ĐIỀU HƯỚNG</Typography>
              </div>
            </div>

            <h3 className="font-sans text-[14px] font-semibold text-text-primary mt-8 mb-4">
              Bảng màu chữ
            </h3>
            <div className="flex flex-wrap gap-3">
              {(
                [
                  "primary",
                  "secondary",
                  "muted",
                  "navy",
                  "orange",
                  "green",
                ] as const
              ).map((color) => (
                <div
                  key={color}
                  className="px-4 py-2 border border-border-hairline rounded-sm"
                >
                  <Typography variant="card-title" color={color}>
                    {color}
                  </Typography>
                </div>
              ))}
              <div className="px-4 py-2 bg-brand-navy rounded-sm">
                <Typography variant="card-title" color="inverse">
                  inverse
                </Typography>
              </div>
              <div className="px-4 py-2 bg-brand-navy rounded-sm">
                <Typography variant="card-title" color="inverse-muted">
                  inverse-muted
                </Typography>
              </div>
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="buttons" title="NÚT BẤM">
            <p className="font-sans text-[14px] text-text-secondary mb-6">
              Hệ thống nút bấm sử dụng góc bo 4px, chữ in hoa 13px đậm, không có
              bóng. Cam cho CTA chính, Xanh lá cho hành động xác nhận, Viền
              trắng cho nền tối.
            </p>

            <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-4">
              Nút chính
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button variant="primary-orange">Liên hệ ngay</Button>
              <Button
                variant="primary-orange"
                iconRight={<IconArrowRight size={14} />}
              >
                Khám phá
              </Button>
              <Button variant="primary-orange" disabled>
                Đã vô hiệu
              </Button>
              <Button variant="primary-orange" loading>
                Đang tải
              </Button>
            </div>

            <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-4">
              Nút xanh lá (xác nhận)
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button variant="primary-green">Tìm hiểu thêm</Button>
              <Button variant="primary-green" size="lg">
                Đăng ký ngay
              </Button>
              <Button variant="primary-green" size="sm">
                Gửi
              </Button>
            </div>

            <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-4">
              Nút viền trắng (trên nền tối)
            </h3>
            <div className="flex flex-wrap gap-3 p-6 bg-brand-navy rounded-sm mb-6">
              <Button variant="outline-white">Chương trình đào tạo</Button>
              <Button
                variant="outline-white"
                iconRight={<IconArrowRight size={14} />}
              >
                Xem thêm
              </Button>
            </div>

            <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-4">
              Liên kết văn bản
            </h3>
            <div className="flex flex-wrap gap-6">
              <Button variant="link-navy">Xem chi tiết →</Button>
              <Button variant="link-orange">Xem chi tiết →</Button>
              <Button variant="link-green">Xem chi tiết →</Button>
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="badges" title="NHÃN">
            <p className="font-sans text-[14px] text-text-secondary mb-6">
              Nhãn sử dụng hệ màu ngữ nghĩa ba màu: Navy (Tri thức), Cam (Đổi
              mới), Xanh lá (Bền vững), và viền (Metadata).
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge
                variant="navy"
                icon={<IconGraduationCap size={12} color="#fff" />}
              >
                Nghiên cứu
              </Badge>
              <Badge
                variant="orange"
                icon={<IconLightbulb size={12} color="#fff" />}
              >
                Đổi mới
              </Badge>
              <Badge variant="green" icon={<IconLeaf size={12} color="#fff" />}>
                Bền vững
              </Badge>
              <Badge variant="outline">FinTech</Badge>
              <Badge variant="outline">Blockchain</Badge>
              <Badge variant="outline">ESG</Badge>
              <Badge variant="navy">Mới</Badge>
              <Badge variant="orange">Nổi bật</Badge>
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="inputs" title="Ô NHẬP LIỆU">
            <p className="font-sans text-[14px] text-text-secondary mb-6">
              Ô nhập liệu sử dụng góc bo 4px, viền hairline, không có bóng. Ba
              biến thể: tìm kiếm, bản tin và văn bản.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-3">
                  Tìm kiếm
                </h3>
                <Input variant="search" placeholder="Tìm kiếm bài viết..." />
              </div>

              <div>
                <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-3">
                  Văn bản
                </h3>
                <Input
                  variant="text"
                  label="Họ và tên"
                  placeholder="Nhập họ và tên..."
                  helperText="Vui lòng nhập đầy đủ họ và tên"
                />
              </div>

              <div>
                <h3 className="font-sans text-[14px] font-semibold text-text-primary mb-3">
                  Văn bản (lỗi)
                </h3>
                <Input
                  variant="text"
                  label="Email"
                  placeholder="Nhập email..."
                  error
                  errorText="Địa chỉ email không hợp lệ"
                  defaultValue="abc@"
                />
              </div>

              <div className="bg-surface-navy rounded-md p-6">
                <h3 className="font-sans text-[14px] font-semibold text-text-inverse mb-3">
                  Bản tin (trên nền tối)
                </h3>
                <Input
                  variant="newsletter"
                  placeholder="Nhập email của bạn..."
                />
              </div>
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="tabs" title="ĐIỀU HƯỚNG">
            <p className="font-sans text-[14px] text-text-secondary mb-6">
              Thanh điều hướng sử dụng chữ in hoa 13px đậm với đường viền dưới
              3px màu navy cho tab đang hoạt động.
            </p>
            <Tabs
              items={[
                { label: "Tất cả", value: "all" },
                { label: "Nghiên cứu", value: "research" },
                { label: "Đào tạo", value: "training" },
                { label: "Sự kiện", value: "events" },
                { label: "Dự án", value: "projects" },
              ]}
              defaultValue="all"
            />
          </ShowcaseSection>

          <ShowcaseSection id="cards" title="THẺ CƠ BẢN">
            <p className="font-sans text-[14px] text-text-secondary mb-6">
              Thẻ cơ bản sử dụng viền hairline, góc bo 4px, không có bóng. Biến
              thể newsletter sử dụng nền navy tối.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                variant="base"
                icon={<IconBookOpen size={20} className="text-brand-navy" />}
                title="Thẻ cơ bản"
                description="Thẻ nội dung với viền hairline, phong cách phẳng, không sử dụng bóng đổ."
                footer={<Button variant="link-navy">Xem chi tiết →</Button>}
              />
              <Card
                variant="base"
                icon={<IconStar size={20} className="text-brand-orange" />}
                title="Thẻ nổi bật"
                description="Thẻ nội dung với icon ngôi sao, có thể chứa bất kỳ nội dung con nào."
                footer={<Button variant="link-orange">Xem chi tiết →</Button>}
              />
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="pillars" title="THẺ TRỤ CỘT">
            <p className="font-sans text-[14px] text-text-secondary mb-6">
              Lưới 3 cột đại diện cho hệ thống màu ngữ nghĩa: Navy (Tri thức),
              Cam (Đổi mới), Xanh lá (Bền vững). Mỗi cột có icon tròn 64px.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border-hairline rounded-sm divide-x divide-border-hairline">
              <PillarCard
                color="navy"
                icon={<IconGraduationCap size={28} color="#fff" />}
                title="Nghiên cứu & Đào tạo"
                description="Tiên phong nghiên cứu học thuật và đào tạo chuyên sâu về Công nghệ Tài chính theo tiêu chuẩn quốc tế."
              />
              <PillarCard
                color="orange"
                icon={<IconLightbulb size={28} color="#fff" />}
                title="Đổi mới sáng tạo"
                description="Thúc đẩy đổi mới sáng tạo, ứng dụng công nghệ mới vào lĩnh vực tài chính và ngân hàng số."
              />
              <PillarCard
                color="green"
                icon={<IconLeaf size={28} color="#fff" />}
                title="Phát triển bền vững"
                description="Cam kết phát triển bền vững, tích hợp ESG và kinh tế xanh vào chiến lược tài chính."
              />
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="news" title="DANH SÁCH TIN TỨC">
            <p className="font-sans text-[14px] text-text-secondary mb-6">
              Hàng tin tức với ảnh thu nhỏ 80×55px bên trái, tiêu đề và ngày
              tháng bên phải, phân cách bằng đường viền hairline.
            </p>
            <div className="max-w-lg">
              {sampleNews.map((item, i) => (
                <NewsListItem key={i} {...item} />
              ))}
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="events" title="DANH SÁCH SỰ KIỆN">
            <p className="font-sans text-[14px] text-text-secondary mb-6">
              Hàng sự kiện với ô ngày tháng xếp chồng (ngày lớn + tháng viết hoa
              nhỏ) thay cho ảnh thu nhỏ, giúp nhận diện dữ liệu lịch nhanh
              chóng.
            </p>
            <div className="max-w-lg">
              {sampleEvents.map((item, i) => (
                <EventListItem key={i} {...item} />
              ))}
            </div>
          </ShowcaseSection>

          <ShowcaseSection id="newsletter" title="ĐĂNG KÝ BẢN TIN">
            <p className="font-sans text-[14px] text-text-secondary mb-6">
              Khối đăng ký bản tin với nền navy tối, icon mail, ô nhập email và
              nút đăng ký xanh lá. Góc bo 8px.
            </p>
            <div className="max-w-sm">
              <NewsletterCard
                onSubmit={(email) => alert(`Đã đăng ký: ${email}`)}
              />
            </div>
          </ShowcaseSection>
        </div>
      </div>
    </div>
  );
};
