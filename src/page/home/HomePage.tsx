import { HeroBanner } from "../../components/Layout/HeroBanner";
import { PillarsSection } from "./PillarsSection";
import { ContentGrid } from "./ContentGrid";
import { PartnersSection } from "./PartnersSection";
import heroImage from "../../assets/hero.png";
import { MainLayout } from "../../components/Layout/MainLayout";

export const HomePage = () => {
  return (
    <MainLayout>
      <HeroBanner
        backgroundImage={heroImage}
        titleLine1="KẾT NỐI TRI THỨC –"
        titleLine2="DẪN DẮT ĐỔI MỚI –"
        titleLine3="KIẾN TẠO PHÁT TRIỂN BỀN VỮNG"
        subtitle="Trung tâm nghiên cứu, đào tạo và tư vấn chính sách trong các lĩnh vực FinTech, đổi mới sáng tạo và phát triển bền vững, đồng hành cùng Đà Nẵng xây dựng Trung tâm Tài chính quốc tế và hệ sinh thái kinh tế – tài chính hiện đại, bền vững."
        buttons={[
          { text: "TÌM HIỂU VỀ VIỆN", variant: "primary-green" as const },
          { text: "CHƯƠNG TRÌNH ĐÀO TẠO", variant: "outline-white" as const },
          { text: "NGHIÊN CỨU & TƯ VẤN", variant: "outline-white" as const },
        ]}
      />

      <PillarsSection />

      <ContentGrid />

      <PartnersSection />
    </MainLayout>
  );
};
