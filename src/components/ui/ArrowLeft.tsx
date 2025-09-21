import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ArrowLeft = ({ title }: { title?: string }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        <div className="w-10"></div>
      </div>
    </>
  );
};

export default ArrowLeft;
