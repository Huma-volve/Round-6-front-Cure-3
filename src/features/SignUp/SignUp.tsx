import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import type { FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import signup from "../../assets/images/Sign up.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

interface SignupValues {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  password_confirmation: string;
  agree: boolean;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
  agree: Yup.boolean().oneOf([true], "You must accept the terms"),
});

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const initialValues: SignupValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    password_confirmation: "",
    agree: false,
  };

  const handleSubmit = async (
    values: SignupValues,
    { setSubmitting }: FormikHelpers<SignupValues>
  ) => {
    try {
      const res = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data.success) {
        if (data.data?.token) {
          localStorage.setItem("token", data.data.token);
        }
        toast.success(data.message || "Done");
        navigate("/");
      } else {
        console.error("Signup failed:", data.message || "Unknown error");
        toast.error(data.message || "Failed to sign up");
      }
    } catch (error) {
      console.error("Signup failed with error:", error);
      toast.error("Something went wrong, please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div
        className="w-full max-w-5xl min-h-[100vh] flex items-center rounded-2xl shadow-lg bg-cover bg-center p-10"
        style={{ backgroundImage: `url(${signup})` }}
      >
        <div className="  p-4 rounded-xl w-full max-w-md md:ml-20 bg-white/80">
          <h1 className="text-xl font-semibold mb-6 text-gray-800 text-center">
            Create New Account
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-2">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-800">
                    Name
                  </label>
                  <Field
                    as={Input}
                    name="name"
                    placeholder="Enter your name"
                    className="border text-gray-500 text-lg border-gray-300 rounded-[8px]  p-2 w-full"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

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
                    className="border text-gray-500 text-lg border-gray-300 rounded-[8px]  p-2 w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <Field
                    as={Input}
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    className="border text-gray-500 text-lg border-gray-300 rounded-[8px]  p-2 w-full"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Password
                  </label>
                  <Field
                    as={Input}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="border text-gray-500 text-lg border-gray-300 rounded-[8px]  p-2 w-full"
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
                    placeholder="Re-enter your password"
                    className="border text-gray-500 text-lg border-gray-300 rounded-[8px]  p-2 w-full"
                  />
                  <ErrorMessage
                    name="password_confirmation"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Terms */}
                <div className="flex items-center gap-2">
                  <Field
                    type="checkbox"
                    name="agree"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-sm text-gray-700">
                    I agree to the{" "}
                    <span className="text-blue-600 cursor-pointer">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-600 cursor-pointer">
                      Privacy Policy
                    </span>
                  </label>
                </div>
                <ErrorMessage
                  name="agree"
                  component="div"
                  className="text-red-500 text-sm"
                />

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Creating..." : "Create Account"}
                </Button>

                {/* OR Section */}
                <div className="flex items-center my-6">
                  <div className="flex-grow h-px bg-gray-300"></div>
                  <span className="px-4 text-sm text-gray-500">OR</span>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-6">
                  <button
                    type="button"
                    className="p-3 rounded-2xl border border-gray-300 hover:bg-gray-100 transition"
                  >
                    <FaFacebook className="text-blue-600 w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    className="p-3 rounded-2xl border border-gray-300 hover:bg-gray-100 transition"
                  >
                    <FaGoogle className="text-red-500 w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    className="p-3 rounded-2xl border border-gray-300 hover:bg-gray-100 transition"
                  >
                    <FaApple className="text-gray-800 w-6 h-6" />
                  </button>
                </div>

                {/* Already have account */}
                <p className="text-center text-sm text-gray-600 mt-6">
                  Already have an account?{" "}
                  <Link to="/signinEmail" className="text-blue-600 font-medium">
                    Sign in
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

export default SignUp;
