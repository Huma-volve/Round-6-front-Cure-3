import type { ReviewData } from "@/types/Review/Review";
import api from "../api";

export async function addReview(id: string, data: any): Promise<ReviewData> {
  try {
    const {data: res} = await api.post(`/doctors/${id}/reviews`, data);
    return res;
  } catch (err) {
    return { error: "Failed To Add Review Cause Missing Rating Or Comment",success: false } as ReviewData;
  }
}
