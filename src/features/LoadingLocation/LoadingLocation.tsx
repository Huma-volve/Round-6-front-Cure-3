import TheMap from  "../TheMap/TheMap";
import image from "../../assets/images/ba06b3e7882ffb9e60838270ea0dd9b82b74eda6.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const LoadingLocation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const search = params.get("search");

  useEffect(() => {
    const timer = setTimeout(() => {

      navigate(`/map?search=${encodeURIComponent(search || "")}`);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, search]);


  return (
    <>
    <div className="relative w-full h-screen">
    <TheMap />

    {/* overlay */}

      <div className="absolute inset-0 z-[2000] flex flex-col items-center justify-center bg-gray-200/70 ">
      
      <img src={image}  alt=" doctor image" className="rounded-full w-25 h-25 animate-bounce mb-4 "/>
      </div>
    </div>

    </>
  )
}

export default LoadingLocation;