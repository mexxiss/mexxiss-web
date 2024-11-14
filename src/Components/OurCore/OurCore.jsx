import React from "react";
import img from "../../assets/images/OurCore.png";
import user from "../../assets/images/user.png";
import icon14 from "../../assets/icons/icon14.png";
import icon15 from "../../assets/icons/icon15.png";
import icon16 from "../../assets/icons/icon16.png";

const OurCore = () => {
  return (
    <div className="pt-16 md:pt-20 lg:pt-24 pb-24 md:pb-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-primary text-3xl font-semibold mb-6">
              Our Core Values
            </h4>
            <p className="text-text1 ">
              Our mission is simple: to provide our clients with the highest
              quality steel products and machinery, backed by unparalleled
              service.
            </p>
            <div className="flex flex-col gap-6 mt-8">
              <div className="px-6 py-5 rounded hover:shadow-[5px_4px_50px_rgba(0,0,0,0.1)] duration-300">
                <div className="flex items-center gap-8">
                  <img src={icon14} className="h-[50px]" />
                  <div>
                    <h6 className="text-lg text-text1 mb-2">Quality</h6>
                    <p className="text-text1">
                      We are committed to delivering products of the utmost
                      quality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-5 rounded hover:shadow-[5px_4px_50px_rgba(0,0,0,0.1)] duration-300">
                <div className="flex items-center gap-8">
                  <img src={icon15} className="h-[50px]" />
                  <div>
                    <h6 className="text-lg text-text1 mb-2">Innovation</h6>
                    <p className="text-text1">
                      We invest in the latest technologies and methodologies to
                      stay ahead of the curve, offering you solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-5 rounded hover:shadow-[5px_4px_50px_rgba(0,0,0,0.1)] duration-300">
                <div className="flex items-center gap-8">
                  <img src={icon16} className="h-[50px]" />
                  <div>
                    <h6 className="text-lg text-text1 mb-2">Customers Focus</h6>
                    <p className="text-text1">
                      Our customer-centric approach means that your satisfaction
                      is our top priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={img} alt="" className="lg:ml-auto" />
            <div className="px-3 sm:px-6 py-2 sm:py-4 absolute -bottom-10 left-12 2xs:left-20 sm:left-[35%] flex items-center gap-6 shadow-[5px_4px_50px_rgba(0,0,0,0.1)] z-10 bg-white rounded">
              <img src={user} className="w-14" />
              <div>
                <h6 className="text-primary text-2xl sm:text-3xl font-semibold mb-2">
                  3800+
                </h6>
                <p className="text-text1 font-medium text-sm sm:text-base">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCore;
