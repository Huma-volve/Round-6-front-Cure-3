import React from "react";
import stars from "@/assets/icons/stars.svg";
import img1 from "@/assets/images/person (1).jpg";
import img2 from "@/assets/images/person (2).jpg";
import img3 from "@/assets/images/person (3).jpg";
import img4 from "@/assets/images/person (4).jpg";
import img5 from "@/assets/images/person (5).jpg";

const SectionReviews = () => {
  return (
    <section>
      <h2 className="text-3xl md:text-[40px] text-center mt-4 mb-12">
        Reviews
        <br /> That Speak for Themselves
      </h2>
      <img className="mx-auto mb-8" src={stars} alt="stars" />
      <blockquote className="text-[20px] max-w-[347px] text-center mx-auto mb-14">
        “Quick and easy booking! I found a great dermatologist near me and
        booked an appointment in just a few minutes.”
      </blockquote>
      <div className="flex justify-center items-end gap-4">
        <img
          src={img1}
          alt="1"
          className="rounded-full w-1/6 aspect-square max-w-[112px] object-cover translate-y-8"
        />
        <img
          src={img2}
          alt="2"
          className="rounded-full w-1/6 aspect-square max-w-[112px] object-cover translate-y-4"
        />
        <img
          src={img3}
          alt="3"
          className="rounded-full w-1/5 aspect-square object-cover max-w-[186px]"
        />{" "}
        {/* Middle highest */}
        <img
          src={img4}
          alt="4"
          className="rounded-full w-1/6 aspect-square max-w-[112px] object-cover translate-y-4"
        />
        <img
          src={img5}
          alt="5"
          className="rounded-full w-1/6 aspect-square max-w-[112px] object-cover translate-y-8"
        />
      </div>
    </section>
  );
};

export default SectionReviews;
