import React from "react";
import img1 from "../../assets/images/about.png";
import Picture1 from "../../assets/images/Picture1.jpg";
import Picture2 from "../../assets/images/Picture2.jpg";
import Picture3 from "../../assets/images/Picture3.jpg";
import Picture4 from "../../assets/images/Picture4.jpg";
import Picture5 from "../../assets/images/Picture5.jpg";
import Picture6 from "../../assets/images/Picture6.jpg";
import Picture7 from "../../assets/images/Picture7.jpg";
import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import locationBg from "../../assets/Images/locationBg.png";

const AboutUs = () => {
  return (
    <div className="py-14">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-y-8 items-center">
          <div>
            <p className="text-xl uppercase tracking-widest font-medium text-gray-600">
              About Us
            </p>
            <p className="text-2xl xs:text-3xl sm:text-4xl 3xl:text-[40px] 4xl:text-5xl sm:leading-[52px] 4xl:leading-[58px] font-semibold mt-2 mb-4 sm:mb-6">
              Helping businesses deliver exceptional buyer experiences.
            </p>
            <p className="text-gray-600">
              Welcome to STEELVISTA, where innovation meets tradition in the
              world of steel manufacturing and machinery production. Established
              25 years ago, we have been at the forefront of delivering
              exceptional solutions that redefine industry standards.
            </p>
            <p className="text-gray-600 mt-3">
              Our journey began with a vision - a vision to revolutionize the
              steel and machinery sector by blending cutting-edge technology
              with time-honored craftsmanship. Over the past 25 years, we've
              evolved, adapted, and grown, becoming a trusted name in the
              industry.
            </p>
          </div>
          <div>
            <img
              src={img1}
              className="max-w-[500px] w-full h-auto mx-auto lg:ml-auto"
            />
          </div>
        </div>
      </div>

      {/* our Range */}
      <div className="py-14 bg-gray-100 mt-20">
        <div className="container mx-auto">
          <div className="text-center">
            <h4 className="text-xl uppercase tracking-widest font-bold text-gray-700">
              Our Range
            </h4>
            <p className="text-gray-600 mt-3">
              Engineering innovations for the global metal melting industry with
              state-of-the-art manufacturing facilities
            </p>
          </div>
          <div className="mt-10 md:mt-14">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 text-center">
              <div className="odd:bg-gray-800 border-y border-gray-800 even:border-gray-400 px-3 lg:px-6 py-6 text-white even:text-gray-700 flex flex-col items-center justify-center">
                <p>
                  Ecomelt® brand induction melting and heating furnace units
                  with capacities ranging from 5.0kg to 30,000 kg
                </p>
              </div>
              <div className="odd:bg-gray-800 border-y border-gray-800 even:border-gray-400 px-3 lg:px-6 py-6 text-white even:text-gray-700 flex flex-col items-center justify-center">
                <p>
                  CentriCast® brand CCM billets caster lines for mild steel,
                  stainless steel, and alloy steel square and round billets, as
                  well as AOD and LRF systems
                </p>
              </div>
              <div className="odd:bg-gray-800 border-y border-gray-800 even:border-gray-400 px-3 lg:px-6 py-6 text-white even:text-gray-700 flex flex-col items-center justify-center">
                <p>
                  IndoMartin® brand Class IV and Class II heavy-duty EOT cranes
                  and hoists, trolleys, winches, circular scrap lifting magnets,
                  refractory lining tools, and material handling equipment
                </p>
              </div>
              <div className="odd:bg-gray-800 border-y border-gray-800 even:border-gray-400 px-3 lg:px-6 py-6 text-white even:text-gray-700 flex flex-col items-center justify-center">
                <p>
                  IT and software services, including domains and hosting,
                  dedicated servers, email, SSL, and app design and development
                </p>
              </div>
              <div className="odd:bg-gray-800 border-y border-gray-800 even:border-gray-400 px-3 lg:px-6 py-6 text-white even:text-gray-700 flex flex-col items-center justify-center">
                <p>
                  Integrated steel production plant supply, Installation, and
                  commissioning on a turnkey basis globally
                </p>
              </div>
              <div className="odd:bg-gray-800 border-y border-gray-800 even:border-gray-400 px-3 lg:px-6 py-6 text-white even:text-gray-700 flex flex-col items-center justify-center">
                <p>
                  CentriCast® brand centrifugal casting machines for producing
                  tailor-made tubes. and pipes in all metals
                </p>
              </div>
              <div className="odd:bg-gray-800 border-y border-gray-800 even:border-gray-400 px-3 lg:px-6 py-6 text-white even:text-gray-700 flex flex-col items-center justify-center">
                <p>
                  CentriCast® brand horizontal caster lines for producing
                  copper, brass, and alloy rounds, flats, bars, squares, and
                  hexagon shapes
                </p>
              </div>
              <div className="odd:bg-gray-800 border-y border-gray-800 even:border-gray-400 px-3 lg:px-6 py-6 text-white even:text-gray-700 flex flex-col items-center justify-center">
                <p>
                  CentriCast® brand vertical caster lines for customized
                  castings in all metals, including balls, bushes, and tubular
                  hollow blanks, on a turnkey basis
                </p>
              </div>
              <div className="odd:bg-gray-800 border-y border-gray-800 even:border-gray-400 px-3 lg:px-6 py-6 text-white even:text-gray-700 flex flex-col items-center justify-center">
                <p>
                  Complete TMT rebar rolling mills, wire rod mills, and strip
                  mills on a turnkey basis globally
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our Team */}
      <div className="py-14 md:py-20">
        <div className="container mx-auto">
          <div className="text-center max-w-[800px] mx-auto">
            <h4 className="text-xl uppercase tracking-widest font-bold text-gray-700">
              Our Team
            </h4>
            <p className="text-gray-600 mt-3">
              We have a proven track record in manufacturing, scaling
              businesses, and fostering institutional growth, backed by a team
              of over 50 professionals
            </p>
          </div>
          <div className="mt-10 md:mt-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1140px] mx-auto">
              <div className="">
                <div className="card text-center">
                  <div className="w-36 h-36 mx-auto rounded-full p-3 img_thumb relative inline-block">
                    <img
                      src={Picture4}
                      className="w-full h-full object-cover object-top rounded-full bg-red-500 inline-block"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-gray-600 text-lg font-medium tracking-wider">
                      Surinder Paul Saini
                    </p>
                    <p className="text-sm text-primary font-medium tracking-wider">
                      Managing Director
                    </p>
                    <div className="mt-4 space-y-3">
                      <p className="text-gray-500">
                        Electrical engineer with expertise in power electronics
                        and high-frequency applications.
                      </p>
                      <p className="text-gray-500">
                        Over 30 years of experience in steel processing and
                        production plants, as. ‘well as foundry Meltshop
                        machinery manufacturing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="card text-center">
                  <div className="w-36 h-36 mx-auto rounded-full p-3 img_thumb relative inline-block">
                    <img
                      src={Picture7}
                      className="w-full h-full object-cover object-top rounded-full bg-red-500 inline-block"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-gray-600 text-lg font-medium tracking-wider">
                      Sushma Saini
                    </p>
                    <p className="text-sm text-primary font-medium tracking-wider">
                      Director
                    </p>
                    <div className="mt-4 space-y-3">
                      <p className="text-gray-500">
                        Oversee daily operations and management at the plant,
                        ensuring efficiency, coordinating staff, and maintaining
                        production schedules while fostering a safe work
                        environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="card text-center">
                  <div className="w-36 h-36 mx-auto rounded-full p-3 img_thumb relative inline-block">
                    <img
                      src={Picture5}
                      className="w-full h-full  object-top rounded-full bg-red-500 inline-block"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-gray-600 text-lg font-medium tracking-wider">
                      Joy Saini
                    </p>
                    <p className="text-sm text-primary font-medium tracking-wider">
                      Executive Director
                    </p>
                    <div className="mt-4 space-y-3">
                      <p className="text-gray-500">
                        BCA degree holder with 4 years of experience in company
                        operations and sales.
                      </p>
                      <p className="text-gray-500">
                        Skilled in improving efficiency, driving sales growth,
                        and analyzing market trends. Proven ability to build
                        client relationships and collaborate with teams to
                        achieve business goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Team */}
      <div className="py-14 md:py-20 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center max-w-[800px] mx-auto">
            <h4 className="text-xl uppercase tracking-widest font-bold text-gray-700">
              Technical Team
            </h4>
            <p className="text-gray-600 mt-3">
              We have a proven track record in manufacturing, scaling
              businesses, and fostering institutional growth, backed by a team
              of over 50 professionals
            </p>
          </div>
          <div className="mt-10 md:mt-14">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  mx-auto">
              <div className="">
                <div className="card text-center">
                  <div className="w-36 h-36 mx-auto rounded-full p-3 img_thumb relative inline-block">
                    <img
                      src={Picture6}
                      className="w-full h-full rounded-full bg-red-500 inline-block"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-sm text-primary tracking-wider">
                      Technical Foreman
                    </p>
                    <p className="text-gray-600 text-lg font-medium tracking-wider">
                      Ramesh Bhai Panchal
                    </p>
                    <div className="mt-3 space-y-3">
                      <p className="text-gray-500">
                        22 years of experience in plant assembly, fabrication,
                        fitting, and operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="card text-center">
                  <div className="w-36 h-36 mx-auto rounded-full p-3 img_thumb relative inline-block">
                    <img
                      src={Picture1}
                      className="w-full h-full  object-top rounded-full bg-red-500 inline-block"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-sm text-primary tracking-wider">
                      Technical Head
                    </p>
                    <p className="text-gray-600 text-lg font-medium tracking-wider">
                      Raghavendra Talawar
                    </p>
                    <div className="mt-3 space-y-3">
                      <p className="text-gray-500">
                        Bachelor's degree in Metallurgical Engineering with 22
                        years of experience in the design, development,
                        installation, and operation of Integrated steel plants
                        worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="card text-center">
                  <div className="w-36 h-36 mx-auto rounded-full p-3 img_thumb relative inline-block">
                    <img
                      src={Picture2}
                      className="w-full h-full  object-top rounded-full bg-red-500 inline-block"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-sm text-primary tracking-wider">
                      Erection & Operation Head
                    </p>
                    <p className="text-gray-600 text-lg font-medium tracking-wider">
                      Raza Shamsh
                    </p>
                    <div className="mt-3 space-y-3">
                      <p className="text-gray-500">
                        18 years of experience in the erection and commissioning
                        of steel plants worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="card text-center">
                  <div className="w-36 h-36 mx-auto rounded-full p-3 img_thumb relative inline-block">
                    <img
                      src={Picture3}
                      className="w-full h-full  object-top rounded-full bg-red-500 inline-block"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-sm text-primary tracking-wider">
                      Design & Fabrication Head
                    </p>
                    <p className="text-gray-600 text-lg font-medium tracking-wider">
                      Sharad Korde
                    </p>
                    <div className="mt-3 space-y-3">
                      <p className="text-gray-500">
                        Bachelor's degree in Mechanical Engineering with 23
                        years of experience in steel plant design, fabrication,
                        and implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="py-14 md:py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-10 sm:gap-16 md:gap-28">
            <div>
              <h4 className="text-xl uppercase tracking-widest font-bold text-gray-700">
                Our Location
              </h4>
              <p className="mt-2 opacity-80 leading-8 text-lg">
                <span className="font-bold text-3xl">
                  Mexxiss Technologies Pvt. Ltd.
                </span>{" "}
                <br />
                <span>39 West Mall, Plainview, NY 11803 USA</span>
              </p>
              <ul className="mt-5 flex flex-col gap-3 opacity-80 text-black-900">
                <li className="flex items-center gap-3 text-lg ">
                  <PhoneOutlined /> +91 8779043458
                </li>
                <li className="flex items-center gap-3 text-lg ">
                  <EmailOutlined /> sales@mexxiss.com
                </li>
              </ul>
            </div>
            <div>
              <img src={locationBg} className="max-w-[300px] sm:max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
