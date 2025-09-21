import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Speciality } from "@/types/speciality";
import type { Doctor } from "@/types/Doctor";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { DoctorCard } from "@/components/shared";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type FilterState = {
  days: string[]; // [today, tomorrow]
  search: string;
  sortBy: "most-recommended" | "low-to-high" | "high-to-low" | "";
  speciality: string | null; // e.g. "Cardiology"
};

type FilterAction =
  | { type: "TOGGLE_DAY"; payload: string }
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_SORT"; payload: string | null }
  | { type: "SET_SPECIALITY"; payload: string | null }
  | { type: "RESET" };

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case "TOGGLE_DAY":
      return {
        ...state,
        days: state.days.includes(action.payload)
          ? state.days.filter((d) => d !== action.payload)
          : [...state.days, action.payload],
      };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_SORT":
      return { ...state, sortBy: action.payload };
    case "SET_SPECIALITY":
      return { ...state, speciality: action.payload };
    case "RESET":
      return initialFilterState;
    default:
      return state;
  }
}

const initialFilterState: FilterState = {
  days: [],
  search: "",
  sortBy: "",
  speciality: null,
};

function filterDoctors(doctors: Doctor[], state: FilterState): Doctor[] {
  let result = doctors;

  // Day filter
  if (state.days.length > 0) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatDay = (date: Date) =>
      date.toLocaleDateString("en-US", { weekday: "long" });

    const todayStr = formatDay(today).toLowerCase();
    const tomorrowStr = formatDay(tomorrow).toLowerCase();
    result = result.filter((doc) => {
      const docDay = doc.day.toLowerCase();
      return (
        (state.days.includes("today") && docDay === todayStr) ||
        (state.days.includes("tomorrow") && docDay === tomorrowStr)
      );
    });
  }

  // Search filter
  if (state.search.trim()) {
    result = result.filter((doc) =>
      doc.name?.toLowerCase().includes(state.search.toLowerCase())
    );
  }

  // Speciality filter
  if (state.speciality) {
    result = result.filter((doc) => doc.specialty_name_en === state.speciality);
  }

  // Sorting
  if (state.sortBy === "most-recommended") {
    result = [...result].sort(
      (a, b) => parseFloat(b.average_rating) - parseFloat(a.average_rating)
    );
  } else if (state.sortBy === "low-to-high") {
    result = [...result].sort(
      (a, b) => parseFloat(a.price_per_hour) - parseFloat(b.price_per_hour)
    );
  } else if (state.sortBy === "high-to-low") {
    result = [...result].sort(
      (a, b) => parseFloat(b.price_per_hour) - parseFloat(a.price_per_hour)
    );
  }

  return result;
}

