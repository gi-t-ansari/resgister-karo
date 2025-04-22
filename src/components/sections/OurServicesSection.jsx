import React from "react";
import { OUR_SERVICES_DATA } from "../../config";
import { ServicesCard } from "../cards";
import { FiArrowRight } from "react-icons/fi";

const OurServicesSection = () => {
  return (
    <section className="xl:px-28 py-12 w-full h-fit">
      <header className="relative w-full py-14">
        <h2 className="text-3xl z-20 w-full absolute top-1/2 -translate-y-1/2 font-extrabold uppercase text-[#1E446C] text-center">
          Our Services
        </h2>
        <div className="h-8 w-8 bg-[#FFE3BE] rounded-full absolute left-[40.5%] top-1/2 -translate-y-1/2 z-0"></div>
      </header>

      <div className="grid grid-rows-2 grid-cols-4 gap-y-8 my-4">
        {OUR_SERVICES_DATA.map((ele, ind) => (
          <ServicesCard
            key={`${ele.name}-${ind}`}
            name={ele.name}
            logo={ele.logo}
          />
        ))}
      </div>

      <div className="w-full h-[1px] bg-[#C7C8C9] my-10"></div>
      <div className="flex justify-between items-end">
        <p className="text-lg">
          Our Client Services Team is always happy to talk to you about what is{" "}
          <br />
          best for your needs. Contact our team to find out if we are the right{" "}
          <br />
          fit for you.
        </p>
        <div className="text-[#FFA229] hover:text-[#FFA22990] w-fit flex items-center gap-x-2 text-lg cursor-pointer">
          <span>Explore our services</span>
          <FiArrowRight />
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
