import {
  EmailOutlined,
  HomeOutlined,
  KeyboardArrowRightOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Indiaflag from "../../assets/icons/Indiaflag.png";
import UAE from "../../assets/icons/UAE.png";
import skype from "../../assets/icons/skype.png";

const ContactUs = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("India"); // Default country

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };
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
              <p className="opacity-70 text-sm">Contact Us</p>
            </li>
          </ul>
        </div>
        <div className="mt-8 pb-20">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="lg:max-w-[90%] sticky top-20">
                <h4 className="text-4xl md:text-5xl font-bold text-deep_orange-900 relative after:absolute after:h-0.5 after:w-3/5 w-fit after:bg-deep_orange-900 after:bottom-0 after:left-0 after:rounded-lg pb-2">
                  Contact Us
                </h4>
                <div className="mt-10">
                  <h6 className="text-deep_orange-900 text-xl md:text-2xl font-semibold">
                    How can we help?
                  </h6>
                  <p className="mt-2 text-black-900 opacity-80">
                    Customer experience is a central focus of our sales process.
                    Our sales and sales support team responds to customer
                    requests and inquiries within 24 hours.
                  </p>
                  <hr
                    className="border-0 h-[1px] my-6"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, transparent, rgba(239, 95, 34, 0.712), transparent)",
                    }}
                  />
                  <h6 className=" text-deep_orange-900 text-xl md:text-2xl font-semibold">
                    Our Sales and Customer Service
                  </h6>
                  <div className="mt-5">
                    <ul className="flex flex-col gap-4">
                      <li className="flex items-start gap-5">
                        <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-black-900 opacity-80 mt-1.5"></span>
                        <div>
                          <span className="flex items-center gap-2 font-bold opacity-80">
                            <PhoneOutlined className="!text-xl" /> Sales and
                            Customer Service:
                          </span>
                          <div className="mt-2 text-black-900 opacity-80">
                            <p className="flex items-center gap-2">
                              <img src={Indiaflag} className="w-6" />{" "}
                              +91-8779043458
                            </p>
                            <p className="flex items-center gap-2">
                              <img src={UAE} className="w-6" /> +971-553686126
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start gap-5">
                        <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-black-900 opacity-80 mt-1.5"></span>
                        <div>
                          <span className="flex items-center gap-2 font-bold opacity-80">
                            <EmailOutlined className="!text-xl" /> Email:{" "}
                            <Link
                              to="mailto:sales@mexxiss.com"
                              className="leading-7 text-deep_orange-900 hover:underline font-normal"
                            >
                              sales@mexxiss.com
                            </Link>
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start gap-5">
                        <span className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-black-900 opacity-80 mt-1.5"></span>
                        <div>
                          <span className="flex items-center gap-2 font-bold opacity-80">
                            <img src={skype} className="w-5" alt="" /> Skype:{" "}
                            <span className="leading-7 font-normal">
                              Mexxstate
                            </span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#bd411013] py-6 px-4 lg:px-10">
                <div>
                  <label
                    htmlFor="name"
                    className="text-deep_orange-900 font-semibold text-sm block"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    className="h-[46px] mt-2 w-full"
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="Email"
                    className="text-deep_orange-900 font-semibold text-sm block"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    className="h-[46px] mt-2 w-full"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="Email"
                    className="text-deep_orange-900 font-semibold text-sm block"
                  >
                    Contact Number
                  </label>
                  <div className="flex items-center mt-2">
                    <div className="relative w-20">
                      <button
                        className="flex items-center justify-center gap-3 w-full border-r h-[46px] bg-white"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        <img
                          src={selectedCountry === "India" ? Indiaflag : UAE}
                          className="w-6 inline-block"
                          alt={selectedCountry}
                        />
                        <span>&#9662;</span>
                      </button>
                      {dropdownOpen && (
                        <div className="absolute left-0 top-full mt-1 bg-white shadow-md w-max">
                          <div
                            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect("India")}
                          >
                            <img
                              src={Indiaflag}
                              className="w-6 inline-block"
                              alt="India"
                            />
                            <span className="ml-2">India</span>
                          </div>
                          <div
                            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect("UAE")}
                          >
                            <img
                              src={UAE}
                              className="w-6 inline-block"
                              alt="UAE"
                            />
                            <span className="ml-2">UAE</span>
                          </div>
                        </div>
                      )}{" "}
                    </div>
                    <input
                      type="text"
                      className="w-full border-none h-[46px]"
                      placeholder="Enter Number"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="Subject"
                    className="text-deep_orange-900 font-semibold text-sm block"
                  >
                    Subject*
                  </label>
                  <input
                    type="text"
                    className="h-[46px] mt-2 w-full"
                    placeholder="Enter Subject"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="Subject"
                    className="text-deep_orange-900 font-semibold text-sm block"
                  >
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="20"
                    className="h-[46px] mt-2 w-full block min-h-[150px]"
                  ></textarea>
                </div>
                <div className="mt-5">
                  <button className="bg-red-gradient py-3 w-full text-white font-semibold uppercase tracking-wide">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
