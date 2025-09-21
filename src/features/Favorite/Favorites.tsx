import { useEffect, useState } from "react";
import EmptyFavorites from "./EmptyFavorites";
import Loading from "@/Layout/Common/Loading";
import { DoctorCard } from "@/components/shared";

const Favorites = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      setEmpty(false);
      setLoading(true);
      try {
        // 1. Fetch the list of favorites
        const favRes = await fetch(
          "http://round5-online-booking-with-doctor-api.huma-volve.com/api/favourites/doctors",
          {
            headers: {
              Authorization:
                "Bearer 3|7gKZsNspIPXDG7HdG0ndcxN6gMLZQdh4lTt7sn9h96a5e0e3",
            },
          }
        );

        if (!favRes.ok) throw new Error("Failed to fetch favorites");

        const favoritesArr = await favRes.json();

        // 2. For each favorite, fetch doctor details
        const doctorPromises = favoritesArr.data.map(async (fav: any) => {
          const docRes = await fetch(
            `http://round5-online-booking-with-doctor-api.huma-volve.com/api/doctors/${fav.favouritable.id}`,
            {
              headers: {
                Authorization:
                  "Bearer 3|7gKZsNspIPXDG7HdG0ndcxN6gMLZQdh4lTt7sn9h96a5e0e3",
              },
            }
          );

          if (!docRes.ok) throw new Error("Failed to fetch doctor");

          return docRes.json();
        });

        // 3. Wait for all requests to complete
        const doctorsArr = await Promise.all(doctorPromises);

        // 4. Save in state
        setDoctors(doctorsArr);
      } catch (error) {
        console.error("Error fetching data:", error);
        setEmpty(true);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="pt-20 mb-20">
      <h2 className="text-3xl md:text-[40px] mb-8 lg:mb-16 text-center">
        Your Favorite
      </h2>
      {loading ? (
        <Loading />
      ) : empty || doctors.length == 0 ? (
        <EmptyFavorites />
      ) : (
        <ul className="flex-wrap">
          {doctors.map((doctor) => (
            <li className="m-6" key={doctor.data.doctor_profile_id}>
              <DoctorCard doctor={doctor.data} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
