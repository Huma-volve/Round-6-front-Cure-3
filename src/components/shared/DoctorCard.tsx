import { Button } from "../ui/button";
import doctorImg from "@/assets/images/doctor.png";
import star from "@/assets/icons/Star.svg";
import clock from "@/assets/icons/Clock.svg";
import { useNavigate } from "react-router-dom";
import type { Doctor } from "@/types/Doctor";



const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  const navigate = useNavigate();

  function bookAppointmentHandler() {
    navigate(`/doctorDetails/${doctor.availability[0].availability_id}`);
  }

  return (
    <article className="flex flex-col shrink-0 p-4 sm:w-[360px] w-[310px] shadow-[0_0_12px_rgba(0,0,0,0.1)] rounded-[10px]">
      <div className="flex gap-[10px] items-center mb-2 border-b-[1px] border-Background-Neutral-Lightest">
        <img
          src={doctorImg}
          alt="the doctor's image"
          className="h-20 w-20 object-contain rounded-[10px]"
        />
        <div className="flex gap-2 flex-col">
          <p className="text-base">{doctor.name}</p>
          <p className="text-Text-Neutral-Darker">
                     {doctor?.specialty_name_en} | {doctor?.hospital_name}
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <div className="flex items-center">
              <img src={star} alt="a star" className="mr-1" />{" "}
               <p className="mr-4">{doctor?.average_rating.slice(0, 3)}</p>
            </div>
            <div className="flex items-center">
              <img className="mr-2" src={clock} alt="a clock" />{" "}
              <p>
                 {doctor.availability[0].start_time.slice(0,5)}am - {doctor.availability[0].end_time.slice(0,5)}pm
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between ">
        <p className="text-base pt-1 pb-2">
          Price<span className="text-xs">/hours</span>
        </p>
        <p className="text-base text-Text-Semantic-Error-Defult">
          ${doctor?.price_per_hour}
        </p>
      </div>

      <Button className="m-auto w-full" onClick={bookAppointmentHandler}>
        Book appointment
      </Button>
    </article>
  );
};

export default DoctorCard;
