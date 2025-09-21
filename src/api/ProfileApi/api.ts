import axios from "axios";

const TOKEN = localStorage.getItem("token");

export const api = axios.create({
  baseURL: "https://round5-online-booking-with-doctor-api.huma-volve.com/api/",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
});
export default api;
