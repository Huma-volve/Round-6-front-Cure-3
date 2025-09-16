import React from "react";
import phoneImg from "@/assets/images/iPhones.png";
import googlePlayIcon from "@/assets/icons/google-play.svg";
import appleIcon from "@/assets/icons/apple.svg";

const SectionApp = () => {
  return (
    <section
      id="app"
      className="bg-Background-Primary-Lighter rounded-[20px] mb-[-50px] z-10 relative py-5 lg:py-10 px-8 lg:px-16 flex md:flex-row flex-col gap-9 md:gap-0 items-center md:justify-between"
    >
      <div className="text-white max-w-[527px]">
        <h2 className="text-3xl md:text-4xl mb-4">Your Health, One Tap Away</h2>
        <p className="text-sm md:text-base md:mb-[60px] mb-8">
          Book appointments, chat with doctors, and manage your health
          anytime—right from your phone. Download the app now and stay connected
          wherever you are.
        </p>
        <div className="flex sm:flex-row flex-col gap-3 lg:gap-10">
          <a
            href="#"
            className="flex w-fit gap-2 items-center bg-Background-Secondary-Defult py-2 px-4 rounded-[8px]"
          >
            <img
              className="w-6 lg:w-8"
              src={googlePlayIcon}
              alt="google play icon"
            />{" "}
            <p className="text-xs flex flex-col ">
              Got IT ON
              <span className="font-medium text-base lg:text-[20px]">
                Google Play
              </span>
            </p>
          </a>
          <a
            href="#"
            className="flex w-fit gap-2 items-center bg-Background-Secondary-Defult lg:py-2 py-1 lg:px-4 px-2 rounded-[8px]"
          >
            <img className="w-6 lg:w-8" src={appleIcon} alt="apple icon" />{" "}
            <p className="text-xs flex flex-col">
              Download on the
              <span className="font-medium text-base lg:text-[20px]">
                Apple Store
              </span>
            </p>
          </a>
        </div>
      </div>
      <img
        className="max-w-full h-auto object-contain"
        src={phoneImg}
        alt="2 phones"
      />
    </section>
  );
};

export default SectionApp;
