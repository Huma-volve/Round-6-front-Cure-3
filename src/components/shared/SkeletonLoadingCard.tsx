const SkeletonLoadingCard = () => {
  return (
    <article className="flex flex-col p-4 w-[360px] shadow-[0_0_12px_rgba(0,0,0,0.1)] rounded-[10px]">
      <div className="flex gap-2">
        {/* image */}
        <div className="h-20 w-20 rounded-[10px] bg-gray-200 animate-pulse"></div>

        <div className="flex gap-2 flex-col w-full">
          <div className="h-[18px] bg-gray-200 rounded animate-pulse"></div>
          <div className="h-[18px] bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* price */}
      <div className="h-5 bg-gray-200 rounded mt-4 animate-pulse"></div>

      {/* button */}
      <div className="h-12 bg-gray-200 rounded mt-2 animate-pulse"></div>
    </article>
  );
};

export default SkeletonLoadingCard;
