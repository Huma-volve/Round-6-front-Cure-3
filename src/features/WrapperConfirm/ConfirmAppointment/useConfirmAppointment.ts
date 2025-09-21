// useConfirmAppointment.ts
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSlots } from "@/api/Appointment/Appointment";
import { getDoctorDetails } from "@/api/DoctorDetails/DoctorDetails";
import { getBooking } from "@/api/Appointment/Book/Book";

export function useConfirmAppointment(doctorId: number | null) {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [activeBtn, setActiveBtn] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const { data: slotsData, isLoading: isSlotsLoading } = useQuery({
    queryKey: ["doctorSlots", doctorId],
    queryFn: () => getSlots(),
    enabled: !!doctorId,
  });

  const { data: doctorData } = useQuery({
    queryKey: ["doctorDetails", doctorId],
    queryFn: () => getDoctorDetails(),
    enabled: !!doctorId,
  });

  const slots = slotsData?.available_slots || [];

  const bookAppointment = async () => {
    if (!selectedDay || !activeBtn || !doctorId) {
      console.error("Missing fields", { selectedDay, activeBtn, doctorId });
      return;
    }
    await getBooking(selectedDay, activeBtn, doctorId);
  };

  return {
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
  };
}

