import { SectionHeading } from "../../components/Layout/SectionHeading";
import { EventListItem } from "../../components/Card/EventListItem";
import { IconCalendarClock } from "../../components/Icons/Icons";

const events = [
  {
    day: "15",
    month: "THÁNG 6",
    title: "Seminar: Ứng dụng AI trong tài chính và ngân hàng",
    time: "08:00 - 11:30",
    location: "Đà Nẵng",
  },
  {
    day: "20",
    month: "THÁNG 6",
    title: "Diễn đàn ESG và Tài chính xanh 2026",
    time: "08:00 - 17:00",
    location: "Đà Nẵng",
  },
  {
    day: "05",
    month: "THÁNG 7",
    title: "Khóa học: Digital Finance for Managers",
    time: "08:00 - 17:00",
    location: "Trực tuyến",
  },
];

export const EventsSection = () => {
  return (
    <div className="h-full flex flex-col">
      <SectionHeading
        title="SỰ KIỆN SẮP DIỄN RA"
        linkText="Xem tất cả →"
        icon={<IconCalendarClock size={20} />}
      />
      <div className="flex flex-col flex-1">
        {events.map((event, i) => (
          <EventListItem
            key={i}
            day={event.day}
            month={event.month}
            title={event.title}
            time={event.time}
            location={event.location}
          />
        ))}
      </div>
    </div>
  );
};
