import { useEffect, useState } from "react";
import EmptyFavorites from "./EmptyFavorites";

const Favorite = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      setEmpty(false);
      setLoading(true);
      try {
        const response = await fetch(
          "http://round5-online-booking-with-doctor-api.huma-volve.com/api/favourites/doctors",
          {
            headers: {
              Authorization:
                "Bearer 3|7gKZsNspIPXDG7HdG0ndcxN6gMLZQdh4lTt7sn9h96a5e0e3",
            },
          }
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }
        const data = await response.json();
        console.log(data);
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setEmpty(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  let content = <EmptyFavorites />;

  return <div>{loading ? "" : content}</div>;
};

export default Favorite;
