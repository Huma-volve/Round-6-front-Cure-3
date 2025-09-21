import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import signup from "../../assets/images/Sign up.png";
import toast from "react-hot-toast";

interface OtpValues {
  otp: string;
}

const OtpSchema = Yup.object().shape({
  otp: Yup.string()
    .length(6, "OTP must be 6 digits")
    .required("OTP is required"),
});

const VerifyOtp: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const savedEmail = localStorage.getItem("resetEmail");
    const savedOtp = localStorage.getItem("resetOtp");
    if (savedEmail) {
      setEmail(savedEmail);
      if (savedOtp) {
        alert(`Your OTP is: ${savedOtp}`);
      }
    } else {
      navigate("/forgotpassword");
    }
  }, [navigate]);

  const initialValues: OtpValues = { otp: "" };

  const handleSubmit = async (values: OtpValues) => {
    try {
      const res = await fetch(`${API_BASE_URL}/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, otp: values.otp }),
      });

      const data = await res.json();
      console.log("OTP verify response:", data);

      if (data.success) {
        toast.success(data.message || "Done");

        navigate("/reset-password", {
          state: { email, otp: values.otp },
        });
      } else {
        console.error(
          "OTP verification failed:",
          data.message || "Unknown error"
        );
        toast.error(data.message || "Failed");
      }
    } catch (error) {
      console.error("Verify OTP error:", error);
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
            Verify OTP
          </h1>
          <p className="text-sm text-gray-600 text-center mb-4">
            Enter the 6-digit OTP sent to{" "}
            <span className="font-medium">{email}</span>
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={OtpSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                {/* OTP */}
                <div>
                  <label className="block text-sm font-medium mb-1">OTP</label>
                  <Field
                    as={Input}
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    className="border border-gray-300 rounded-[8px] p-2 w-full text-center tracking-widest"
                  />
                  <ErrorMessage
                    name="otp"
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
                  {isSubmitting ? "Verifying..." : "Verify OTP"}
                </Button>

                <p className="text-center text-sm text-gray-600 mt-6">
                  Didn’t get the code?{" "}
                  <Link
                    to="/forgotpassword"
                    className="text-blue-600 font-medium"
                  >
                    Resend OTP
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

export default VerifyOtp;
