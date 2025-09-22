import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import type { ResetPasswordFormProps } from "@/types/Mohamed/Profile";

type PasswordField = "new" | "confirm";

const ResetPasswordForm = ({ onReset, loading }: ResetPasswordFormProps) => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState<
    Record<PasswordField, boolean>
  >({
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field: PasswordField) =>
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));

  const handleChange = (field: PasswordField, value: string) =>
    setFormData((prev) => ({
      ...prev,
      [field === "new" ? "newPassword" : "confirmPassword"]: value,
    }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onReset(formData.newPassword, formData.confirmPassword);
      }}
      className="mt-6 space-y-6 p-4"
    >
      {(["new", "confirm"] as PasswordField[]).map((field) => (
        <div key={field} className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            {field === "new" ? "New password" : "Confirm new password"}
          </label>
          <div className="relative">
            <input
              type={showPasswords[field] ? "text" : "password"}
              value={
                formData[field === "new" ? "newPassword" : "confirmPassword"]
              }
              onChange={(e) => handleChange(field, e.target.value)}
              placeholder="********"
              className="w-full py-4 px-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 placeholder-gray-500"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility(field)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPasswords[field] ? (
                <EyeClosed className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 bg-Background-Primary-Defult text-white font-medium rounded-lg hover:bg-Background-Primary-Lighter transition-all duration-200 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Updating..." : "Reset Password"}
      </button>
    </form>
  );
};

export default ResetPasswordForm;
