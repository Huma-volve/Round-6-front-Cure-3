import {
  SectionApp,
  SectionFAQ,
  SectionHero,
  SectionHow,
  SectionMap,
  SectionReviews,
  SectionTopDoctors,
} from "./";

const Home = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <SectionHero />
      <SectionHow />
      <SectionMap />
      {/* <SectionTopDoctors /> */}
      <SectionReviews />
      <SectionFAQ />
      <SectionApp />
    </div>
  );
};

export default Home;
