import { HomeOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Accordion } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const OurWorks = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="breadCrumb py-5">
          <ul className="flex items-center gap-2">
            <li>
              <Link to="/" className="opacity-70">
                <HomeOutlined />
              </Link>
            </li>
            <li>
              <span className="opacity-70">
                <KeyboardArrowRightOutlined />
              </span>
            </li>
            <li>
              <p className="opacity-70 text-sm">Our Work</p>
            </li>
          </ul>
        </div>

        <div className="mt-4 sm:mt-8 pb-20">
          <div className="">
            <div className="lg:w-3/5">
              <div className="sticky top-20">
                <h4 className="text-3xl sm:text-4xl font-bold text-gray-600 relative after:absolute after:h-0.5 after:w-3/5 w-fit after:bg-gratext-gray-600 after:bottom-0 after:left-0 after:rounded-lg pb-2">
                  Our Work
                </h4>
                <div className="mt-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
