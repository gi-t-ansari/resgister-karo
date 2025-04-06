import React from "react";

const HeroSection = () => {
  return (
    <div className="xl:px-28 h-[90%] flex items-center relative">
      <div className="absolute h-28 w-28 -left-8 top-32 rounded-full bg-[#FFE3BE] float-up-down"></div>
      <section>
        <h5 className="text-2xl font-bold">
          We take care of ALL your business compliance needs
        </h5>
        <h1 className="font-bold text-6xl mt-2">
          <span className="text-[#164760]">Register</span>
          <span className="text-[#FFA229]">Karo</span>
        </h1>
        <p className="text-xl my-8">
          An online business compliance platform that helps entrepreneurs and{" "}
          <br />
          other individuals with various, registrations, tax filings, and other{" "}
          legal <br /> matters.
        </p>
        <button className="px-5 py-1 font-normal bg-[#ffa229] text-white text-lg flex items-center gap-x-2 rounded-lg cursor-pointer">
          Get Started
        </button>
      </section>
      <section></section>
    </div>
  );
};

export default HeroSection;
