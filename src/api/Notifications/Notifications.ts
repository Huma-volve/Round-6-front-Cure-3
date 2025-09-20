import type { NotificationsResponse } from "../../types/Notifications/Notifications";
import api from "../api";

export async function getNotifications(): Promise<NotificationsResponse> {
  try {
    const res = await api.get("/notifications");

    return res.data.data as NotificationsResponse;
  } catch (err) {
    console.error("Error fetching notifications:", err);
    return { current_page: 1, data: [], total: 0 }; // fallback
  }
}
