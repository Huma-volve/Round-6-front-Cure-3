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
    <>
      <SectionHero />
      <SectionHow />
      <SectionMap />
      <SectionTopDoctors />
      <SectionReviews />
      <SectionFAQ />
      <SectionApp />
    </>
  );
};

export default Home;
