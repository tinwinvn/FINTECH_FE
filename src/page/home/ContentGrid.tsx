import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { NewsSection } from "./NewsSection";
import { EventsSection } from "./EventsSection";
import { ProjectsSection } from "./ProjectsSection";
import { NewsletterCard } from "../../components/Card/NewsletterCard";

const columns = [
  { key: "news", component: <NewsSection /> },
  { key: "events", component: <EventsSection /> },
  { key: "projects", component: <ProjectsSection /> },
  {
    key: "newsletter",
    component: (
      <NewsletterCard
        title="ĐĂNG KÝ NHẬN TIN"
        description="Nhận thông tin mới nhất về nghiên cứu, đào tạo, sự kiện và cơ hội hợp tác."
        buttonText="ĐĂNG KÝ"
      />
    ),
  },
];

export const ContentGrid = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section ref={ref} className="py-4 md:py-6">
      <div className="max-w-456 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch lg:auto-rows-[1fr]">
          {columns.map((col, i) => (
            <div
              key={col.key}
              className={`
                flex flex-col h-full overflow-hidden
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {col.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
