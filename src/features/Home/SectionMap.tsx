import map from "@/assets/images/map.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SectionMap = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-between items-center gap-12 lg:gap-4 lg:flex-row flex-col">
      <div>
        <h2 className="text-3xl md:text-[40px] mt-4 mb-4">
          Find Care Near You
          <br />
          in Seconds
        </h2>
        <p className="max-w-[444px] text-Text-Neutral-Darker text-base lg:text-[20px] mb-8">
          Allow location access or choose your city to instantly discover
          trusted doctors and clinics around you—quick, easy, and local.
        </p>
        <Button
          variant="outline"
          className="flex gap-2"
          onClick={() => navigate("/doctorsNearYou")}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-current"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.58335 2.29163C5.55628 2.29163 2.29169 5.55622 2.29169 9.58329C2.29169 13.6104 5.55628 16.875 9.58335 16.875C13.6104 16.875 16.875 13.6104 16.875 9.58329C16.875 5.55622 13.6104 2.29163 9.58335 2.29163ZM1.04169 9.58329C1.04169 4.86586 4.86592 1.04163 9.58335 1.04163C14.3008 1.04163 18.125 4.86586 18.125 9.58329C18.125 11.7171 17.3426 13.6681 16.0491 15.1651L18.7753 17.8914C19.0194 18.1354 19.0194 18.5312 18.7753 18.7752C18.5312 19.0193 18.1355 19.0193 17.8914 18.7752L15.1652 16.049C13.6681 17.3426 11.7171 18.125 9.58335 18.125C4.86592 18.125 1.04169 14.3007 1.04169 9.58329Z"
              fill="currentColor"
            />
          </svg>
          <span>Search by location</span>
        </Button>
      </div>
      <img src={map} alt="a map" className="max-w-full h-auto object-contain" />
    </section>
  );
};

export default SectionMap;
