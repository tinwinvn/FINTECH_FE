import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { IconGlobe, IconLightbulb, IconLeaf } from "../../components/Icons/Icons";

type PillarItem = {
  icon: React.ReactNode;
  title: string;
  titleColor: string;
  description: string;
  linkColor: string;
};

const pillars: PillarItem[] = [
  {
    icon: <IconGlobe size={40} color="#ffffff" />,
    title: "KẾT NỐI TRI THỨC",
    titleColor: "text-brand-navy",
    description:
      "Liên kết nhà trường, cơ quan quản lý, doanh nghiệp, chuyên gia và đối tác quốc tế; kết nối nghiên cứu, đào tạo và thực tiễn thúc đẩy tri thức phục vụ Trung tâm Tài chính quốc tế Đà Nẵng.",
    linkColor: "text-brand-navy hover:underline",
  },
  {
    icon: <IconLightbulb size={40} color="#ffffff" />,
    title: "DẪN DẮT ĐỔI MỚI",
    titleColor: "text-brand-orange",
    description:
      "Thúc đẩy nghiên cứu ứng dụng, tư vấn chính sách, mô phỏng và hỗ trợ thử nghiệm các mô hình FinTech, tài chính số, tài chính xanh và quản trị ESG; góp phần hình thành hệ sinh thái đổi mới sáng tạo.",
    linkColor: "text-brand-orange hover:underline",
  },
  {
    icon: <IconLeaf size={40} color="#ffffff" />,
    title: "KIẾN TẠO PHÁT TRIỂN BỀN VỮNG",
    titleColor: "text-brand-green",
    description:
      "Góp phần xây dựng nền tảng phát triển dài hạn thông qua đào tạo nguồn nhân lực chất lượng cao, phát triển tài chính bền vững, hỗ trợ chuyển đổi xanh và lan tỏa các chuẩn mực ESG.",
    linkColor: "text-brand-green hover:underline",
  },
];

const iconBgColors = ["bg-brand-navy", "bg-brand-orange", "bg-brand-green"];

export const PillarsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="bg-gray-50 border-y border-border-hairline"
    >
      <div className="max-w-[1672px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`
                flex gap-5 p-6 bg-canvas rounded-md border border-border-hairline
                transition-all duration-700 ease-out
                hover:shadow-lg hover:-translate-y-1
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }
              `}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 shrink-0 rounded-full flex items-center justify-center ${iconBgColors[i]} shadow-md`}
              >
                {pillar.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <h3
                  className={`font-sans text-[16px] font-bold leading-[1.3] uppercase m-0 mb-2 ${pillar.titleColor}`}
                >
                  {pillar.title}
                </h3>
                <p className="font-sans text-[13px] font-normal leading-[1.6] text-text-secondary m-0 mb-3">
                  {pillar.description}
                </p>
                <button
                  className={`bg-transparent border-none font-sans text-[13px] font-semibold cursor-pointer p-0 self-end mt-auto transition-all duration-150 underline-offset-2 ${pillar.linkColor}`}
                >
                  Xem chi tiết →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
