import React from "react";

const Tag = (props: { text: string }) => {
  return (
    <p className="bg-Background-Primary-Lightest text-Text-Primary-Defult mx-auto w-fit rounded-full py-2 px-4 text-sm">
      {props.text}
    </p>
  );
};

export default Tag;
