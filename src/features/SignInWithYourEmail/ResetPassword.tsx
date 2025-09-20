import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import signup from "../../assets/images/Sign up.png";
import toast from "react-hot-toast";

interface ResetPasswordValues {
  password: string;
  password_confirmation: string;
}

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password too short")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // 👇 get email + otp passed from VerifyOtp page
  const { email, otp } = location.state || {};

  if (!email || !otp) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          Missing email or OTP. Please verify OTP again.
        </p>
      </div>
    );
  }

  const initialValues: ResetPasswordValues = {
    password: "",
    password_confirmation: "",
  };

  const handleSubmit = async (values: ResetPasswordValues) => {
    try {
      const response = await fetch(`${API_BASE_URL}/reset-password`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
          password: values.password,
          password_confirmation: values.password_confirmation,
        }),
      });

      const data = await response.json();
      console.log("Reset response:", data);

      if (data.success) {
        toast.success(data.message || "Done");
        navigate("/signinEmail");
      } else {
        alert(data.message || "Reset failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div
        className="w-full max-w-5xl min-h-[100vh] flex items-center rounded-2xl shadow-lg bg-cover bg-center p-10"
        style={{ backgroundImage: `url(${signup})` }}
      >
        <div className="p-4 rounded-xl w-full max-w-md md:ml-20 bg-white/80">
          <h1 className="text-xl font-semibold mb-6 text-gray-800 text-center">
            Reset Password
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={ResetPasswordSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                {/* New Password */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    New Password
                  </label>
                  <Field
                    as={Input}
                    type="password"
                    name="password"
                    placeholder="Enter new password"
                    className="border border-gray-300 rounded-[8px] p-2 w-full"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Confirm Password
                  </label>
                  <Field
                    as={Input}
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirm your password"
                    className="border border-gray-300 rounded-[8px] p-2 w-full"
                  />
                  <ErrorMessage
                    name="password_confirmation"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Resetting..." : "Reset Password"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
