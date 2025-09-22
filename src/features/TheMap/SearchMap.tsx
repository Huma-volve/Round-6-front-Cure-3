import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";



const SearchMap = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const navigate=useNavigate();
  
  const handleSearch = () => {
     if (searchLocation.trim() !== "") {
       navigate(`/loadingLocation?search=${encodeURIComponent(searchLocation)}`);
    }
     console.log("Searching for:", searchLocation);
     }

     

  return (
    <>
    <div className="container p-4 mx-auto">
        
     <div className="flex mt-2 m-4 mx-auto relative gap-2 w-full max-w-md">
         <button
          onClick={handleSearch}
          className="px-4 py-2 rounded-lg"
        >
          <Search className="absolute top-2.5 z-50 translate-x-8 font-light text-gray-300"/>
        </button>
     <input
          type="text"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          placeholder="Search for your location"
          className="flex-1 p-2 px-10 rounded-lg border focus:outline-Background-Primary-Defult border-gray-300 bg-white/80 backdrop-blur-sm"
         onKeyDown={(e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
}}
            />
        </div>

        <div className="flex items-center bottom-8  justify-center">
          <button className="bg-Background-Primary-Defult absolute font-medium transition-all duration-300 rounded-2xl w-[300px] p-4 px-5 text-center cursor-pointer mx-auto bottom-6 z-[1000] text-white hover:bg-white hover:text-Background-Primary-Defult border-1 border-Background-Primary-Defult"
          onClick={() => {
    if (searchLocation.trim() !== "") {
      navigate(`/loadingLocation?search=${encodeURIComponent(searchLocation)}`);
    }
  }}>Confirm location</button>
      </div>
    </div>
    </>
  )

};

export default  SearchMap;