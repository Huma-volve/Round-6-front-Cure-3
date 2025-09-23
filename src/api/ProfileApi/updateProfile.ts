import type { FormDataProfile } from "@/types/Mohamed/Profile";
import api from "./api";

export const updateProfile = async (data: FormDataProfile) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("phone", data.phone);

  if (data.birthdate) {
    formData.append("birthdate", data.birthdate);
  }
  const response = await api.post("/profile", formData);
  return response.data.data.user;
};
