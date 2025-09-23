import type { VerifyOTPFormProps } from "@/types/Mohamed/Profile";

const VerifyOTPForm = ({
  otp,
  setOtp,
  onVerify,
  loading,
}: VerifyOTPFormProps) => (
  <div className="mt-6 p-4 space-y-4">
    <label className="text-sm font-medium text-gray-700">Enter OTP</label>
    <input
      type="number"
      value={otp || ""}
      onChange={(e) => setOtp(e.target.value)}
      placeholder="Enter OTP"
      className="w-full py-4 px-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 placeholder-gray-500"
    />
    <button
      onClick={() => otp && onVerify(otp)}
      disabled={loading || !otp}
      className={`w-full py-3 bg-Background-Primary-Defult text-white font-medium rounded-lg hover:bg-Background-Primary-Lighter transition-all duration-200 ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading ? "Verifying..." : "Verify OTP"}
    </button>
  </div>
);

export default VerifyOTPForm;
