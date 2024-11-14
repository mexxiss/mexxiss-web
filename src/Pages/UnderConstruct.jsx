import React from "react";
import img from "../assets/images/underConstruct.png";
import img2 from "../assets/images/underConstruct2.png";

const UnderConstruct = () => {
  return (
    <div className="py-0 bg-white">
      {/* <img src={img2} className="h-[600px] mx-auto" /> */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center max-w-[1280px] mx-auto py-10">
          <div className="order-2 md:order-1">
            {/* <p className="text-6xl text-primary font-bold">Oops!</p> */}
            <p className=" text-[26px] lg:text-3xl font-bold  text-primary uppercase">Welcome to Mexxiss Technology</p>
            <p className="text-base lg:text-xl text-text1 font-bold mt-4 lg:mt-8 ">
              {/* <span className="text-primary">Website</span> is Under <br />{" "} */}
              <span className=" uppercase">
                Currently Our Website is Under <br />{" "}
                <span className="italic">Construction</span> and 
                <span className="italic"> Enhancement{" "}</span>
              </span>
            </p>
            <button className="rounded text-base lg:text-xl text-white font-medium mt-8 uppercase bg-red-gradient px-4 py-2">
              Coming Soon
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img src={img} className="max-w-[400px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruct;
