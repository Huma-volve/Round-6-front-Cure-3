import { FaUserGroup, FaStar, FaCommentDots } from "react-icons/fa6";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import profile from "@/assets/images/Ellipse.jpg";
import { PiMedalFill } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getDoctorDetails } from "../../api/DoctorDetails/DoctorDetails";
import { getReview } from "../../api/getreview/getreview";
import type { DoctorDetailsResponse } from "../../types/DoctorDetails/DoctorDetails";
import type { ReviewResponse } from "../../types/Review/Review";
import Loading from "@/Layout/Common/Loading";
import Header from "@/lib/Header/Header";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          size={22}
          className={
            i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
};

const DoctorDetails = () => {
  const navigator = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery<DoctorDetailsResponse>({
    queryKey: ["doctorDetails", id],
    queryFn: () => getDoctorDetails(Number(id)),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
  
  const { data: reviews } = useQuery<ReviewResponse>({
    queryKey: ["reviews", id],
    queryFn: () => getReview(id),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  const doctor = data?.data;

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error: {(error as Error).message}
      </div>
    );
  }

  return (
    <>
      <Header
        title="Doctor Details"
        showFavorite
        onBack={() => navigator("/")}
      />

      <main className="w-[90%] mx-auto mt-5 md:w-[70%] lg:w-[60%]">
        <section>
          <div className="info flex gap-4 items-center hover:scale-[1.02] transition-transform duration-200">
            <img
              src={profile}
              alt="profile"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
            />
            <div>
              <h1 className="font-bold text-lg md:text-xl">{doctor?.name}</h1>
              <p className="text-Text-Neutral-Darker">{doctor?.specialty_name_en}</p>
              <p className="text-Text-Neutral-Darker">
                {doctor?.hospital_city ?? "No Location"}
              </p>
            </div>
          </div>
        </section>

        <section className="flex justify-between mt-8 text-Background-Secondary-Defult flex-wrap gap-6">
          <div className="flex flex-col gap-2 items-center flex-1 hover:scale-110 transition-transform duration-200">
            <FaUserGroup size={25} />
            <p>{doctor?.reviews_count ?? 0}</p>
            <p className="text-Text-Neutral-Darker">patients</p>
          </div>
          <div className="flex flex-col gap-2 items-center flex-1 hover:scale-110 transition-transform duration-200">
            <PiMedalFill size={25} />
            <p>{doctor?.experience_years}</p>
            <p className="text-Text-Neutral-Darker">experience</p>
          </div>
          <div className="flex flex-col gap-2 items-center flex-1 hover:scale-110 transition-transform duration-200">
            <FaStar size={25} />
            <p>{doctor?.average_rating}</p>
            <p className="text-Text-Neutral-Darker">rating</p>
          </div>
          <div className="flex flex-col gap-2 items-center flex-1 hover:scale-110 transition-transform duration-200">
            <FaCommentDots size={25} />
            <p>{doctor?.reviews_count}</p>
            <p className="text-Text-Neutral-Darker">reviews</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-semibold mb-3 text-lg">About me</h2>
          <p className="text-Text-Neutral-Darker leading-relaxed hover:text-Background-Primary-Defult transition-colors duration-200">
            {doctor?.specialty_description}{" "}
            <span className="text-Background-Primary-Defult cursor-pointer hover:underline">
              Read more
            </span>
          </p>
        </section>

        <section className="mt-8">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Reviews and Rating</h2>
            <div className="flex gap-2 items-center cursor-pointer text-Background-Primary-Defult hover:underline">
              <GoPencil size={20} />
              <NavLink to={`/AddReview/${id}`}>
                <p>Add Review</p>
              </NavLink>
            </div>
          </div>

          <div className="mt-5 flex justify-between items-center">
            <h3 className="font-bold text-2xl md:text-3xl text-Background-Primary-Defult">
              {Number(doctor?.average_rating || 0).toFixed(1)}/5
            </h3>

            <div className="flex flex-col items-center gap-1">
              <RatingStars rating={Number(doctor?.average_rating) ?? 0} />
              <p className="text-sm md:text-base text-Text-Neutral-Darker hover:text-Background-Primary-Defult transition-colors duration-200 cursor-pointer">
                {doctor?.reviews_count} reviews
              </p>
            </div>
          </div>
        </section>

        {reviews?.data?.map((review) => (
          <section
            key={review.id}
            className="mt-8 hover:bg-Background-Neutral-Lightest/10 p-4 rounded-xl transition-colors duration-200"
          >
            <div className="footer flex gap-4 items-center justify-between">
              <div className="flex items-center">
                <img
                  src={profile}
                  className="w-12 h-12 rounded-full"
                  alt="profile"
                />
                <div className="ms-4">
                  <h1 className="font-semibold">{review.user?.name}</h1>
                  <p className="text-Text-Secondary-Defult">
                    {dayjs(review.created_at).fromNow()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <RatingStars rating={review.rating} />
                <span className="font-bold text-yellow-400">
                  {review.rating}
                </span>
              </div>
            </div>
            <p className="mt-4 text-Text-Neutral-Darker leading-relaxed">
              {review.review}
            </p>
          </section>
        ))}

        <section className="mt-8">
          <div className="flex items-center justify-between">
            <p className="text-Background-Neutral-Darker">
              <span className="font-semibold text-Background-Secondary-Defult text-xl">
                Price
              </span>
              /Hour
            </p>
            <p className="text-Text-Semantic-Error-Defult text-lg">
              {doctor?.price_per_hour}$
            </p>
          </div>
          <NavLink to={`/confirmAppointment/${doctor?.user_id}`}>
            <Button
              variant="default"
              className="w-full cursor-pointer rounded-2xl p-6 mt-5 text-Background-Neutral-Lightest bg-Background-Primary-Defult hover:bg-transparent border border-Background-Primary-Defult transition-all hover:text-Background-Primary-Defult duration-200 mb-7"
            >
              Book Appointment
            </Button>
          </NavLink>
        </section>
      </main>
    </>
  );
};

export default DoctorDetails;
