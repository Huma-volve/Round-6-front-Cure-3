import api from "../api";

export async function addReview(data: any): Promise<any> {
  try {
    const res = await api.post("/doctors/1/reviews", data);
    return res.data;
  } catch (err) {
    console.error("Error fetching doctor slots:", err);
    return { error: "Failed to add review" };
  }
}
