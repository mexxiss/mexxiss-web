import React from "react";
import img from "../../assets/images/whyus-home.png";
import icon10 from "../../assets/icons/icon10.png";
import icon11 from "../../assets/icons/icon11.png";
import icon12 from "../../assets/icons/icon12.png";
import icon13 from "../../assets/icons/icon13.png";

const WhyChoose = () => {
  return (
    <div className=" relative py-16 bg-black xl:bg-[#6e777c] mt-16 md:mt-20 lg:mt-28">
      <img
        src={img}
        className="absolute h-full w-full xl:w-[35%] right-0 top-0 object-cover opacity-25 xl:opacity-100"
      />
      <div className="container mx-auto relative z-10">
        <div className="flex">
          <div className="xl:w-3/5">
            <h4 className="text-3xl text-heading font-semibold">
              Why Choose Us?
            </h4>
            <div className="grid sm:grid-cols-2 mt-10  gap-x-5 gap-y-10 md:gap-10">
              <div>
                <div className="mb-3">
                  <img src={icon10} className="w-[30px]" />
                </div>
                <h6 className="text-xl text-heading font-medium mb-3">
                  Industry Expertise
                </h6>
                <p className="text-text2 text-sm">
                  Mexxiss Technologies Group with more than 25 years of
                  experience, crafting Excellence in Induction Melting, Heating
                  and Casting Plant & Machinery, our seasoned experts bring
                  unparalleled knowledge and insights to every project we
                  execute on turnkey basis globally.
                </p>
              </div>
              <div>
                <div className="mb-3">
                  <img src={icon11} className="w-[30px]" />
                </div>
                <h6 className="text-xl text-heading font-medium mb-3">
                  Quality Assurance
                </h6>
                <p className="text-text2 text-sm">
                  At MEXXISS TECHNOLOGIES, quality is non-negotiable. Our
                  rigorous quality control measures guarantee that every steel
                  product and machinery component meets the highest industry
                  standards. We take pride in delivering excellence.
                </p>
              </div>
              <div>
                <div className="mb-3">
                  <img src={icon12} className="w-[30px]" />
                </div>
                <h6 className="text-xl text-heading font-medium mb-3">
                  Timely Delivery
                </h6>
                <p className="text-text2 text-sm">
                  We understand the importance of timelines in the industrial
                  sector. Our streamlined processes and efficient workflows
                  enable us to deliver projects on time, without compromising on
                  quality.
                </p>
              </div>
              <div>
                <div className="mb-3">
                  <img src={icon13} className="w-[30px]" />
                </div>
                <h6 className="text-xl text-heading font-medium mb-3">
                  Track Record
                </h6>
                <p className="text-text2 text-sm">
                  Overall Expertise in the Execution of the Integrated Steel
                  Production Plants for the Global Clients across the diverse
                  industries, ensuring quality, efficiency and tailored
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
