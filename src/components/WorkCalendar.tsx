import dayjs from "dayjs";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const workDay = ["下", "休", "白", "小大"];
const startDate = dayjs("2023-02-06");

const WorkCalendar = () => {
  const handleFormatDay: CalendarProps["formatDay"] = (locale, date) => {
    return `${date.getDate()}`;
  };
  const handleTileContent: CalendarProps["tileContent"] = ({ date }) => {
    const dateDiff = dayjs(date).diff(startDate, "day");
    if (dateDiff < 0) {
      return null;
    }
    return <div>{workDay[dateDiff % 4]}</div>;
  };

  return (
    <Calendar
      className="w-full"
      minDate={new Date()}
      formatDay={handleFormatDay}
      tileContent={handleTileContent}
    />
  );
};

export default WorkCalendar;
