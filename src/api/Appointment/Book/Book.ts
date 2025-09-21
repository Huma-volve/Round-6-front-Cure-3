import type { Book } from "@/types/Book/Book";
import api from "../../api";

export async function getBooking(
  appointment_date: string,
  appointment_time: string,
  doctor_id: number
): Promise<Book> {
  try {
    const res = await api.post("/appointments", {
      appointment_date,
      appointment_time,
      doctor_id,
    });
    return res.data.appointment as Book;
  } catch (err) {
    console.error("Error Booking:", err);
    return { appointment_date: "", appointment_time: "", doctor_id: 0 };
  }
}
