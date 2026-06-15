import { SectionHeading } from "../../components/Layout/SectionHeading";
import { NewsListItem } from "../../components/Card/NewsListItem";
import { IconNewspaper } from "../../components/Icons/Icons";
import newsThumb1 from "../../assets/news_thumb_1.png";
import newsThumb2 from "../../assets/news_thumb_2.png";
import newsThumb3 from "../../assets/news_thumb_3.png";

const newsItems = [
  {
    thumbnailUrl: newsThumb1,
    title:
      "Viện IFISD và Trường Đại học XYZ ký kết hợp tác nghiên cứu và đào tạo Viện IFISD và Trường Đại học XYZ ký kết hợp tác nghiên cứu và đào tạo",
    date: "20/05/2026",
  },
  {
    thumbnailUrl: newsThumb2,
    title: "Diễn đàn ESG và Tài chính xanh 2026 tại Đà Nẵng",
    date: "20/05/2026",
  },
  {
    thumbnailUrl: newsThumb3,
    title: "Hội thảo Khoa học quốc gia về Kinh tế số và Phát triển bền vững",
    date: "12/05/2026",
  },
];

export const NewsSection = () => {
  return (
    <div className="h-full flex flex-col">
      <SectionHeading
        title="TIN TỨC NỔI BẬT"
        linkText="Xem tất cả →"
        icon={<IconNewspaper size={20} />}
      />
      <div className="flex flex-col flex-1">
        {newsItems.map((item, i) => (
          <NewsListItem
            key={i}
            thumbnailUrl={item.thumbnailUrl}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};
