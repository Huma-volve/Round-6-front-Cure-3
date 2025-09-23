import type { NotificationsResponse } from "../../types/Notifications/Notifications";
import api from "../api";

export async function getNotifications(): Promise<NotificationsResponse> {
  try {
    const res = await api.get("/notifications");
    return res.data as NotificationsResponse;
  } catch (err) {
    console.error("Error Fetching Notifications:", err);
    return {
      success: false,
      message: "Failed to fetch notifications",
      data: {
        current_page: 1,
        data: [],
        total: 0,
      },
    };
  }
}
