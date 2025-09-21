import { Button } from "@/components/ui/button";

type TimeSlotsProps = {
  selectedDay: string | null;
  slots: { date: string; time: string }[];
  activeTime: string | null;
  setActiveTime: (time: string) => void;
};

export function TimeSlots({
  selectedDay,
  slots,
  activeTime,
  setActiveTime,
}: TimeSlotsProps) {
  const selectedDaySlots = selectedDay
    ? slots.filter(slot => slot.date === selectedDay)
    : [];

  const formatTime = (time: string) => {
    const [h, m] = time.split(":");
    return `${h.padStart(2, "0")}:${m.padStart(2, "0")}`;
  };

  return (
    <div className="mt-3">
      {selectedDaySlots.length > 0 ? (
        <div className="grid grid-cols-3 gap-2">
          {selectedDaySlots.map(slot => {
            const formattedTime = formatTime(slot.time);
            return (
              <Button
                key={slot.time}
                onClick={() => setActiveTime(formattedTime)}
                className={`rounded-2xl py-2 text-sm transition-colors ${
                  activeTime === formattedTime
                    ? "bg-Background-Primary-Defult hover:bg-Background-Primary-Defult text-white"
                    : "bg-Background-Primary-Lightest hover:bg-Background-Primary-Lightest"
                }`}
              >
                {formattedTime}
              </Button>
            );
          })}
        </div>
      ) : (
        <p className="text-sm text-gray-500">No Available Time</p>
      )}
    </div>
  );
}
