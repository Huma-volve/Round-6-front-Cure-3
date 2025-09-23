import { DoctorCard, SkeletonLoadingCard } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SectionTopDoctors = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "http://round5-online-booking-with-doctor-api.huma-volve.com/api/doctors",
          {
            headers: {
              Authorization:
                "Bearer 3|7gKZsNspIPXDG7HdG0ndcxN6gMLZQdh4lTt7sn9h96a5e0e3",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }
        const data = await response.json();
        setDoctors(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setLoading(true);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <section className="[clip-path:inset(0px_-60%_-5px_-5px)]">
      <div className="flex justify-between items-center mb-12 gap-4 flex-col sm:flex-row">
        <div>
          <h2 className="text-3xl md:text-[40px] mt-4 mb-4">
            Top-Rated Doctors Chosen by Patients
          </h2>
          <p className="max-w-[662px] text-Text-Neutral-Darker text-base lg:text-[20px]">
            Explore our highest-rated doctors, trusted by real patients for
            their expertise, care, and service. Book with confidence today.
          </p>
        </div>
        <Button
          variant="outline"
          className="px-8"
          onClick={() => navigate("/search")}
        >
          View All
        </Button>
      </div>

      <Swiper
        spaceBetween={24}
        slidesPerView="auto" // default for small screens
        className="!overflow-visible"
      >
        {loading
          ? Array.from({ length: 4 }).map((_, idx) => (
              <SwiperSlide key={idx} className="!w-[350px]">
                <SkeletonLoadingCard />
              </SwiperSlide>
            ))
          : doctors.slice(0, 4).map((doctor, idx) => (
              <SwiperSlide key={idx} className="!w-[350px]">
                <DoctorCard doctor={doctor} />
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
};

export default SectionTopDoctors;
