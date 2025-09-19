import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full text-center">
      <h1 className="text-6xl font-bold text-Text-Semantic-Error-Defult">
        404
      </h1>
      <p className="text-xl text-gray-600 mt-4 mb-4">Oops! Page not found</p>
      <Button onClick={() => navigate("/")}>Go Back Home</Button>
    </div>
  );
};

export default NotFound;
