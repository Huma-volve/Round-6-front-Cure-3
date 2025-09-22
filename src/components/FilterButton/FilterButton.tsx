import { useState } from "react";
import type { Appointment } from "@/features/Booking/Booking";
import { useNavigate, useSearchParams } from "react-router-dom";


interface FilterButtonProps {
    filter: "all" | "upcoming" | "past" | "canceled";
    setFilter: React.Dispatch<React.SetStateAction<"all" | "upcoming" | "past" | "canceled">>;
    
}

export default function FilterButton({ filter, setFilter }: FilterButtonProps) {
    const navigate=useNavigate()
    const [searchParams] = useSearchParams();
    const filterFromQuery = searchParams.get("filter") as
      | "all"
      | "upcoming"
      | "past"
      | "canceled"
      | null;
    


  return (
   <>
   <div>
    <div className="flex gap-2 mb-4">
    {["all", "upcoming", "past","canceled" ].map((value) => (
  <button key={value} onClick={() => setFilter(value as any)} className = {` px-4 py-2 rounded-xl ${filter===`${value}`? "bg-Background-Primary-Defult text-white":""}  `}>
     {value!="past"?value:"completed"}
  </button>
    ))}
</div>

   </div>
   </>
  )
}
