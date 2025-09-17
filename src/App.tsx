import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./features/Home";
import PrivacyPolicy from "./features/PrivacyPolicy/PrivacyPolicy";
import Booking from "./features/Booking/Booking";
import ConfirmAppointment from "./features/ConfirmAppointment/ConfirmAppointment";
import DoctorDetails from "./features/DoctorDetails/DoctorDetails";
import DoctorsNearYou from "./features/DoctorsNearYou/DoctorsNearYou";
import EmptyCards from "./features/EmptyCards/EmptyCards";
import FAQs from "./features/FAQs/FAQs";
import Favorite from "./features/Favorite/Favorite";
import LoadingLocation from "./features/LoadingLocation/LoadingLocation";
import Notification from "./features/Notification/Notification";
import Orthopedic from "./features/Orthopedic/Orthopedic";
import Opt from "./features/Otp/Opt";
import Pay from "./features/Pay/Pay";
import PaymentMethod from "./features/PaymentMethod/PaymentMethod";
import Profile from "./features/Profile/Profile";
import Search from "./features/Search/Search";
import SearchByLocation from "./features/SearchByYourLocationDoctors/SearchByYourLocationDoctors";
import Settings from "./features/Settings/Settings";
import SignIn from "./features/SignIn/SignIn";
import SignInWithEmail from "./features/SignInWithYourEmail/SignInWithYourEmail";
import SignInWithNumber from "./features/SignInWithYourNumber/SignInWithYourNumber";
import SignUp from "./features/SignUp/SignUp";
import Specialties from "./features/Speciaties/Speciaties";
import TheMap from "./features/TheMap/TheMap";
import VisaVersion from "./features/VisaVersion/VisaVersion";
// import ProtectedRoute from "./features/ProtectedRoute/ProtectedRoute";
import Layout from "./Layout/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./Layout/Common/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signinEmail", element: <SignInWithEmail /> },
      { path: "/signinNumber", element: <SignInWithNumber /> },
      { path: "/signup", element: <SignUp /> },
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
      { path: "/bookings", element: <Booking /> },
      { path: "/confirmAppointment", element: <ConfirmAppointment /> },
      { path: "/doctorDetails/:id", element: <DoctorDetails /> },
      { path: "/doctorsNearYou", element: <DoctorsNearYou /> },
      { path: "/emptyCards", element: <EmptyCards /> },
      { path: "/faqs", element: <FAQs /> },
      { path: "/favorites", element: <Favorite /> },
      { path: "/loadingLocation", element: <LoadingLocation /> },
      { path: "/notifications", element: <Notification /> },
      { path: "/orthopedic", element: <Orthopedic /> },
      { path: "/otp", element: <Opt /> },
      { path: "/pay", element: <Pay /> },
      { path: "/paymentMethod", element: <PaymentMethod /> },
      { path: "/profile", element: <Profile /> },
      { path: "/search", element: <Search /> },
      { path: "/searchByLocation", element: <SearchByLocation /> },
      { path: "/settings", element: <Settings /> },
      { path: "/specialties", element: <Specialties /> },
      { path: "/map", element: <TheMap /> },
      { path: "/visa", element: <VisaVersion /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const clint = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={clint}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
