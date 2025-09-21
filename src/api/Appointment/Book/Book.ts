import type { Book } from "@/types/Book/Book";
import api from "../../api";

export async function getBooking(
  date: string,
  time: string,
  doctor_id: number
): Promise<Book> {
  try {
    const res = await api.post("/appointments", {
      date,
      time,
      doctor_id,
    });
    return res.data.appointment as Book;
  } catch (err) {
    console.error("Error Booking:", err);
    return { date: "", time: "", doctor_id: 0 };
  }
}
