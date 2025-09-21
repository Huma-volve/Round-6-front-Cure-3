export type DoctorDetails = {
    id: string;
    experience_years: number;
    address: string;
    email: string;
    day: string;
    name: string;
    phone: string;
    price_per_hour: number;
    hospital_name: string;
    specialty_description: string;
    specialty_name_en: string;
    specialty_name_ar: string,
    average_rating: number,
    reviews_count: number,
    start_time: string,
    end_time: string,
    doctor_profile_id :number
  };
  
  export type DoctorDetailsResponse = {
    current_page: number;
    data: DoctorDetails;
  };
  