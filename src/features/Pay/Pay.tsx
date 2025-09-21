import Header from "@/lib/Header/Header";
import { useNavigate, useLocation } from "react-router-dom";
import profile from "@/assets/images/Ellipse.jpg";
import { CheckboxDemo } from "@/components/ui/CheckboxDemo";
import { Button } from "@/components/ui/button";
import { IoCalendarOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import confirm from "@/assets/images/confirm.jpg";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Pay = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { doctor, date, time } = location.state || {};

  useEffect(() => {
    if (!doctor || !date || !time) {
      navigate(`/confirmAppointment/${doctor?.doctor_profile_id}`);
    }
  }, [doctor, date, time, navigate]);

  return (
    <>
      <Header
        title="Pay"
        showBack
        onBack={() => navigate(`/confirmAppointment/${doctor?.doctor_profile_id}`)}
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
                Dr. {doctor?.name}
              </h1>
              <p className="text-Text-Neutral-Darker">
                {doctor?.specialty_name_en}
              </p>
              <p className="text-Text-Neutral-Darker">No Location</p>
            </div>
          </div>
        </section>

        <div className="flex justify-between mt-7 mx-auto items-center">
          <div className="flex gap-4">
            <IoCalendarOutline
              size={25}
              className="text-Background-Primary-Defult"
            />
            <p>
              {date} - {time}
            </p>
          </div>
          <p
            onClick={() => navigate("/confirmAppointment")}
            className="text-Text-Primary-Defult cursor-pointer"
          >
            Reschedule
          </p>
        </div>

        <section className="mt-12">
          <h2 className="font-bold text-lg md:text-xl">Payment Method</h2>
          <CheckboxDemo />
        </section>

        <section className="mt-12">
          <div className="mt-3">
            <div className="flex justify-between items-center w-full">
              <p className="text-Background-Neutral-Darker">
                <span className="font-semibold text-Background-Secondary-Defult text-xl">
                  Price
                </span>
                /hour
              </p>
              <p className="text-Text-Semantic-Error-Defult">
                {doctor?.price_per_hour}
              </p>
            </div>
            <Button
              onClick={() => setShow(true)}
              variant="default"
              className="w-full cursor-pointer rounded-2xl p-6 mt-5 text-Background-Neutral-Lightest bg-Background-Primary-Defult border border-Background-Primary-Defult transition-all hover:text-Background-Primary-Defult duration-200 mb-7"
            >
              Pay
            </Button>
          </div>

          <AlertDialog open={show} onOpenChange={setShow}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex justify-center">
                  <img
                    src={confirm}
                    className="rounded-full w-24 h-24"
                    alt="confirm"
                  />
                </AlertDialogTitle>
                <AlertDialogDescription className="font-semibold text-black text-2xl text-center mt-3">
                  Congratulations
                </AlertDialogDescription>
                <AlertDialogDescription className="text-center text-base">
                  Your appointment with{" "}
                  <span className="font-semibold">Dr. {doctor?.name}</span> is
                  confirmed for <span className="font-semibold">{date}</span> at{" "}
                  <span className="font-semibold">{time}</span>.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel
                  onClick={() => navigate("/")}
                  className="w-full cursor-pointer rounded-full p-6 mt-5 text-Background-Neutral-Lightest bg-Background-Secondary-Defult border border-Background-Secondary-Defult transition-all hover:text-Background-Secondary-Defult duration-200 mb-7"
                >
                  Done
                </AlertDialogCancel>
              </AlertDialogFooter>

              <p
                onClick={() => navigate("/confirmAppointment")}
                className="text-center cursor-pointer text-sm text-Text-Primary-Defult"
              >
                Edit your appointment
              </p>
            </AlertDialogContent>
          </AlertDialog>
        </section>
      </main>
    </>
  );
};

export default Pay;
