import { useNavigate, useParams, NavLink } from "react-router-dom";
import Header from "@/lib/Header/Header";
import profile from "@/assets/images/Ellipse.jpg";
import { IoCalendarOutline } from "react-icons/io5";
import {
  FaAngleUp,
  FaAngleDown,
  FaArrowRightLong,
  FaArrowLeftLong,
} from "react-icons/fa6";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { DoctorSlotsResponse } from "@/types/Appointment/Appointment";
import { useQuery } from "@tanstack/react-query";
import { getSlots } from "@/api/Appointment/Appointment";
import Loading from "@/Layout/Common/Loading";
import { getDoctorDetails } from "@/api/DoctorDetails/DoctorDetails";
import type { DoctorDetailsResponse } from "@/types/DoctorDetails/DoctorDetails";

const ConfirmAppointment = () => {
  const params = useParams();
  const [showDay, setShowDay] = useState(false);
  const [activeBtn, setActiveBtn] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 8));

  const navigate = useNavigate();

  const formatTime = (time: string): string => {
    if (!time) return "";
    const [hours, minutes] = time.split(":");
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
  };

  const {
    data: slotsData,
    isLoading: isSlotsLoading,
    error: slotsError,
  } = useQuery({
    queryKey: ["doctorSlots"],
    queryFn: () => getSlots() as Promise<DoctorSlotsResponse>,
    refetchOnWindowFocus: false,
  });

  const { data: doctorData } = useQuery({
    queryKey: ["doctorDetails"],
    queryFn: () => getDoctorDetails() as Promise<DoctorDetailsResponse>,
    refetchOnWindowFocus: false,
  });

  const slots = slotsData?.available_slots || [];

  if (isSlotsLoading) return <Loading />;
  if (slotsError) return <h1>Error...</h1>;

  const selectedDaySlots = selectedDay
    ? slots.filter((slot) => slot.date === selectedDay)
    : [];

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
      if (currentDay > 0 && currentDay <= daysInMonth) {
        week.push(currentDay);
      } else {
        week.push(null);
      }
      currentDay++;
    }
    weeks.push(week);
  }

  const monthName = currentMonth.toLocaleString("default", { month: "long" });

  return (
    <>
      <Header
        title="Book Appointment"
        showBack
        onBack={() => navigate(`/doctorDetails/${params.id}`)}
      />

      <main className="mt-7 w-[90%] mx-auto">
        <section>
          <div className="info flex gap-4 items-center hover:scale-[1.02] transition-transform duration-200">
            <img
              src={profile}
              alt="profile"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
            />
            <div>
              <h1 className="font-bold text-lg md:text-xl">
                Dr. {doctorData?.data?.name}
              </h1>
              <p className="text-Text-Neutral-Darker">
                {doctorData?.data?.specialty_name_en}
              </p>
              <p className="text-Text-Neutral-Darker">No Location</p>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <h2 className="font-semibold text-lg">Select A Day</h2>
          <div className="flex justify-between mt-3 mx-auto items-center">
            <div className="flex gap-4">
              <IoCalendarOutline
                size={25}
                className="text-Background-Primary-Defult"
              />
              <p>Choose a date</p>
            </div>
            {showDay ? (
              <FaAngleUp
                size={25}
                className="cursor-pointer text-Background-Primary-Defult"
                onClick={() => setShowDay(false)}
              />
            ) : (
              <FaAngleDown
                size={25}
                className="cursor-pointer text-Background-Primary-Defult"
                onClick={() => setShowDay(true)}
              />
            )}
          </div>

          {showDay && (
            <div className="overflow-x-auto mt-4 w-full">
              <div className="flex justify-between gap-4 items-center mb-5">
                <FaArrowLeftLong
                  size={20}
                  className="text-Background-Primary-Defult cursor-pointer"
                  onClick={() =>
                    setCurrentMonth(
                      new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth() - 1
                      )
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
                      new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth() + 1
                      )
                    )
                  }
                />
              </div>

              <table className="border-collapse text-center w-full">
                <thead>
                  <tr className="text-Background-Primary-Defult">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <th key={day} className="p-2 font-semibold">
                          {day}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {weeks.map((week, i) => (
                    <tr key={i}>
                      {week.map((day, j) => {
                        if (day === null) {
                          return <td key={j} className="p-3"></td>;
                        }
                        const dateISO = new Date(
                          currentMonth.getFullYear(),
                          currentMonth.getMonth(),
                          day
                        )
                          .toISOString()
                          .split("T")[0];
                        return (
                          <td
                            key={j}
                            onClick={() => setSelectedDay(dateISO)}
                            className={`p-3 rounded-3xl cursor-pointer transition-colors duration-200 ${
                              selectedDay === dateISO
                                ? "bg-Background-Primary-Lightest"
                                : "hover:bg-Background-Primary-Lightest"
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
          )}
        </section>

        <section className="mt-6">
          <h2 className="font-semibold text-lg">Select A Time</h2>

          {!isSlotsLoading && selectedDay && (
            <div className="mt-3">
              {selectedDaySlots.length > 0 ? (
                <div className="grid grid-cols-3 gap-2">
                  {selectedDaySlots.map((slot, i) => {
                    const formattedTime = formatTime(slot.time);
                    return (
                      <Button
                        key={i}
                        onClick={() =>
                          setActiveBtn(`${slot.date}-${formattedTime}`)
                        }
                        className={`rounded-2xl py-2 text-sm transition-colors ${
                          activeBtn === `${slot.date}-${formattedTime}`
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
          )}
        </section>

        <section className="mt-6">
          <div className="mt-3">
            <div className="flex justify-between items-center w-full">
              <p className="text-Background-Neutral-Darker">
                <span className="font-semibold text-Background-Secondary-Defult text-xl">
                  Price
                </span>
                /hour
              </p>
              <p className="text-Text-Semantic-Error-Defult">
                {doctorData?.data?.price_per_hour}
              </p>
            </div>
            <NavLink
              to="/pay"
              state={{
                doctor: doctorData?.data,
                date: selectedDay,
                time: activeBtn ? activeBtn.split("-")[1] : null,
              }}
            >
              <Button
                variant="default"
                className="w-full cursor-pointer rounded-2xl p-6 mt-5 text-Background-Neutral-Lightest bg-Background-Primary-Defult border border-Background-Primary-Defult transition-all hover:text-Background-Primary-Defult duration-200 mb-7"
                disabled={!selectedDay || !activeBtn}
              >
                Continue To Pay
              </Button>
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
};

export default ConfirmAppointment;
