import { useEffect, useState } from "react";
import FilterButton from "../FilterButton/FilterButton";
import type { Appointment } from "@/features/Booking/Booking";
import axios from "axios";
import { CalendarRange, TriangleAlert } from "lucide-react";
import doctorimage from "../../assets/images/84c1b0d51403f4f1d7e9bd56b7c704bb2bf992e9 (1).jpg";
import locationicon from "../../assets/icons/Icon.png";
import { useNavigate } from "react-router-dom";


interface BookingCardProps {
  appointment: Appointment;
  filter :"all" | "upcoming" | "past" | "canceled";
}

export default function BookingCard({ appointment, filter }: BookingCardProps) {
  
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    const [showAlert, setShowAlert] = useState(false);
    const [showCard, setShowCard] = useState(true);
    
    const [cancelId, setCancelId] = useState<number | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const navigate= useNavigate()
  

    

    
    function formatAppointment(dateStr: string, timeStr: string) {
      const [year, month, day] = dateStr.split("-").map(Number); // 2025-10-10 => [2025,10,10]
      const [hour, minute] = timeStr.split(":").map(Number);      // 12:00:00 => [12,0,0]
      
      const date = new Date(year, month - 1, day, hour, minute);
      
      
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short", 
        day: "numeric",   
        month: "long",    
        hour: "numeric",
        minute: "numeric",
        hour12: true
      };
      
      return date.toLocaleString("en-US", options); // "Sun, July 13, 12:00 PM"
    }
    
    
    return (
      <>
      
     
    {showCard &&(
     
      
      
    <div>
      {/* زرار الفلترة */}

       
          <div  className="border w-full border-gray-300  p-2 mb-2 rounded-xl">
            <div>
            <div className="flex gap-2 justify-between pb-2 border-b border-gray-300">
                <div className="flex gap-2 ">
                <CalendarRange />
                {formatAppointment(appointment.date, appointment.time)}
                </div>
                <h2 className={`${filter === "canceled"? "text-red-500": filter==="past"? "text-green-600":filter==="all" ? "text-Background-Primary-Defult" : filter=== "upcoming" ? "text-Background-Primary-Defult":""}`}>{ filter=="past" ? "completed" : filter =="all" ? "upcoming": filter} </h2>
            </div>
            </div>
            <div className="flex py-2 gap-3">
                <img className="w-14 h-14 object-cover rounded-full" src={doctorimage} alt="doctor image"/>
                <div>
                <h3 className="font-bold pb-1">{appointment.doctor.name}</h3>
                <p className="text-gray-500 text-sm font-normal">{appointment.doctor.bio}</p>
                </div>
            </div>
            <div className="pl-2 flex gap-2">
            <img className="text-gray-500" src={locationicon} alt="location icon"/>
            <p className="text-gray-500 font-medium">No Location</p>
            </div>
             
      {(filter === "upcoming" || filter === "all") && 
          
          (
            <>
            <div className="flex justify-between gap-2 mt-2">
            <button onClick={() => { setCancelId(appointment.id) ; setShowAlert(true);}}  className="px-4 py-2 w-full rounded-xl cursor-pointer border border-gray-300">Cancel</button>
            <button className="px-4 py-2 w-full rounded-xl cursor-pointer bg-Background-Primary-Defult text-white">Reschedule</button>
            </div>
            </>
            )  
    
       }

      {filter === "past" &&
          
          (
            <>
            <div className="flex gap-2 mt-2">
            <button className="px-4 py-2 rounded-xl w-full cursor-pointer border border-gray-300">View details</button>
            <button onClick={() => navigate("/AddReview")} className="px-4 py-2 rounded-xl w-full cursor-pointer  bg-Background-Primary-Defult text-white">Feedback</button>
            </div>
            </>
            )  
    
       }
      {filter === "canceled" &&
          
          (
            <>
            <div className="flex gap-2 mt-2">
            <button onClick={() => navigate(`/doctorDetails/${appointment.doctor.id}`)} className="px-4 py-2 rounded-xl w-full cursor-pointer border border-gray-300">Book again</button>
            <button className="px-4 py-2 rounded-xl w-full cursor-pointer bg-Background-Primary-Defult text-white">Support</button>
            </div>
            </>
            )  
    
       }
          </div>
          
        
        {showAlert && cancelId !==null && (
         <>
         <div  onClick={() => { setCancelId(null); setShowAlert(false); }} className="fixed bg-black/50 inset-0 flex justify-center items-center z-50" >
           <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">
             <div className="flex m-auto w-20 h-20 mb-4 p-4 rounded-full justify-center items-center bg-orange-200 text-orange-500">
               <TriangleAlert />
             </div>
             <h2>Warning!</h2>
             <p className="p-4 text-gray-500 text-sm">Cancellation must be made at least 24 hours in advance to receive a refund</p>
             <p className="p-4 text-gray-500 text-sm">Are you sure?</p>
             <button  onClick={() => {
          setAppointments(prev => prev.filter(a => a.id !== cancelId));
          setCancelId(null);
          setShowAlert(false);
        }} className="rounded-xl w-full py-2 bg-black text-white cursor-pointer">
               yes,Cancel
             </button>
           </div>
         </div>
         </>
        )}
      </div>
 
    
  )}
  
    </>
  )
}
