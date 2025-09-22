import api from "./api";

export const logoutAccount = async () => {
  try {
    const response = await api.post("logout");
    return response.data;
  } catch (error) {
    console.error("Logout API error:", error);
    throw error;
  }
};
