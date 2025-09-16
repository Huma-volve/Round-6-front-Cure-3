import React from "react";
import phoneImg from "@/assets/images/iPhones.png";
import googlePlayIcon from "@/assets/icons/google-play.svg";
import appleIcon from "@/assets/icons/apple.svg";

const SectionApp = () => {
  return (
    <section
      id="app"
      className="bg-Background-Primary-Lighter rounded-[20px] mb-[-50px] z-10 relative py-10 px-16 flex gap-8"
    >
      <div className="text-white max-w-[527px]">
        <h2 className="text-4xl mb-4">Your Health, One Tap Away</h2>
        <p className="text-base mb-[60px]">
          Book appointments, chat with doctors, and manage your health
          anytime—right from your phone. Download the app now and stay connected
          wherever you are.
        </p>
        <div className="flex gap-10">
          <a
            href="#"
            className="flex gap-2 items-center bg-Background-Secondary-Defult py-2 px-4 rounded-[8px]"
          >
            <img src={googlePlayIcon} alt="google play icon" />{" "}
            <p className="text-xs flex flex-col ">
              Got IT ON
              <span className="font-medium text-[20px]">Google Play</span>
            </p>
          </a>
          <a
            href="#"
            className="flex gap-2 items-center bg-Background-Secondary-Defult py-2 px-4 rounded-[8px]"
          >
            <img src={appleIcon} alt="apple icon" />{" "}
            <p className="text-xs flex flex-col">
              Download on the
              <span className="font-medium text-[20px]">Apple Store</span>
            </p>
          </a>
        </div>
      </div>
      <img className="mx-auto" src={phoneImg} alt="2 phones" />
    </section>
  );
};

export default SectionApp;
