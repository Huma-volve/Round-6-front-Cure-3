import { Tag } from "@/components/shared";
import heroStars from "@/assets/icons/heroStars.svg";
import person1 from "@/assets/images/person (1).jpg";
import person2 from "@/assets/images/person (2).jpg";
import person3 from "@/assets/images/person (3).jpg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SectionHero = () => {
  const isLogedIn = false;
  const navigate = useNavigate();

  function startHandler() {
    navigate("/signin");
  }

  function bookHandler() {
    navigate("/search");
  }

  return (
    <section className="pt-20 flex flex-col items-center">
      <Tag className="flex gap-2 text-Text-Secondary-Defult">
        <img src={heroStars} alt="blue stars" />
        Upgrade your account
      </Tag>
      <h1 className="text-3xl md:text-[40px] text-center mt-4 mb-6">
        Find and book top doctors near yor
      </h1>
      <p className="max-w-[524px] text-Text-Neutral-Darker text-base lg:text-[20px] text-center">
        Easily find top-rated specialists near you and book appointments in just
        a few clicks. Whether you need an in-person visit consultation, we're
        here to connect you with the right care—fast, simple, and secure.
      </p>
      <Tag className="mt-4 mb-6 text-Text-Secondary-Defult flex gap-2 items-center">
        <div className="flex">
          <img
            src={person1}
            alt="a user"
            className="border-[1px] border-white object-cover h-[30px] w-[30px] rounded-full"
          />
          <img
            src={person2}
            alt="a user"
            className="border-[1px] border-white object-cover ml-[-10px] h-[30px] w-[30px] rounded-full"
          />
          <img
            src={person3}
            alt="a user"
            className="border-[1px] border-white object-cover ml-[-10px] h-[30px] w-[30px] rounded-full"
          />
        </div>
        10k+ happy patients
      </Tag>
      <div className="items-center flex gap-4 sm:gap-8 flex-col sm:flex-row">
        {isLogedIn ? (
          ""
        ) : (
          <Button onClick={startHandler} className="px-14">
            Get started
          </Button>
        )}
        <Button
          variant="outline"
          onClick={bookHandler}
          className="flex items-center gap-2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-inherit" // optional, ensures it inherits text color
          >
            <path
              d="M11 13H16M8 13H8.00898M13 17H8M16 17H15.991"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 2V4M6 2V4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 8H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Book Appointment
        </Button>
      </div>
    </section>
  );
};

export default SectionHero;
