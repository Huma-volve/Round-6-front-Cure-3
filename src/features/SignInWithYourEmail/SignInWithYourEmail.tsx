import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import signup from "../../assets/images/Sign up.png";
import { toast } from "react-hot-toast";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

interface SignInValues {
  email: string;
  password: string;
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignInWithEmail: React.FC = () => {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const initialValues: SignInValues = { email: "", password: "" };

  const handleSubmit = async (values: SignInValues) => {
    try {
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      console.log("Login success:", data);

      if (data.success) {
        if (data.data?.token) {
          localStorage.setItem("token", data.data.token);
        }
        toast.success(data.message || "Done");
        navigate("/");
      } else {
        console.error("Login failed:", data.message || "Unknown error");
        toast.error(data.message || "Failed to login");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div
        className="w-full max-w-5xl min-h-[100vh] flex items-center rounded-2xl shadow-lg bg-cover bg-center p-10 "
        style={{ backgroundImage: `url(${signup})` }}
      >
        <div className="p-4 rounded-xl w-full max-w-md md:ml-20 bg-white/80">
          <h1 className="text-xl font-semibold mb-6 text-gray-800 text-center">
            Sign In
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={SignInSchema}
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
                    className="border text-gray-500 text-lg border-gray-300 rounded-[8px]  p-2 w-full"
                  />
                  <ErrorMessage
                    name="email"
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
                <div className="flex justify-end">
                  <Link
                    to="/forgotpassword"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
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

                <p className="text-center text-sm text-gray-600 mt-6">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="text-blue-600 font-medium">
                    Sign Up
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

export default SignInWithEmail;
