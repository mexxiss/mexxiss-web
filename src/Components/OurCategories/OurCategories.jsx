import React from "react";
import img18 from "../../assets/images/img18.png";
import cate2 from "../../assets/images/cate2.png";
import img10 from "../../assets/images/img10.png";
import cate4 from "../../assets/images/cate4.png";
import cate5 from "../../assets/images/cate5.png";
import cate6 from "../../assets/images/cate6.png";
import img23 from "../../assets/images/img23.png";
import cate8 from "../../assets/images/cate8.png";
import cate9 from "../../assets/images/cate9.png";
import { EastOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const OurCategories = () => {
  return (
    <div className="pt-16 md:pt-20">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          <div>
            <h6 className="text-3xl text-primary mb-4">Our Categories</h6>
            <p className="text-text1">
              We take pride in offering a comprehensive range of services
              tailored to meet the diverse needs of our clients. Our commitment
              to excellence extends across every aspect of our operations,
              ensuring that you receive top-notch solutions for your industrial
              requirements.
            </p>
          </div>
          <div className="card bg-[#52525280] relative overflow-hidden group">
            <div className="p-2">
              <img src={img18} className="h-[220px] w-full object-cover mx-auto opacity-90" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 translate-y-[calc(100%_-_50px)] w-full group duration-300 group-hover:translate-y-0">
              <Link to="/product/detail3" className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-sm text-heading font-medium">
                Ecomelt® Brand Induction Melting & Heating Furnace Units From
                5.0 Kg to 30,000 Kg Capacity.
              </h6>
              <p className="text-sm text-heading font-medium mt-2 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative overflow-hidden group">
            <div className="p-2">
              <img src={cate2} className="h-[220px] w-full object-cover mx-auto opacity-90" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 translate-y-[calc(100%_-_50px)] w-full group duration-300 group-hover:translate-y-0">
              <Link to="/product/detail3" className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-sm text-heading font-medium">
                CentriCast® Brand CCM Billets Caster Lines for the Mild, SS and
                Alloys Steels Square & Round Billets, AOD (Argon Oxygen
                Decarburizer Plant) LRF (Ladle Refining Furnace)
              </h6>
              <p className="text-sm text-heading font-medium mt-2 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative overflow-hidden group">
            <div className="p-2">
              <img src={img10} className="h-[220px] w-full object-cover mx-auto opacity-90" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 translate-y-[calc(100%_-_50px)] w-full group duration-300 group-hover:translate-y-0">
              <Link to="/product/detail3" className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-sm text-heading font-medium">
                IndoMartin® Brand Class IV & Class II Heavy Duty EOT Cranes &
                Hoists, Trolley, Winches, Circular Scrap Lifting Magnet Units,
                Refractory Lining Tool, Material Handling Plant & Machinery.
              </h6>
              <p className="text-sm text-heading font-medium mt-2 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative overflow-hidden group">
            <div className="p-2">
              <img src={cate4} className="h-[220px] w-full object-cover mx-auto opacity-90" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 translate-y-[calc(100%_-_50px)] w-full group duration-300 group-hover:translate-y-0">
              <Link className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-sm text-heading font-medium">
                IT & Software, Domains & Hosting, Dedicated Servers, Email, SSL,
                App Design and Development Services.
              </h6>
              <p className="text-sm text-heading font-medium mt-2 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative overflow-hidden group">
            <div className="p-2">
              <img src={cate5} className="h-[220px] w-full object-cover mx-auto opacity-90" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 translate-y-[calc(100%_-_50px)] w-full group duration-300 group-hover:translate-y-0">
              <Link className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-sm text-heading font-medium">
                Integrated Steel Production Plant Supply, Installation and
                Commissioning On Turnkey Basis Globally.
              </h6>
              <p className="text-sm text-heading font-medium mt-2 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative overflow-hidden group">
            <div className="p-2">
              <img src={cate6} className="h-[220px] w-full object-cover mx-auto opacity-90" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 translate-y-[calc(100%_-_50px)] w-full group duration-300 group-hover:translate-y-0">
              <Link className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-sm text-heading font-medium">
                CentriCast® Brand Centrifugal Casting Machines for the
                Production of Tailor made Tubes, Pipes in All Metals.
              </h6>
              <p className="text-sm text-heading font-medium mt-2 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative overflow-hidden group">
            <div className="p-2">
              <img src={img23} className="h-[220px] w-full object-cover mx-auto opacity-90" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 translate-y-[calc(100%_-_50px)] w-full group duration-300 group-hover:translate-y-0">
              <Link className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-sm text-heading font-medium">
                CentriCast® Brand Horizontal Caster Lines for the production of
                Copper, Brass and Alloys Rounds, Flats, Bars, Square, Hexagon
                Shapes.
              </h6>
              <p className="text-sm text-heading font-medium mt-2 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative overflow-hidden group">
            <div className="p-2">
              <img src={cate8} className="h-[220px] w-full object-cover mx-auto opacity-90" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 translate-y-[calc(100%_-_50px)] w-full group duration-300 group-hover:translate-y-0">
              <Link className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-sm text-heading font-medium">
                CentriCast® Brand Vertical Caster Lines for All Metals
                Customized Castings like Balls, Bushes, Tubular Hollow Blanks on
                Turnkey Basis.
              </h6>
              <p className="text-sm text-heading font-medium mt-2 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
          <div className="card bg-[#52525280] relative overflow-hidden group">
            <div className="p-2">
              <img src={cate9} className="h-[220px] w-full object-cover mx-auto opacity-90" />
            </div>
            <div className="px-4 py-2 bg-[#212121] absolute bottom-0 translate-y-[calc(100%_-_50px)] w-full group duration-300 group-hover:translate-y-0">
              <Link className="absolute w-full h-full left-0 top-0"></Link>
              <h6 className="text-sm text-heading font-medium">
                Complete TMT Rebars Rolling Mills, Wierod Mills, Strip Mills on
                Turnkey Basis Globally.
              </h6>
              <p className="text-sm text-heading font-medium mt-2 flex items-center gap-2">
                Learn More{" "}
                <span className="group-hover:translate-x-2 duration-300">
                  <EastOutlined className="!text-base" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCategories;
