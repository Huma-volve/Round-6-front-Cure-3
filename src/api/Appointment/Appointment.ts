import type { DoctorSlotsResponse } from "@/types/Appointment/Appointment";
import api from "../api";

export async function getSlots(): Promise<DoctorSlotsResponse> {
  try {
    const res = await api.get("/doctors/1/available-slots");
    return res.data as DoctorSlotsResponse;
  } catch (err) {
    console.error("Error fetching doctor slots:", err);
    return { doctor_id: "1", available_slots: [] };
  }
}
