import DoctorCard from "@/components/DoctorCard/DoctorCard"
import { ArrowDownUp, Settings2 } from "lucide-react"
import { Route } from "lucide-react";
import type{ Doctor } from "../DoctorsNearYou/DoctorsNearYou";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
const SearchByYourLocationDoctors = () => {
  const [doctor, setDoctor] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState<"recommended" | "priceHtoL" | "priceLtoH" | null>(null);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {

    axios.get("http://round5-online-booking-with-doctor-api.huma-volve.com/api/doctors" , {
      headers : {
        Authorization : 'Bearer 3|7gKZsNspIPXDG7HdG0ndcxN6gMLZQdh4lTt7sn9h96a5e0e3'
      }
    }) 
    .then(res => {
    setDoctor(res.data.data);})
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
    },[]);

  const sortedDoctors = [...doctor].sort((a, b) => {
  if (sortOption === "priceHtoL") 
    return (Number(b.price_per_hour) || 0) - (Number(a.price_per_hour) || 0);
  if (sortOption === "priceLtoH") 
    return (Number(a.price_per_hour) || 0) - (Number(b.price_per_hour) || 0);
  return 0;
});

    if (loading) return <p className="text-center mt-4">Loading doctors...</p>;
    
  return (
  <>
    <div className="container m-auto p-4">
      <div className="flex gap-5 justify-center items-center">

        <div
          className="flex gap-2 rounded-xl items-center justify-center px-4 py-1 border border-gray-500 text-gray-500 cursor-pointer"
          onClick={() => setShowSortMenu((prev) => !prev)}
        >
          <ArrowDownUp />
          <p>Sort</p>
        </div>

       
        <div className="flex gap-2 rounded-xl items-center justify-center px-4 py-1 border border-gray-500 text-gray-500">
          <Settings2 />
          <p>Filter</p>
        </div>

        
        <div
        onClick={() => navigate("/map")} className="flex gap-2 rounded-xl items-center justify-center px-4 py-1 border border-gray-500 text-gray-500">
          <Route />
          <p>Map</p>
        </div>
      </div>

      {/* أنيميشن البوتم شيت */}
      <AnimatePresence>
        {showSortMenu && (
          <>
            {/* الخلفية الشفافة */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSortMenu(false)}
            />

            {/* البوتم شيت */}
            <motion.div
              className="fixed left-0 right-0 bottom-0 bg-white rounded-t-2xl shadow-lg p-6 z-50"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="flex pb-4 items-center justify-between">
                <div className="flex text-sm gap-2 rounded-xl items-center">
                  <ArrowDownUp />
                  <p>Sort Options</p>
                </div>
                <button
                  className="text-blue-700 cursor-pointer text-xs"
                  onClick={() => setSortOption(null)}
                >
                  Reset
                </button>
              </div>

              {/* الخيارات */}
              {["recommended", "priceHtoL", "priceLtoH"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 mt-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="sort"
                    value={option}
                    checked={sortOption === option}
                    onChange={() =>
                      setSortOption(
                        option as "recommended" | "priceHtoL" | "priceLtoH"
                      )
                    }
                    className="hidden"
                  />
                  <span
                    className={`w-5 h-5 border-2 flex items-center justify-center rounded 
                    ${
                      sortOption === option
                        ? "bg-green-500 border-green-500"
                        : "border-gray-400"
                    }`}
                  >
                    {sortOption === option && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>
                  {option === "recommended"
                    ? "Recommended"
                    : option === "priceHtoL"
                    ? "Price: High to Low"
                    : "Price: Low to High"}
                </label>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    
      <h2 className="text-xl m-2 text-Background-Primary-Defult font-medium mt-4">
        {doctor.length} Results
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {doctor.length === 0 && (
          <p className="text-center">No doctors found.</p>
        )}
        {sortedDoctors.map((doc) => (
          <DoctorCard key={doc.doctor_profile_id} doctor={doc} />
        ))}
      </div>
    </div>
  </>
);
}
export default SearchByYourLocationDoctors;