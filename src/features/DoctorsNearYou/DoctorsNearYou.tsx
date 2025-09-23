import DoctorCard from "@/components/DoctorCard/DoctorCard";
import type { Availability } from "@/types/Doctor";
import axios from "axios";
import { useEffect, useState } from "react";



export interface Doctor {
  doctor_profile_id :number;
  name : string;
  specialty_name_en : string;
  hospital_name : string;
  start_time :string;
  end_time:string;
  average_rating: string;
  price_per_hour : string;
  availability : Availability[];
  
}

 export interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorsNearYou = () => {
  const [doctors , setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors , setFilteredDoctors] = useState<Doctor[]>([]);
  const [specialties , setSpecialties] = useState<string[]>([]);
  const [activeSpecialty , setActiveSpecialty] = useState<string>("All");
  const [loading, setLoading] = useState(true);

  

  useEffect (() => {
    axios.get("http://round5-online-booking-with-doctor-api.huma-volve.com/api/doctors" , {
  headers: {
    Authorization : 'Bearer 3|7gKZsNspIPXDG7HdG0ndcxN6gMLZQdh4lTt7sn9h96a5e0e3'
  }
  })
        .then(res => {
          setDoctors(res.data.data);
          setFilteredDoctors(res.data.data);
         const uniqueSpecialties = Array.from(new Set(res.data.data.map((d: Doctor) => d.specialty_name_en)));
         setSpecialties(uniqueSpecialties as string[]);
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
  },[]);

  const filterBySpecialty = (specialty :string) => {
    setActiveSpecialty(specialty);
    if (specialty === "All") {
      setFilteredDoctors(doctors);
    }else{
      setFilteredDoctors(doctors.filter(doc => doc.specialty_name_en === specialty));
    }
  };

 

  return (
    <>
       <div className="container mx-auto p-4">
        <div className="flex gap-4 lg:flex-wrap overflow-x-auto scrollbar-hidden  p-4" style={ {WebkitOverflowScrolling: "touch"}}>
          <button
           onClick={() => filterBySpecialty("All")}
           className={`px-3 py-1 lg:py-2 rounded-xl ${activeSpecialty === "All" ? "bg-Background-Primary-Defult text-white cursor-pointer " : " cursor-pointer border border-gray-400 text-gray-500"}`}>
            All
           </button>
           {specialties.map((spec ) => (
            <button 
            key={spec}
            onClick={() => filterBySpecialty(spec)}
            className={`px-2  rounded-xl lg:py-2 ${activeSpecialty === spec ? "bg-Background-Primary-Defult text-white cursor-pointer "  : " border cursor-pointer  border-gray-400 text-gray-500" }`}>
              {spec}
            </button>
          
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {filteredDoctors.length === 0 && <p className="text-center">No doctors found.</p>}
        {filteredDoctors.map ((doc) => (
          <DoctorCard
          
          key={doc.doctor_profile_id} 
          doctor={doc} 
          />
        ))}
        </div>
       </div>
    </>
  )
}

export default DoctorsNearYou;
