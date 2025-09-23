export type DoctorDetails = {
  user_id: number;
  name: string;
  email: string;
  phone: string;
  about: string;
  experience_years: number;
  price_per_hour: string;
  specialty_id: number;
  specialty_name_en: string;
  specialty_name_ar: string;
  specialty_description: string;
  hospital_id: number;
  hospital_name: string;
  hospital_city: string;
  hospital_start_time: string;
  hospital_end_time: string;
  average_rating: string;
  reviews_count: number;
  availability: string[];
};

export type DoctorDetailsResponse = {
  success: boolean;
  message: string;
  data: DoctorDetails; 
};
