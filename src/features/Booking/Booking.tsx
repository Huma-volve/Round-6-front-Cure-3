import BookingCard from "@/components/BookingCard/BookingCard";
import FilterButton from "@/components/FilterButton/FilterButton";
import axios from "axios";
import { useEffect, useState } from "react";





export interface Doctor {
  id: number;
  name: string;
  profile_image: string | null;
  bio: string;
  specialty_name_en : string;
}

export interface Appointment {
  id: number;
  date: string;
  time: string;
  status: string;
  doctor: Doctor;
}

const Booking = () => {
  
  const [filter, setFilter] = useState<"all" | "upcoming" | "past" | "canceled">("all");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const uniqueDates = Array.from(new Set(appointments.map((appt) => appt.date)));
  
  
  
  // fetch api
  useEffect(() => {
    const url =
    filter === "all"
    ? "http://round5-online-booking-with-doctor-api.huma-volve.com/api/my-bookings"
    : `http://round5-online-booking-with-doctor-api.huma-volve.com/api/my-bookings?filter=${filter}`;
    
    axios.get(url,{
      headers : {
        Authorization: 'Bearer 3|7gKZsNspIPXDG7HdG0ndcxN6gMLZQdh4lTt7sn9h96a5e0e3'
      }
    }
  )
  .then((res) => {
    console.log(res.data.appointments)
    setAppointments(res.data.appointments)
  })
  .catch((err) => {
    console.log("err" ,err);
  })
},[filter]);


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

  return date.toLocaleString("en-US", options); 
}

const now = new Date();
const appointmentsWithStatus = appointments.map(appt => {
  const apptDateTime = new Date(`${appt.date}T${appt.time}`);
  const status: "upcoming" | "past" = apptDateTime > now ? "upcoming" : "past";
  return { ...appt, status };
});
const filteredAppointments = appointments.filter((appt: Appointment) => {
  const dateMatch = selectedDate ? appt.date === selectedDate : true;
  return dateMatch;
});
  return (
    <>
    <div className="container py-4 m-auto">
      <div className="flex justify-between items-center">
          <h2 className="font-medium text-xl pb-2">Your appointments</h2>
          <div className="mb-4">

        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border text-gray-600  border-gray-300 p-2 rounded-lg"
          >
          <option value="">All Dates</option>
         {Array.from(new Set(appointments.map(a => a.date))).map(date => (
    <option key={date} value={date}>
      {new Date(date).toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "long" })}
    </option>
          ))}
        </select>
        </div>
      </div>
          <FilterButton filter={filter} setFilter={setFilter}  />
   
    </div>
      <div className="container py-4 m-auto">
       {filteredAppointments.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {filteredAppointments.map((appt) => (
      <BookingCard filter={filter} key={appt.id} appointment={appt} />
    ))}
    </div>
  ) : (
    <p className="text-gray-500">No appointments found</p>
  )}
      </div>
    </>
  )
}

export default Booking