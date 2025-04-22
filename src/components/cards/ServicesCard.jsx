import React from "react";

const ServicesCard = ({ name, logo }) => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <img className="h-20 w-20 shadow-xl rounded-lg" src={logo} alt={name} />
      <p className="text-lg font-normal text-wrap text-center">{name}</p>
    </div>
  );
};

export default ServicesCard;
