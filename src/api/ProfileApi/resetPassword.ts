import type { resetPasswordType, verifyOTPType } from "@/types/Mohamed/Profile";
import api from "./api";

export const sendOTP = async (email: string) => {
  const response = await api.post("send-reset-otp", { email });
  return response.data;
};

export const verifyOTP = async (data: verifyOTPType) => {
  const response = await api.post("verify-otp", data);
  return response.data;
};

export const resetPassword = async (data: resetPasswordType) => {
  const response = await api.post("reset-password", data);
  return response.data;
};
