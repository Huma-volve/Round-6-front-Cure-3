import { useParams, NavLink, useNavigate } from "react-router-dom";
import Header from "@/lib/Header/Header";
import profile from "@/assets/images/Ellipse.jpg";
import { useConfirmAppointment } from "@/features/WrapperConfirm/ConfirmAppointment/useConfirmAppointment";
import { Calendar } from "@/features/WrapperConfirm/ConfirmAppointment/Calendar";
import { TimeSlots } from "@/features/WrapperConfirm/ConfirmAppointment/TimeSlots";
import { Button } from "@/components/ui/button";
import Loading from "@/Layout/Common/Loading";

const ConfirmAppointment = () => {
  const params = useParams();
  const doctorId = Number(params.id);
  const navigator = useNavigate();
  const {
    selectedDay,
    setSelectedDay,
    activeBtn,
    setActiveBtn,
    currentMonth,
    setCurrentMonth,
    slots,
    doctorData,
    isSlotsLoading,
    bookAppointment,
  } = useConfirmAppointment(doctorId);

  if (isSlotsLoading) return <Loading />;

  return (
    <>
      <Header title="Book Appointment" showBack onBack={() => navigator(`/doctorDetails/${doctorId}`)} />

      <main className="mt-7 w-[90%] mx-auto">
        {/* Doctor Info */}
        <section className="info flex gap-4 items-center hover:scale-[1.02] transition-transform duration-200">
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
        </section>

        {/* Calendar */}
        <section className="mt-5">
          <h2 className="font-semibold text-lg">Select A Day</h2>
          <Calendar
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            slots={slots}
          />
        </section>

        {/* Time Slots */}
        <section className="mt-6">
          <h2 className="font-semibold text-lg">Select A Time</h2>
          <TimeSlots
            selectedDay={selectedDay}
            slots={slots}
            activeTime={activeBtn}
            setActiveTime={setActiveBtn}
          />
        </section>

        {/* Price & Continue */}
        <section className="mt-6">
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
            to={`/pay/${doctorId}`}
            state={{
              doctor: doctorData?.data,
              date: selectedDay,
              time: activeBtn,
            }}
          >
            <Button
              variant="default"
              className="w-full cursor-pointer rounded-2xl p-6 mt-5 text-Background-Neutral-Lightest bg-Background-Primary-Defult border border-Background-Primary-Defult transition-all hover:text-Background-Primary-Defult duration-200 mb-7"
              disabled={!selectedDay || !activeBtn}
              onClick={bookAppointment}
            >
              Continue To Pay
            </Button>
          </NavLink>
        </section>
      </main>
    </>
  );
};

export default ConfirmAppointment;
