import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import signup from "../../assets/images/Sign up.png";

interface ForgotPasswordValues {
  email: string;
}

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const initialValues: ForgotPasswordValues = { email: "" };

  const handleSubmit = async (values: ForgotPasswordValues) => {
    try {
      const res = await fetch(`${API_BASE_URL}/send-reset-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      const data = await res.json();
      console.log("Forgot password response:", data);

      if (data.success) {
        toast.success(data.message || "OTP sent successfully to your email.");
        localStorage.setItem("resetEmail", values.email);
        const note = data.data?.note || "";
        const match = note.match(/\{(\d+)\}/);
        const otp = match ? match[1] : null;
        if (otp) {
          localStorage.setItem("resetOtp", otp);
        }
        navigate("/verify-otp");
      } else {
        toast.error(data.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      toast.error("Something went wrong, please try again.");
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
            Forgot Password
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={ForgotPasswordSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Field
                    as={Input}
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="border border-gray-300 rounded-[8px] p-2 w-full"
                  />
                  <ErrorMessage
                    name="email"
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
                  {isSubmitting ? "Sending..." : "Send OTP"}
                </Button>

                <p className="text-center text-sm text-gray-600 mt-6">
                  Remembered your password?{" "}
                  <Link to="/signinEmail" className="text-blue-600 font-medium">
                    Sign In
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
