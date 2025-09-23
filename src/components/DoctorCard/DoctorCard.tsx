import { useState } from "react";
import { Clock4, Heart, Star } from "lucide-react";
import doctorImage from "../../assets/images/84c1b0d51403f4f1d7e9bd56b7c704bb2bf992e9 (1).jpg";

<<<<<<< HEAD


=======
>>>>>>> 8e4bce81cf27d2bc90a7735f323cae851cf3ccfa
export interface Availability {
  availability_id: number;
  day: string;
  start_time: string;
<<<<<<< HEAD
  end_time: string;   
=======
  end_time: string;
>>>>>>> 8e4bce81cf27d2bc90a7735f323cae851cf3ccfa
}
interface Doctor {
  doctor_profile_id: number;
  name: string;
  specialty_name_en: string;
  hospital_name: string;
<<<<<<< HEAD
  average_rating : string;
  availability: Availability[];
 
=======
  average_rating: string;
  availability: Availability[];
>>>>>>> 8e4bce81cf27d2bc90a7735f323cae851cf3ccfa
}
interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  const [favorites, setFavorites] = useState<number[]>([]);
  // favorite
  const toggleFavorite = (doctorId: number) => {
    if (favorites.includes(doctorId)) {
      setFavorites(favorites.filter((id) => id !== doctorId));
    } else {
      setFavorites([...favorites, doctorId]);
    }
  };
  return (
    <>
      <div>
        <div className="border hover:scale-103 transition-all duration-200 cursor-pointer shadow-lg  flex items-center  gap-4 m-2   overflow-hidden rounded-2xl border-gray-300">
          <div>
            <img
              src={doctorImage}
              alt={doctor.name}
              className="w-30 h-30 object-cover "
              onError={(e) =>
                (e.currentTarget.src =
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAMFBMVEXz9Pa5vsq2u8j29/jo6u3O0dq+ws7b3uPV2N/i5OnEyNLR1NzY2+Hs7vHl5+ve4Oaxfg/vAAAB1UlEQVR4nO2Z25KDIBBEAwPEu///t4so0aCxyNQyurV9HpNCT3XaQc3jAQAAAAAAAAAAAAAAAAAAAAAAAIBy9IZBX1bJOsXA2Z6KORmnOU5KaTcUk2qYTlNYhaIiE47OYMqqLmNFT610w1lp/cLqt3VmqPPHbjkLqztKtUJS5CuS2xIhKTKtb28z3kpqUGE4ZNZeRsrEua7tbaRoHaJZ40dEql8Hu7Y3kaJhs9vsW0V1Ojaul6J61zSZop/8fGT8l7p9+1So6KtUMqpoPLgqZZKqY1TpoKIhfrHtlYwU1XoZnu83uktOaVZS28zQaK1dcqJXTnNWr17JbciPPt2RNzm9ZyUmdcCgEmJW10lRvbuBj1ldJkW7nEJWV0iNcT9O+rS2XVzKP0m4ZSYc5hR7JSkVnm6UocM+vbIaSVKKunBWZ8jvwR+RlZpyCmd15sRJVmrJKWR14iQqRWPmawVBqU1Ot5GKfbqTVH5OglLmi9dUUlInoxJSkOJKfcFT6Orrqy6bylx7j/554b+UssSgpFTY8brn9/ibm6nwRejDXwcMpmVllOaX9Eyy3vgx6VhB+agKNWrGdJZBW+6PtQDn4qNyPx0AAAAAAAAAAAAAAAAAAMCf4wdamRv/GA19DwAAAABJRU5ErkJggg==")
              }
            />
          </div>
          <div className="gap-10 flex justify-between items-center">
            <div>
              <h3 className="font-medium">{doctor.name}</h3>
              <p className="text-Text-Neutral-Darker">
                {doctor.specialty_name_en} | {doctor.hospital_name}
              </p>
              <div className="flex items-center font-medium gap-8">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                  <span className="ml-1">
                    {Number(doctor.average_rating).toFixed(1)}
                  </span>
                </div>

<<<<<<< HEAD
                 <h3 className="font-medium">{doctor.name}</h3>
                 <p className="text-Text-Neutral-Darker">{doctor.specialty_name_en} | {doctor.hospital_name}</p>
                 <div className="flex items-center font-medium gap-8">
                    <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-300 fill-yellow-300"/>
                        <span className="ml-1">{Number(doctor.average_rating).toFixed(1)}</span>
                    </div>
            
                    <div className="flex items-center ml-4 font-medium">
                        <Clock4 className="text-gray-400 text-sm min-w-[20px] min-h-[20px] mr-1 " />
                        <p>  {doctor.availability[0].start_time.slice(0,5)}am - {doctor.availability[0].end_time.slice(0,5)}pm </p>
                    </div>
                 </div>
                    </div>
                     <div className="ml-16 pl-4 pr-2">
                     <button onClick={() => toggleFavorite(doctor.doctor_profile_id )} 
                     ><Heart  className={favorites.includes(doctor.doctor_profile_id)? "text-red-400 fill-red-400 cursor-pointer" : "text-red-400"} /></button>
                    </div>
=======
                <div className="flex items-center ml-4 font-medium">
                  <Clock4 className="text-gray-400 text-sm min-w-[20px] min-h-[20px] mr-1 " />
                  <p>
                    {" "}
                    {doctor.availability[0].start_time.slice(0, 5)}am -{" "}
                    {doctor.availability[0].end_time.slice(0, 5)}pm
                  </p>
>>>>>>> 8e4bce81cf27d2bc90a7735f323cae851cf3ccfa
                </div>
              </div>
            </div>
            <div className="ml-16 pl-4 pr-2">
              <button onClick={() => toggleFavorite(doctor.doctor_profile_id)}>
                <Heart
                  className={
                    favorites.includes(doctor.doctor_profile_id)
                      ? "text-red-400 fill-red-400 cursor-pointer"
                      : "text-red-400"
                  }
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
