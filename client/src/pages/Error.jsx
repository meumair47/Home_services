import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col mb-3">
      <div className="">
        <h1 className="text-2xl md:text-7xl font-bold text-pink-600">
          OOPS! Page Not Found
        </h1>
      </div>
      <div className="flex flex-col my-4 py-4">
        <NavLink
          to="/"
          className="text-xl bg-orange-300 p-2 text-white rounded-md"
        >
          Return to Home
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
