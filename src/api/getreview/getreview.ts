import type { ReviewResponse } from "../../types/Review/Review";
import api from "../api";

export async function getReview(): Promise<ReviewResponse> {
  try {
    const res = await api.get("/doctors/1/reviews");
    return res.data.data as ReviewResponse;
  } catch (err) {
    console.error("Error fetching doctor details:", err);
    return { current_page: 1, data: []};
  }
}
