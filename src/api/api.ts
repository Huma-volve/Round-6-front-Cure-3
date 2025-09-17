import axios from "axios";
const TOKEN = "3|7gKZsNspIPXDG7HdG0ndcxN6gMLZQdh4lTt7sn9h96a5e0e3";
export const api = axios.create({
    baseURL: "http://round5-online-booking-with-doctor-api.huma-volve.com/api",
    headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
    },
});

export default api;