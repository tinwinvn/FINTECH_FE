import { SectionHeading } from "../../components/Layout/SectionHeading";
import { NewsListItem } from "../../components/Card/NewsListItem";
import { IconFlask } from "../../components/Icons/Icons";
import projectThumb1 from "../../assets/project_thumb_1.png";
import projectThumb2 from "../../assets/project_thumb_2.png";
import projectThumb3 from "../../assets/project_thumb_3.png";

const projects = [
  {
    thumbnailUrl: projectThumb1,
    title:
      "Nghiên cứu mô hình Trung tâm Tài chính quốc tế Việt Nam tại Đà Nẵng",
    date: "",
  },
  {
    thumbnailUrl: projectThumb2,
    title: "Khung đánh giá ESG cho doanh nghiệp SME",
    date: "",
  },
  {
    thumbnailUrl: projectThumb3,
    title:
      "Nghiên cứu cơ chế thử nghiệm có kiểm soát (Sandbox) trong FinTech",
    date: "",
  },
];

export const ProjectsSection = () => {
  return (
    <div className="h-full flex flex-col">
      <SectionHeading
        title="DỰ ÁN / NGHIÊN CỨU TIÊU BIỂU"
        linkText="Xem tất cả →"
        icon={<IconFlask size={20} />}
      />
      <div className="flex flex-col flex-1">
        {projects.map((project, i) => (
          <NewsListItem
            key={i}
            thumbnailUrl={project.thumbnailUrl}
            title={project.title}
            date={project.date}
          />
        ))}
      </div>
    </div>
  );
};
