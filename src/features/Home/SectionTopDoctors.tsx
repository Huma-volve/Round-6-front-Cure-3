import { DoctorCard, SkeletonLoadingCard } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

const dataArr = [
  {
    doctor_profile_id: 1,
    about: "Magister in eyes surgery with 20 years of experience",
    experience_years: 20,
    price_per_hour: "60.00",
    user_id: 1,
    name: "Ahmed Mohamed",
    email: "ahmed@example.com",
    phone: "0501234567",
    specialty_id: 1,
    specialty_name_en: "Dentist",
    specialty_name_ar: "طبيب أسنان",
    specialty_description: "Dental and oral care specialist",
    hospital_id: 1,
    hospital_name: "57375",
    hospital_start_time: "19:44:14",
    hospital_end_time: "19:44:14",
    availability_id: 1,
    day: "sunday",
    start_time: "08:00:00",
    end_time: "14:00:00",
    average_rating: "3.9231",
    reviews_count: 13,
  },
  {
    doctor_profile_id: 1,
    about: "Magister in eyes surgery with 20 years of experience",
    experience_years: 20,
    price_per_hour: "60.00",
    user_id: 1,
    name: "Ahmed Mohamed",
    email: "ahmed@example.com",
    phone: "0501234567",
    specialty_id: 1,
    specialty_name_en: "Dentist",
    specialty_name_ar: "طبيب أسنان",
    specialty_description: "Dental and oral care specialist",
    hospital_id: 1,
    hospital_name: "57375",
    hospital_start_time: "19:44:14",
    hospital_end_time: "19:44:14",
    availability_id: 1,
    day: "sunday",
    start_time: "08:00:00",
    end_time: "14:00:00",
    average_rating: "3.9231",
    reviews_count: 13,
  },
  {
    doctor_profile_id: 1,
    about: "Magister in eyes surgery with 20 years of experience",
    experience_years: 20,
    price_per_hour: "60.00",
    user_id: 1,
    name: "Ahmed Mohamed",
    email: "ahmed@example.com",
    phone: "0501234567",
    specialty_id: 1,
    specialty_name_en: "Dentist",
    specialty_name_ar: "طبيب أسنان",
    specialty_description: "Dental and oral care specialist",
    hospital_id: 1,
    hospital_name: "57375",
    hospital_start_time: "19:44:14",
    hospital_end_time: "19:44:14",
    availability_id: 1,
    day: "sunday",
    start_time: "08:00:00",
    end_time: "14:00:00",
    average_rating: "3.9231",
    reviews_count: 13,
  },
  {
    doctor_profile_id: 1,
    about: "Magister in eyes surgery with 20 years of experience",
    experience_years: 20,
    price_per_hour: "60.00",
    user_id: 1,
    name: "Ahmed Mohamed",
    email: "ahmed@example.com",
    phone: "0501234567",
    specialty_id: 1,
    specialty_name_en: "Dentist",
    specialty_name_ar: "طبيب أسنان",
    specialty_description: "Dental and oral care specialist",
    hospital_id: 1,
    hospital_name: "57375",
    hospital_start_time: "19:44:14",
    hospital_end_time: "19:44:14",
    availability_id: 1,
    day: "sunday",
    start_time: "08:00:00",
    end_time: "14:00:00",
    average_rating: "3.9231",
    reviews_count: 13,
  },
  {
    doctor_profile_id: 1,
    about: "Magister in eyes surgery with 20 years of experience",
    experience_years: 20,
    price_per_hour: "60.00",
    user_id: 1,
    name: "Ahmed Mohamed",
    email: "ahmed@example.com",
    phone: "0501234567",
    specialty_id: 1,
    specialty_name_en: "Dentist",
    specialty_name_ar: "طبيب أسنان",
    specialty_description: "Dental and oral care specialist",
    hospital_id: 1,
    hospital_name: "57375",
    hospital_start_time: "19:44:14",
    hospital_end_time: "19:44:14",
    availability_id: 1,
    day: "sunday",
    start_time: "08:00:00",
    end_time: "14:00:00",
    average_rating: "3.9231",
    reviews_count: 13,
  },
  {
    doctor_profile_id: 1,
    about: "Magister in eyes surgery with 20 years of experience",
    experience_years: 20,
    price_per_hour: "60.00",
    user_id: 1,
    name: "Ahmed Mohamed",
    email: "ahmed@example.com",
    phone: "0501234567",
    specialty_id: 1,
    specialty_name_en: "Dentist",
    specialty_name_ar: "طبيب أسنان",
    specialty_description: "Dental and oral care specialist",
    hospital_id: 1,
    hospital_name: "57375",
    hospital_start_time: "19:44:14",
    hospital_end_time: "19:44:14",
    availability_id: 1,
    day: "sunday",
    start_time: "08:00:00",
    end_time: "14:00:00",
    average_rating: "3.9231",
    reviews_count: 13,
  },
];

const SectionTopDoctors = () => {
  return (
    <section className="[clip-path:inset(0px_-60%_0px_0px)]">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl md:text-[40px] mt-4 mb-4">
            Top-Rated Doctors Chosen by Patients
          </h2>
          <p className="max-w-[662px] text-Text-Neutral-Darker text-base lg:text-[20px]">
            Explore our highest-rated doctors, trusted by real patients for
            their expertise, care, and service. Book with confidence today.
          </p>
        </div>
        <Button variant="outline" className="px-8">
          View All
        </Button>
      </div>

      <Swiper
        spaceBetween={24}
        slidesPerView={3} // default for small screens
        className="!overflow-visible"
      >
        {dataArr.slice(0, 4).map((data) => (
          <SwiperSlide>
            <DoctorCard doctor={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SectionTopDoctors;
