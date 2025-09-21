import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

type CalendarProps = {
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
  selectedDay: string | null;
  setSelectedDay: (day: string) => void;
  slots: { date: string; time: string }[];
};

export function Calendar({
  currentMonth,
  setCurrentMonth,
  selectedDay,
  setSelectedDay,
  slots,
}: CalendarProps) {
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const startDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const weeks: (number | null)[][] = [];
  let currentDay = 1 - startDay;

  for (let row = 0; row < 6; row++) {
    const week: (number | null)[] = [];
    for (let col = 0; col < 7; col++) {
      if (currentDay > 0 && currentDay <= daysInMonth) week.push(currentDay);
      else week.push(null);
      currentDay++;
    }
    weeks.push(week);
  }

  const monthName = currentMonth.toLocaleString("default", { month: "long" });

  return (
    <div className="overflow-x-auto mt-4 w-full">
      <div className="flex justify-between gap-4 items-center mb-5">
        <FaArrowLeftLong
          size={20}
          className="text-Background-Primary-Defult cursor-pointer"
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
            )
          }
        />
        <p>
          {monthName} {currentMonth.getFullYear()}
        </p>
        <FaArrowRightLong
          size={20}
          className="text-Background-Primary-Defult cursor-pointer"
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
            )
          }
        />
      </div>

      <table className="border-collapse text-center w-full">
        <thead>
          <tr className="text-Background-Primary-Defult">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
              <th key={day} className="p-2 font-semibold">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => {
                if (day === null) return <td key={j} className="p-3"></td>;

                const dateISO = new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth(),
                  day
                ).toLocaleDateString("en-CA");

                const isAvailable = slots.some(slot => slot.date === dateISO);

                return (
                  <td
                    key={j}
                    onClick={() => isAvailable && setSelectedDay(dateISO)}
                    className={`p-3 rounded-3xl cursor-pointer transition-colors duration-200 ${
                      selectedDay === dateISO
                        ? "bg-Background-Primary-Lightest"
                        : isAvailable
                        ? "hover:bg-Background-Primary-Lightest"
                        : "opacity-30 cursor-not-allowed"
                    }`}
                  >
                    {day}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
