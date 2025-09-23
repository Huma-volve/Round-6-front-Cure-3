import { useState } from "react";
import ArrowLeft from "@/components/ui/ArrowLeft";
import {
  sendOTP,
  verifyOTP,
  resetPassword,
} from "@/api/ProfileApi/resetPassword";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SendOTPForm from "./SendOTPForm";
import VerifyOTPForm from "./VerifyOTPForm";
import ResetPasswordForm from "./ResetPasswordForm";

const PasswordResetFlow = () => {
  const [stage, setStage] = useState<"send" | "verify" | "reset">("send");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Send OTP
  const handleSendOTP = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    setLoading(true);
    try {
      const response = await sendOTP(email);
      const note = response.note || response.data?.note;
      const otpMatch = note?.match(/\{(\d+)\}/);

      if (otpMatch) {
        const extractedOtp = String(otpMatch[1]);
        setOtp(extractedOtp);
        toast.success(`OTP extracted automatically: ${extractedOtp}`);
      } else {
        toast.success("OTP sent to your email");
      }

      setStage("verify");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send OTP";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP

  const handleVerifyOTP = async (enteredOtp: string) => {
    setLoading(true);
    try {
      await verifyOTP({ email, otp: enteredOtp });
      toast.success("OTP verified successfully");
      setStage("reset");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "OTP verification failed";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // Reset password
  const handleResetPassword = async (
    password: string,
    confirmPassword: string
  ) => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!otp) {
      toast.error("Missing OTP");
      return;
    }
    setLoading(true);
    try {
      await resetPassword({
        email,
        otp,
        password,
        password_confirmation: confirmPassword,
      });
      toast.success("Password changed successfully!");
      navigate("/signinEmail");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Password reset failed";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-6xl w-full mx-auto rounded-xl">
        <ArrowLeft title="Password Reset" />

        {stage === "send" && (
          <SendOTPForm
            email={email}
            setEmail={setEmail}
            onSend={handleSendOTP}
            loading={loading}
          />
        )}

        {stage === "verify" && (
          <VerifyOTPForm
            otp={otp}
            setOtp={setOtp}
            onVerify={handleVerifyOTP}
            loading={loading}
          />
        )}

        {stage === "reset" && (
          <ResetPasswordForm onReset={handleResetPassword} loading={loading} />
        )}
      </div>
    </div>
  );
};

export default PasswordResetFlow;
