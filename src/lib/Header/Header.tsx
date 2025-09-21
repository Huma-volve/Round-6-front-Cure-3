import { FaAngleLeft, FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { HeaderProps } from "../../types/Header/Header";

const Header = ({ title, showBack = true, onBack, showFavorite = false }: HeaderProps) => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 mt-3 md:mt-6 md:px-10">
      {showBack && (
        <FaAngleLeft
          size={25}
          onClick={onBack ? onBack : () => navigate("/")}
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
        />
      )}

      <h1 className="text-lg md:text-2xl font-semibold hover:text-Background-Primary-Defult transition-colors duration-200">
        {title}
      </h1>

      {showFavorite ? (
        <span
          onClick={() => setFavorite(!favorite)}
          className="w-10 h-10 rounded-full border border-Background-Neutral-Lightest flex items-center justify-center cursor-pointer hover:bg-Background-Neutral-Lightest/20 transition-colors duration-200"
        >
          {favorite ? (
            <FaHeart size={25} className="text-red-500 hover:scale-110 transition-transform duration-200" />
          ) : (
            <FaRegHeart size={25} className="text-gray-500 hover:text-red-500 transition-colors duration-200" />
          )}
        </span>
      ) : (
        <div className="w-10" /> 
      )}
    </header>
  );
};

export default Header;
