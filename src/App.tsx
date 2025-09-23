import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./features/Home";
import PrivacyPolicy from "./features/PrivacyPolicy/PrivacyPolicy";
import Booking from "./features/Booking/Booking";
import ConfirmAppointment from "./features/ConfirmAppointment/ConfirmAppointment";
import DoctorDetails from "./features/DoctorDetails/DoctorDetails";
import DoctorsNearYou from "./features/DoctorsNearYou/DoctorsNearYou";
import EmptyCards from "./features/EmptyCards/EmptyCards";
import FAQs from "./features/FAQs/FAQs";
import Favorites from "./features/Favorite/Favorites";
import LoadingLocation from "./features/LoadingLocation/LoadingLocation";
import Notification from "./features/Notification/Notification";
import Orthopedic from "./features/Orthopedic/Orthopedic";
import Opt from "./features/Otp/Opt";
import Pay from "./features/Pay/Pay";
import PaymentMethod from "./features/PaymentMethod/PaymentMethod";
import Profile from "./features/Profile/Profile";
import Search from "./features/Search/Search";
// import SearchByLocation from "./features/SearchByYourLocationDoctors/SearchByYourLocationDoctors";
import Settings from "./features/Settings/Settings";
import SignInWithEmail from "./features/SignInWithYourEmail/SignInWithYourEmail";
import SignUp from "./features/SignUp/SignUp";
import Specialties from "./features/Speciaties/Speciaties";
import TheMap from "./features/TheMap/TheMap";
// import ProtectedRoute from "./features/ProtectedRoute/ProtectedRoute";
import Layout from "./Layout/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./Layout/Common/NotFound";
import AddReview from "./features/AddReview/AddReview";
import ForgotPassword from "./features/SignInWithYourEmail/ForgotPassword";
import VerifyOtp from "./features/SignInWithYourEmail/VerifyOtp";
import ResetPassword from "./features/SignInWithYourEmail/ResetPassword";
import { EditProfile } from "./features/EditProfile/EditProfile";
// import PasswordManagement from "./features/Settings/PasswordManagement";
import UserContextProvider from "./context/Mohamed/UserContext";
import { Toaster } from "react-hot-toast";
import AddNewCard from "./features/AddNewCard/AddNewCard";
import PasswordResetFlow from "./features/Settings/PasswordResetFlow";
import SearchMap from "./features/TheMap/SearchMap";
import SearchByYourLocationDoctors from "./features/SearchByYourLocationDoctors/SearchByYourLocationDoctors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/search", element: <Search /> },
    ],
  },
  {
    // element: (
    //   <ProtectedRoute>
    //     <Layout />
    //   </ProtectedRoute>
    // ),
    children: [
      { path: "/privacyPolicy", element: <PrivacyPolicy /> },
      { path: "/my-bookings", element: <Booking /> },
      { path: "/confirmAppointment/:id", element: <ConfirmAppointment /> },
      { path: "/doctorDetails/:id", element: <DoctorDetails /> },
      { path: "/doctorsNearYou", element: <DoctorsNearYou /> },
      { path: "/emptyCards", element: <EmptyCards /> },
      { path: "/faqs", element: <FAQs /> },

      { path: "/loadingLocation", element: <LoadingLocation /> },
      { path: "/notifications", element: <Notification /> },
      { path: "/orthopedic", element: <Orthopedic /> },
      { path: "/otp", element: <Opt /> },
      { path: "/pay/:id", element: <Pay /> },
      { path: "/paymentMethod", element: <PaymentMethod /> },
      { path: "/profile", element: <Profile /> },
      { path: "/AddReview/:id", element: <AddReview /> },
      { path: "/search", element: <Search /> },
      { path: "/searchByLocation", element: <SearchByYourLocationDoctors /> },
      { path: "/settings", element: <Settings /> },
      { path: "/specialties", element: <Specialties /> },
      { path: "/map", element: <TheMap /> },
      { path: "/addNewCard", element: <AddNewCard /> },
      { path: "/editProfile", element: <EditProfile /> },
      { path: "/passwordResetFlow", element: <PasswordResetFlow /> },
      {path: "/map/search" , element: <SearchMap/>},
      // { path: "/visa", element: <VisaVersion /> },
    ],
  },
  { path: "/signinEmail", element: <SignInWithEmail /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/forgotpassword", element: <ForgotPassword /> },
  { path: "/verify-otp", element: <VerifyOtp /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "*", element: <NotFound /> },
]);

const clint = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={clint}>
      <UserContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </UserContextProvider>
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}

export default App;
