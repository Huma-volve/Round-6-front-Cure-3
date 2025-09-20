import type { DoctorDetailsResponse } from "../../types/DoctorDetails/DoctorDetails";
import api from "../api";

export async function getDoctorDetails(): Promise<DoctorDetailsResponse> {
  try {
    const res = await api.get("/doctors/1");
    return res.data as DoctorDetailsResponse;
  } catch (err) {
    console.error("Error fetching doctor details:", err);
    return { current_page: 1, data: [] as DoctorDetailsResponse[]};
  }
}
