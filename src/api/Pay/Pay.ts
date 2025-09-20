import type { BookingResponse } from "../../types/Pay/Pay";
import api from "../api";

export async function getBooking(time: string | any, date: any, doctor_id: number = 1): Promise<BookingResponse | null> {
  try {
    const res = await api.post("/appointments", {
      doctor_id,
      date,
      time
    });
    const data = res.data;
    const appt = data.appointment || {};
    const normalizedAppointment = {
      id: appt.id,
      user_id: appt.user_id,
      doctor_profile_id: appt.doctor_profile_id,
      date: appt.appointment_date ?? appt.date,
      time: appt.appointment_time ?? appt.time,
      status: appt.status,
      price: appt.price,
      payment_id: appt.payment_id,
      created_at: appt.created_at,
      updated_at: appt.updated_at
    };
    return { data: { appointment: normalizedAppointment }, message: data.message } as unknown as BookingResponse;
  } catch (err) {
    console.error("Error creating booking:", err);
    return null;
  }
}
