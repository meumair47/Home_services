import React from "react";

const ServicesCard = (props) => {
  return (
    <div className="flex flex-col items-center bg-white hover:bg-black hover:text-white transition-all hover:-translate-y-2 w-full lg:w-1/4 py-5 gap-4 cursor-pointer rounded-md">
      <div>
        <span>{props.icon}</span>
      </div>
      <h3 className="text-lg lg:text-xl font-semibold">{props.title}</h3>
      <h3 className="text-lg lg:text-xl font-semibold">{props.para}</h3>
    </div>
  );
};

export default ServicesCard;
