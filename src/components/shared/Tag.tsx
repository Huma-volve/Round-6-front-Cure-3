import React from "react";

type TagProps = {
  children: React.ReactNode;
  className?: string; // optional
};

const Tag: React.FC<TagProps> = ({ children, className }) => {
  return (
    <p
      className={`bg-Background-Primary-Lightest text-Text-Primary-Defult mx-auto w-fit rounded-full py-2 px-4 text-sm text-center ${
        className ?? ""
      }`}
    >
      {children}
    </p>
  );
};

export default Tag;
