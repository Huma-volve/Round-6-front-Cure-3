import blueStars from "@/assets/icons/blueStars.svg";
import searchBlack from "@/assets/icons/searchBlack.svg";
import month from "@/assets/images/Month.svg";
import calender from "@/assets/images/calender.svg";
import how from "@/assets/images/how.svg";

// TODO add the mouse in the middle box, and implement the hovering effect in the first box

const SectionHow = () => {
  return (
    <section id="how">
      <h2 className="text-3xl md:text-[40px] mb-8 lg:mb-16 text-center">
        How it works
      </h2>

      <div className="flex flex-col md:flex-row md:justify-between md:gap-4 lg:gap-6 gap-6">
        <div className="flex-1 rounded-4xl border-[1px] border-Background-Neutral-Darker overflow-hidden">
          <div className="h-[176px] pt-6 pb-4 px-8 flex flex-col justify-center gap-2">
            <img className="z-[-1] relative" src={blueStars} alt="blue stars" />
            <div className="border-[0.5px] border-Border-Primary-Defult rounded-[12px] flex gap-2 py-3 px-4">
              <img className="" src={searchBlack} alt="search icon" />
              <p className="text-sm">Search by specialty</p>
            </div>
            <img className="z-[-1] relative" src={blueStars} alt="blue stars" />
          </div>
          <div className="z-10 rounded-[10px] shadow-[0_0_13px_rgba(0,0,0,0.1)] bg-white p-4 h-full">
            <p className="text-Text-Secondary-Defult text-base md:text-lg mb-1">
              Search for a Doctor
            </p>
            <p className="text-Text-Neutral-Darker text-xs md:text-sm">
              Easily browse by specialty, location, or doctor name to find the
              right healthcare provider for your needs.
            </p>
          </div>
        </div>

        <div className="flex-1 rounded-4xl border-[1px] border-Background-Neutral-Darker overflow-hidden">
          <div className="h-[176px] rounded-t-3xl py-4 px-6 m-4 pb-0 mb-0 border-b-0 border-[1px] border-Background-Neutral-Darker flex justify-center items-center flex-col">
            <img
              src={month}
              alt="a calender"
              className="mx-auto relative z-[-1]"
            />
            <img
              src={calender}
              alt="a calender"
              className="relative mx-auto z-[-1]"
            />
          </div>
          <div className="rounded-[10px] shadow-[0_0_13px_rgba(0,0,0,0.1)] p-4 h-full bg-white">
            <p className="text-Text-Secondary-Defult text-base md:text-lg mb-1">
              Choose a Date & Time
            </p>
            <p className="text-Text-Neutral-Darker text-xs md:text-sm">
              View real-time availability and pick a slot that works best for
              your schedule.
            </p>
          </div>
        </div>

        <div className="flex-1 rounded-4xl border-[1px] border-Background-Neutral-Darker overflow-hidden">
          <div className="h-[176px] flex justify-center items-center px-7">
            <img
              src={how}
              alt="payment information"
              className="relative z-[-1]"
            />
          </div>
          <div className="rounded-[10px] shadow-[0_0_13px_rgba(0,0,0,0.1)] p-4 h-full">
            <p className="text-Text-Secondary-Defult text-base md:text-lg mb-1">
              Book & Pay Online
            </p>
            <p className="text-Text-Neutral-Darker text-xs md:text-sm">
              Confirm your appointment and pay securely using various payment
              options—credit card, mobile wallet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHow;
