import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { NewsSection } from "./NewsSection";
import { EventsSection } from "./EventsSection";
import { ProjectsSection } from "./ProjectsSection";
import { NewsletterCard } from "../../components/Card/NewsletterCard";

export const ContentGrid = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className={`
        py-12 transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="max-w-[1672px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {/* Column 1: News */}
          <div className="flex flex-col h-full">
            <NewsSection />
          </div>

          {/* Column 2: Events */}
          <div className="flex flex-col h-full">
            <EventsSection />
          </div>

          {/* Column 3: Projects */}
          <div className="flex flex-col h-full">
            <ProjectsSection />
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col h-full">
            <NewsletterCard
              title="ĐĂNG KÝ NHẬN TIN"
              description="Nhận thông tin mới nhất về nghiên cứu, đào tạo, sự kiện và cơ hội hợp tác."
              buttonText="ĐĂNG KÝ"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
