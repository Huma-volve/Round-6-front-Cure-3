import api from "./api";

export const getProfile = async () => {
  const response = await api.get(`me`);
  return response.data.data.user;
};
