import { useContext, useEffect, useState } from "react";
import {
  Camera,
  Mail,
  User,
  ChevronDown,
  ChevronLeft,
  Loader2Icon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Flag from "../../assets/images/Flag.png";
import ProfileImage from "../../assets/images/profileImage.png";
import LocationIcons from "../../assets/icons/location-Profile.svg";
import { updateProfile } from "@/api/ProfileApi/updateProfile";
import { UserContext } from "@/context/Mohamed/user-context";
import type { FormDataProfile } from "@/types/Mohamed/Profile";
import toast from "react-hot-toast";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
const years = Array.from({ length: 100 }, (_, i) => (2024 - i).toString());

export const EditProfile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataProfile>({
    email: user?.email || "",
    name: user?.name || "",
    phone: user?.phone || "",
    day: "",
    month: "",
    year: "",
    avatar: "",
  });

  const handleInputChange = (field: keyof FormDataProfile, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (!user) return;

    let day = "";
    let month = "";
    let year = "";

    if (user.birthdate) {
      const [y, m, d] = user.birthdate.split("-");
      year = y;
      day = d;
      month = months[parseInt(m, 10) - 1];
    }

    setFormData({
      email: user.email || "",
      name: user.name || "",
      phone: user.phone || "",
      day,
      month,
      year,
      avatar: user.avatar || "",
    });
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let birthdate = "";
      if (formData.day && formData.month && formData.year) {
        const monthIndex = months.indexOf(formData.month) + 1;
        const formattedMonth = monthIndex.toString().padStart(2, "0");
        const formattedDay = formData.day.padStart(2, "0");
        birthdate = `${formData.year}-${formattedMonth}-${formattedDay}`;
      }
      const dataToSend = {
        ...formData,
        birthdate,
      };

      const res = await updateProfile(dataToSend);
      toast.success("Successfully Edited Profile");
      setUser(res);
      navigate(-1);
    } catch (error) {
      toast.error("Something went wrong");
      console.error("Failed to update profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto bg-white min-h-screen">
        <div className="flex items-center justify-between p-4 border-gray-100">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={ProfileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <label
                htmlFor="avatar-upload"
                className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
              >
                <Camera className="w-4 h-4 text-white" />
              </label>
            </div>

            <h1 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
              {formData.name}
            </h1>

            <div className="flex items-center gap-2 text-gray-600">
              <img src={LocationIcons} alt="Location" />
              <span className="text-sm">{user?.address || "No Address"}</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                disabled
                className="w-full pl-12 pr-4 py-4 bg-Background-Neutral-Lightest rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-400 placeholder-gray-500 cursor-not-allowed"
              />
            </div>

            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <User className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="FullName"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-Background-Neutral-Lightest rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 placeholder-gray-500"
              />
            </div>

            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <div className="w-6 h-4 bg-gradient-to-b from-red-500 via-white to-black rounded-sm flex items-center justify-center">
                  <img src={Flag} alt="Flag Egypt" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="tel"
                placeholder="Enter your number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full pl-20 pr-4 py-4 bg-Background-Neutral-Lightest rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 placeholder-gray-500"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-gray-900 font-medium">
                Select your birthday
              </h3>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <select
                    value={formData.day}
                    onChange={(e) => handleInputChange("day", e.target.value)}
                    className="w-full py-4 px-4 bg-Background-Neutral-Lightest rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 appearance-none"
                  >
                    <option value="" disabled>
                      Day
                    </option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                <div className="flex-1 relative">
                  <select
                    value={formData.month}
                    onChange={(e) => handleInputChange("month", e.target.value)}
                    className="w-full py-4 px-4 bg-Background-Neutral-Lightest rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 appearance-none"
                  >
                    <option value="" disabled>
                      Month
                    </option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                <div className="flex-1 relative">
                  <select
                    value={formData.year}
                    onChange={(e) => handleInputChange("year", e.target.value)}
                    className="w-full py-4 px-4 bg-Background-Neutral-Lightest rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 appearance-none"
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer disabled:cursor-not-allowed disabled:bg-Background-Primary-Lighter w-full py-4 bg-Background-Primary-Defult text-white font-medium rounded-xl hover:text-Text-Primary-Defult border hover:border-Border-Primary-Defult hover:bg-transparent transition-all duration-200 flex items-center justify-center"
            >
              {loading && <Loader2Icon className="w-5 h-5 animate-spin" />}
              {loading ? "Saving..." : "Edit Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