const Search = () => {
  const navigate = useNavigate();
  const [specialities, setSpecialities] = useState<Speciality[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  // const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const [loadingSpecialities, setLoadingSpecialities] = useState(true);
  const [loadingDoctors, setLoadingDoctors] = useState(true);

  useEffect(() => {
    const fetchSpecialities = async () => {
      try {
        setLoadingSpecialities(true);
        // setErrorSpecialities(false);
        const res = await fetch(
          "http://round5-online-booking-with-doctor-api.huma-volve.com/api/specialities",
          {
            headers: {
              Accept: "application/json",
              Authorization:
                "Bearer 3|7gKZsNspIPXDG7HdG0ndcxN6gMLZQdh4lTt7sn9h96a5e0e3",
            },
          }
        );
        if (!res.ok) throw new Error(`Specialities error: ${res.status}`);
        const data = await res.json();
        setSpecialities(data.data);
        setLoadingSpecialities(false);
      } catch (err) {
        setLoadingSpecialities(true);
      }
    };

    const fetchDoctors = async () => {
      try {
        const res = await fetch(
          "http://round5-online-booking-with-doctor-api.huma-volve.com/api/doctors",
          {
            headers: {
              Accept: "application/json",
              Authorization:
                "Bearer 3|7gKZsNspIPXDG7HdG0ndcxN6gMLZQdh4lTt7sn9h96a5e0e3",
            },
          }
        );
        if (!res.ok) throw new Error(`Doctors error: ${res.status}`);
        const data = await res.json();
        setDoctors(data.data);
        setLoadingDoctors(false);
      } catch (err) {
        setLoadingDoctors(true);
      }
    };

    fetchSpecialities();
    fetchDoctors();
  }, []);

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      dispatch({ type: "SET_SEARCH", payload: value });
    }, 500); // debounce 500ms
  };

  const [filterState, dispatch] = useReducer(filterReducer, initialFilterState);

  const filteredDoctors = useMemo(() => {
    return filterDoctors(doctors, filterState);
  }, [doctors, filterState]);

  return (
    <div>
      {/* search bar and buttons */}
      <div className="grid grid-cols-[auto_1fr_auto] gap-3 lg:gap-6 mt-10 mb-8">
        <input
          name="search"
          placeholder="Search doctors"
          onChange={inputHandler}
          className="col-span-3 lg:col-span-1 lg:order-2 py-4 px-6 border-[1px] border-b-Text-Neutral-Darker text-base rounded-[10px]"
        />
        <Dialog>
          <DialogTrigger className="w-fit !py-3 !px-6 text-Text-Neutral-Darker border-Text-Neutral-Darker border-[1px] rounded-[10px] flex flex-row gap-2 items-center hover:text-Background-Primary-Defult hover:border-Background-Primary-Defult">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41663 11.6666C9.79734 11.6666 10.9166 12.7859 10.9166 14.1666C10.9166 15.5474 9.79734 16.6666 8.41663 16.6666C7.03591 16.6666 5.91663 15.5474 5.91663 14.1666C5.91663 12.7859 7.03591 11.6666 8.41663 11.6666Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12.5834 3.33331C11.2027 3.33331 10.0834 4.4526 10.0834 5.83331C10.0834 7.21402 11.2027 8.33331 12.5834 8.33331C13.9641 8.33331 15.0834 7.21402 15.0834 5.83331C15.0834 4.4526 13.9641 3.33331 12.5834 3.33331Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M13 14.1321L18.8333 14.1321"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8 5.79874L2.16667 5.79874"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M2.16663 14.1321L3.83329 14.1321"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M18.8334 5.79874L17.1667 5.79874"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Filter
          </DialogTrigger>
          <DialogContent className="bg-white rounded-[10px]">
            <DialogHeader>
              <DialogTitle>Filter results</DialogTitle>
              <DialogDescription className="hidden">
                Filter your results
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 mb-20 w-[235px] ">
              <div className="flex-col flex gap-3 w-fit">
                <p className="text-sm mb-1">Available Date</p>
                <label className="flex items-center gap-2 cursor-pointer text-base text-Text-Neutral-Darker">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    onChange={() =>
                      dispatch({ type: "TOGGLE_DAY", payload: "today" })
                    }
                  />
                  <span
                    className="w-5 h-5 border-2 border-Text-Neutral-Darker rounded-[4px] flex items-center justify-center
           peer-checked:bg-Background-Primary-Defult peer-checked:border-Background-Primary-Defult"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  Today
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-base text-Text-Neutral-Darker">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    onChange={() =>
                      dispatch({ type: "TOGGLE_DAY", payload: "tomorrow" })
                    }
                  />
                  <span
                    className="w-5 h-5 border-2 border-Text-Neutral-Darker rounded-[4px] flex items-center justify-center
           peer-checked:bg-Background-Primary-Defult peer-checked:border-Background-Primary-Defult"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  Tomorrow
                </label>
              </div>

              <div
                role="radiogroup"
                aria-label="Recommendations"
                className="flex-col flex gap-3 w-fit"
              >
                <p className="text-sm mb-1">Sort</p>
                <label className="flex flex-shrink-0 items-center gap-2 cursor-pointer text-base text-Text-Neutral-Darker">
                  <input
                    type="radio"
                    name="recommendation"
                    className="peer sr-only"
                    value="most-recommended"
                    checked={filterState.sortBy === "most-recommended"}
                    onChange={() =>
                      dispatch({
                        type: "SET_SORT",
                        payload: "most-recommended",
                      })
                    }
                  />
                  <span
                    className="w-5 h-5 border-2 border-Text-Neutral-Darker rounded-[4px] flex items-center justify-center
           peer-checked:bg-Background-Primary-Defult peer-checked:border-Background-Primary-Defult"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  <span className="w-fit">Most recommended</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-base text-Text-Neutral-Darker">
                  <input
                    type="radio"
                    name="recommendation"
                    className="peer sr-only"
                    value="low-to-high"
                    checked={filterState.sortBy === "low-to-high"}
                    onChange={() =>
                      dispatch({ type: "SET_SORT", payload: "low-to-high" })
                    }
                  />
                  <span
                    className="w-5 h-5 border-2 border-Text-Neutral-Darker rounded-[4px] flex items-center justify-center
           peer-checked:bg-Background-Primary-Defult peer-checked:border-Background-Primary-Defult"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  Price Low to high
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-base text-Text-Neutral-Darker">
                  <input
                    type="radio"
                    name="recommendation"
                    className="peer sr-only"
                    value="high-to-low"
                    checked={filterState.sortBy === "high-to-low"}
                    onChange={() =>
                      dispatch({ type: "SET_SORT", payload: "high-to-low" })
                    }
                  />
                  <span
                    className="w-5 h-5 border-2 border-Text-Neutral-Darker rounded-[4px] flex items-center justify-center
           peer-checked:bg-Background-Primary-Defult peer-checked:border-Background-Primary-Defult"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  Price High to low
                </label>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Button
          className="lg:order-3"
          variant="ghost"
          onClick={() => navigate("/map")}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1251_4612)">
              <path
                d="M1.66675 4.3811C1.66675 2.88196 2.97258 1.66667 4.58342 1.66667C6.19425 1.66667 7.50008 2.88196 7.50008 4.3811C7.50008 5.86849 6.56918 7.60414 5.11678 8.22482C4.7782 8.36951 4.38863 8.36951 4.05005 8.22482C2.59765 7.60414 1.66675 5.86849 1.66675 4.3811Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12.5 14.3811C12.5 12.882 13.8058 11.6667 15.4167 11.6667C17.0275 11.6667 18.3333 12.882 18.3333 14.3811C18.3333 15.8685 17.4024 17.6041 15.95 18.2248C15.6114 18.3695 15.2219 18.3695 14.8833 18.2248C13.4309 17.6041 12.5 15.8685 12.5 14.3811Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M15.4165 14.5833H15.424"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.57568 4.58334H4.58318"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.0001 3.41666C9.58589 3.41666 9.2501 3.75245 9.2501 4.16666C9.2501 4.58088 9.58589 4.91666 10.0001 4.91666V4.16666V3.41666ZM10.0001 15.8333L10.5304 16.3637C10.8233 16.0708 10.8233 15.5959 10.5304 15.303L10.0001 15.8333ZM14.3381 7.23943L14.7408 7.87218L14.3381 7.23943ZM5.66208 12.7606L6.06473 13.3933H6.06473L5.66208 12.7606ZM9.28043 14.053C8.98754 13.7601 8.51266 13.7601 8.21977 14.053C7.92688 14.3459 7.92688 14.8208 8.21977 15.1137L8.7501 14.5833L9.28043 14.053ZM8.21977 16.553C7.92688 16.8459 7.92688 17.3208 8.21977 17.6137C8.51266 17.9066 8.98754 17.9066 9.28043 17.6137L8.7501 17.0833L8.21977 16.553ZM13.4433 4.16666V3.41666H10.0001V4.16666V4.91666H13.4433V4.16666ZM10.0001 15.8333V15.0833H6.55686V15.8333V16.5833H10.0001V15.8333ZM14.3381 7.23943L13.9355 6.60669L5.25942 12.1278L5.66208 12.7606L6.06473 13.3933L14.7408 7.87218L14.3381 7.23943ZM10.0001 15.8333L10.5304 15.303L9.28043 14.053L8.7501 14.5833L8.21977 15.1137L9.46977 16.3637L10.0001 15.8333ZM10.0001 15.8333L9.46977 15.303L8.21977 16.553L8.7501 17.0833L9.28043 17.6137L10.5304 16.3637L10.0001 15.8333ZM6.55686 15.8333V15.0833C5.63979 15.0833 5.29102 13.8857 6.06473 13.3933L5.66208 12.7606L5.25942 12.1278C3.21967 13.4258 4.13911 16.5833 6.55686 16.5833V15.8333ZM13.4433 4.16666V4.91666C14.3604 4.91666 14.7092 6.11433 13.9355 6.60669L14.3381 7.23943L14.7408 7.87218C16.7805 6.57415 15.8611 3.41666 13.4433 3.41666V4.16666Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_1251_4612">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Map
        </Button>
      </div>

      {/* container holds slider and (specialities and content) */}
      <div className="flex max-w-full gap-6 ">
        {/* sidebar */}
        <div className="hidden lg:flex flex-col gap-4 mb-20 w-[235px] ">
          <div className="flex-col flex gap-3 w-fit">
            <p className="text-sm mb-1">Available Date</p>
            <label className="flex items-center gap-2 cursor-pointer text-base text-Text-Neutral-Darker">
              <input
                type="checkbox"
                className="peer sr-only"
                onChange={() =>
                  dispatch({ type: "TOGGLE_DAY", payload: "today" })
                }
              />
              <span
                className="w-5 h-5 border-2 border-Text-Neutral-Darker rounded-[4px] flex items-center justify-center
           peer-checked:bg-Background-Primary-Defult peer-checked:border-Background-Primary-Defult"
              >
                <Check className="w-3 h-3 text-white" />
              </span>
              Today
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-base text-Text-Neutral-Darker">
              <input
                type="checkbox"
                className="peer sr-only"
                onChange={() =>
                  dispatch({ type: "TOGGLE_DAY", payload: "tomorrow" })
                }
              />
              <span
                className="w-5 h-5 border-2 border-Text-Neutral-Darker rounded-[4px] flex items-center justify-center
           peer-checked:bg-Background-Primary-Defult peer-checked:border-Background-Primary-Defult"
              >
                <Check className="w-3 h-3 text-white" />
              </span>
              Tomorrow
            </label>
          </div>

          <div
            role="radiogroup"
            aria-label="Recommendations"
            className="flex-col flex gap-3 w-fit"
          >
            <p className="text-sm mb-1">Sort</p>
            <label className="flex flex-shrink-0 items-center gap-2 cursor-pointer text-base text-Text-Neutral-Darker">
              <input
                type="radio"
                name="recommendation"
                className="peer sr-only"
                value="most-recommended"
                checked={filterState.sortBy === "most-recommended"}
                onChange={() =>
                  dispatch({ type: "SET_SORT", payload: "most-recommended" })
                }
              />
              <span
                className="w-5 h-5 border-2 border-Text-Neutral-Darker rounded-[4px] flex items-center justify-center
           peer-checked:bg-Background-Primary-Defult peer-checked:border-Background-Primary-Defult"
              >
                <Check className="w-3 h-3 text-white" />
              </span>
              <span className="w-fit">Most recommended</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-base text-Text-Neutral-Darker">
              <input
                type="radio"
                name="recommendation"
                className="peer sr-only"
                value="low-to-high"
                checked={filterState.sortBy === "low-to-high"}
                onChange={() =>
                  dispatch({ type: "SET_SORT", payload: "low-to-high" })
                }
              />
              <span
                className="w-5 h-5 border-2 border-Text-Neutral-Darker rounded-[4px] flex items-center justify-center
           peer-checked:bg-Background-Primary-Defult peer-checked:border-Background-Primary-Defult"
              >
                <Check className="w-3 h-3 text-white" />
              </span>
              Price Low to high
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-base text-Text-Neutral-Darker">
              <input
                type="radio"
                name="recommendation"
                className="peer sr-only"
                value="high-to-low"
                checked={filterState.sortBy === "high-to-low"}
                onChange={() =>
                  dispatch({ type: "SET_SORT", payload: "high-to-low" })
                }
              />
              <span
                className="w-5 h-5 border-2 border-Text-Neutral-Darker rounded-[4px] flex items-center justify-center
           peer-checked:bg-Background-Primary-Defult peer-checked:border-Background-Primary-Defult"
              >
                <Check className="w-3 h-3 text-white" />
              </span>
              Price High to low
            </label>
          </div>
        </div>

        {/* specialities and content */}
        <div className="flex flex-col gap-8 w-full overflow-hidden ">
          <div>
            <h3 className="text-lg md:text-2xl mb-4">Choose Specialties</h3>
            <div className="overflow-hidden max-w-full ">
              <Swiper
                spaceBetween={18}
                slidesPerView="auto"
                className="!overflow-visible"
                loop={true}
              >
                {loadingSpecialities
                  ? Array.from({ length: 4 }).map((_, idx) => (
                      <SwiperSlide key={idx} className="!w-fit">
                        <div className="bg-gray-200 h-10 w-28 animate-pulse rounded-[8px]"></div>
                      </SwiperSlide>
                    ))
                  : specialities.map((speciality) => (
                      <SwiperSlide key={speciality.id} className="!w-fit">
                        <label className="py-2 px-3 flex flex-row items-center gap-2 border-[1px] border-Background-Neutral-Darker rounded-[8px] cursor-pointer">
                          <input
                            type="radio"
                            name="speciality"
                            value={speciality.name_en}
                            className="peer sr-only"
                            // checked={
                            //   filterState.speciality === speciality.name_en
                            // }
                            onChange={() =>
                              dispatch({
                                type: "SET_SPECIALITY",
                                payload: speciality.name_en,
                              })
                            }
                          />
                          <img src={speciality.icon} alt={speciality.name_en} />
                          <p className="text-Text-Neutral-Darker text-base">
                            {speciality.name_en}
                          </p>
                        </label>
                      </SwiperSlide>
                    ))}
              </Swiper>
            </div>
          </div>
          <div className="flex-wrap flex mb-16 gap-6 max-w-full pl-1">
            {filteredDoctors.length ? (
              filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.doctor_profile_id} doctor={doctor} />
              ))
            ) : (
              <p className="text-lg text-Text-Neutral-Darker p-4">
                No Doctors Found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
