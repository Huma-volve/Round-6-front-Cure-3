import hearts from "@/assets/icons/favoriteHearts.svg";

const EmptyFavorites = () => {
  return (
    <div className="flex flex-col items-center mt-24">
      <img className="mb-6" src={hearts} alt="hearts" />
      <h3 className="mb-2.5 text-lg md:text-2xl">Your favorite!</h3>
      <p className="text-xs md:text-base">
        Add your favorite to find it easily
      </p>
    </div>
  );
};

export default EmptyFavorites;
