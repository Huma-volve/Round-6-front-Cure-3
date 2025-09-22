import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Doctorimage from "../../assets/images/WhatsApp Image 2025-09-16 at 22.56.28_ae447bd2.jpg"
import { useEffect, useRef, useState } from "react";
import type{Doctor} from "../DoctorsNearYou/DoctorsNearYou"
import { ChevronLeft, Fullscreen, Search } from "lucide-react";
import locationicon from "../../assets/icons/Location.svg";
import { useLocation, useNavigate } from "react-router-dom";


interface DoctorWithLocation extends Doctor {
  latitude: number;
  longitude: number;
}

const hospitalIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2967/2967350.png", // أي أيقونة hospital
  iconSize: [32, 32],
});

const searchIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png", // أي أيقونة عادية للبحث
  iconSize: [32, 32],
});

const TheMap = () => {
const [filteredDoctors, setFilteredDoctors] = useState<DoctorWithLocation[]>([]);
const [searchLocation, setSearchLocation] = useState<string>("");
const mapRef = useRef<L.Map | null>(null);
const [searchedCoords, setSearchedCoords] = useState<[number, number] | null>(null);
const navigate=useNavigate();

const location = useLocation();
const params = new URLSearchParams(location.search);
const search = params.get("search");
const [hospitals, setHospitals] = useState<{ lat: number; lon: number; name: string }[]>([]);

useEffect(() => {
  if (search) {
    
    searchLocationHandler(search);
  }
}, [search]);


const searchLocationHandler = async (searchTerm : string) => {
  const res = await fetch(
    `https://api.allorigins.win/raw?url=${encodeURIComponent(
      `https://nominatim.openstreetmap.org/search?format=json&q=${searchTerm}`
    )}`
  );

const data = await res.json();
  if(data.length > 0){
    const { lat, lon } = data[0];
    const coords: [number, number] = [parseFloat(lat), parseFloat(lon)];
    setSearchedCoords(coords);
     setSearchLocation(searchTerm);
    if (mapRef.current) {
 mapRef.current.setView(coords, 12);
    }
    const overpassQuery = `
        [out:json];
        node
          ["amenity"="hospital"]
          (around:5000,${lat},${lon});  // 5km radius
        out;
      `;
      try {
  const overpassRes = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `data=${encodeURIComponent(overpassQuery)}`,
  });

  if (!overpassRes.ok) {
    throw new Error(`Overpass error: ${overpassRes.status}`);
  }

  const overpassData = await overpassRes.json();

  const hospitalList = overpassData.elements.map((el: any) => ({
    lat: el.lat,
    lon: el.lon,
    name: el.tags.name || "Hospital",
  }));
  setHospitals(hospitalList);
} catch (error) {
  console.error("Error fetching hospitals:", error);
}
  }

  };



  
 const doctorIcon = L.divIcon({
  html: `<div style="
        background-color: #1d4ed8; 
        width: 24px; 
        height: 24px; 
        border-radius: 50%; 
        border: 2px solid white;
        box-shadow: 0 0 5px rgba(0,0,0,0.5);
        ">
        <div style="width:6px;height:6px;background:white;border-radius:50%;margin:auto;margin-top:6px;"></div>
        </div>`,
  className: "",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -28],
});

  return (
    <>
   
    <div className=" relative w-full h-screen">
       <MapContainer
  center={[30.045, 31.235]}
  zoom={10}
  style={{ height: "100%", width: "100%" }}
  ref={mapRef}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&copy; OpenStreetMap contributors"
  />

  {filteredDoctors.map((doc) => (
    <Marker
      key={doc.doctor_profile_id}
      position={[doc.latitude, doc.longitude]}
      icon={doctorIcon}
    >
      <Popup>
        <strong>{doc.name}</strong><br />
        {doc.specialty_name_en}<br />
        {doc.hospital_name}
      </Popup>
    </Marker>
  ))}
   {searchedCoords && (
          <Marker position={searchedCoords} icon={searchIcon}>
            <Popup>
              📍 You searched for: <strong>{searchLocation}</strong>
            </Popup>
          </Marker>
        )}
        {hospitals.map((h, i) => (
        <Marker key={i} position={[h.lat, h.lon]} icon={hospitalIcon}>
          <Popup>{h.name}</Popup>
        </Marker>
      ))}
      </MapContainer>

      <div className="absolute bg-white p-6 justify-between rounded-2xl top-4 left-1/2 transform -translate-x-1/2 z-[1000] w-11/12 max-w-md flex gap-2">
    <button
        onClick={() => navigate(-1)}
      className="p-4 bg-white rounded-lg shadow-md"
    >
      <ChevronLeft />
    </button>


     <div>
    <h2 className="font-semibold pb-2">Current location</h2>
    <div className="flex items-center gap-2 text-blue-700 justify-center">
      <img src={locationicon} alt="location icon" />
       <p>{searchLocation}</p>

    </div>
   </div>
  
    <button
     onClick={() => {
    navigate("/map/search"); 
  }}
      className="p-4 cursor-pointer  border border-gray-300 rounded-lg shadow-md"
    >
      <Search/>
    </button>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-Background-Primary-Defult transition-all  duration-300 font-medium rounded-2xl w-[300px] p-4 px-5 text-center cursor-pointer mx-auto absolute bottom-6 z-[1000] text-white hover:bg-white hover:text-Background-Primary-Defult border-1 border-Background-Primary-Defult"
        onClick={() => navigate("/")} >Confirm location</button>
      </div>
  </div>
     

    </>
  );
};
export default TheMap;
