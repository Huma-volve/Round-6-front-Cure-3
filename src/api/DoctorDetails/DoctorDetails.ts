import type { DoctorDetailsResponse } from "../../types/DoctorDetails/DoctorDetails";
import api from "../api";

export async function getDoctorDetails(id: number): Promise<DoctorDetailsResponse> {
  try {
    const { data } = await api.get<DoctorDetailsResponse>(`/doctors/${id}`);
    return data;
  } catch (err) {
    console.error("Error fetching doctor details:", err);
    return {
      success: false,
      message: "Failed to fetch doctor details",
      data: {} as any
    };
  }
}
