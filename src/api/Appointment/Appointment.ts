import type { DoctorSlotsResponse } from "@/types/Appointment/Appointment";
import api from "../api";

export async function getSlots(id: number): Promise<DoctorSlotsResponse> {
  try {
    const res = await api.get(`/doctors/${id}/available-slots`);
    return res.data as DoctorSlotsResponse;
  } catch (err) {
    console.error("Error fetching doctor slots:", err);
    return { doctor_id: String(id), available_slots: [] } as DoctorSlotsResponse;
  }
}
