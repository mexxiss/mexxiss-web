import React from "react";
import { Link } from "react-router-dom";

const HomeSec1 = () => {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 max-w-[1080px] mx-auto gap-5 md:gap-8 lg:gap-12">
          <div className="card relative px-4 md:px-6 py-8 flex items-center justify-center flex-col shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] bg-white rounded-xl text-center">
            <h4 className="text-2xl lg:text-3xl text-primary font-semibold">
              Products You May Like
            </h4>
            <Link to="/products" className="inline-block mt-5 border-b-2 border-primary text-primary text-lg font-medium">
              View All
            </Link>
          </div>
          <div className="card relative px-4 md:px-6 py-8 flex items-center justify-center flex-col shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] bg-white rounded-xl text-center">
            <h4 className="text-2xl lg:text-3xl text-primary font-semibold">
              Query Based Products
            </h4>
            <Link to="/products" className="inline-block mt-5 border-b-2 border-primary text-primary text-lg font-medium">
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSec1;
