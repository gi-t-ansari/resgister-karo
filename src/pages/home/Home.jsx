import React from "react";
import { HeroSection, OurServicesSection, WhyChoseUs } from "../../components";

const Home = () => {
  return (
    <div className="w-full h-full">
      <HeroSection />
      <WhyChoseUs />
      <OurServicesSection />
    </div>
  );
};

export default Home;
