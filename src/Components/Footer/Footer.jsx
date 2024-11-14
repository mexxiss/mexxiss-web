import React from "react";
import logo from "../../assets/images/logo.png";
import phone from "../../assets/icons/phone.png";
import email from "../../assets/icons/email.png";
import skype from "../../assets/icons/skype.png";
import Indiaflag from "../../assets/icons/Indiaflag.png";
import UAE from "../../assets/icons/UAE.png";
import { Link } from "react-router-dom";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Twitter,
  X,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <footer className="pt-12 sm:pt-16 pb-10 bg-[#212121] ">
        <div className="container mx-auto">
          <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-8 pb-8 border-b border-[#3e3e3e]">
            <div className="xs:order-1 xs:col-span-2">
              <div className="mb-4">
                <Link>
                  <img src={logo} alt="" className="h-[35px]" />
                </Link>
              </div>
              <h4 className="text-text2 font-medium text-lg">
                MEXXISS TECHNOLOGIES PRIVATE LIMITED
              </h4>
              <div className="text-white mt-4 text-sm opacity-80 grid xs:grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-2">
                    <img src={Indiaflag} className="w-6" /> +91-8779043458
                  </p>
                  <p className="flex items-center gap-2">
                    <img src={UAE} className="w-6" /> +971-553686126
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-2">
                    <Email className="!text-lg" /> sales@mexxiss.com
                  </p>
                  <p className="flex items-center gap-2">
                    <img src={skype} className="w-4 invert" />
                    Mexxstate
                  </p>
                </div>
              </div>
            </div>
            <div className="xs:order-3 2xl:order-2">
              <h6 className="text-xl sm:text-2xl font-medium text-text2">
                Company
              </h6>
              <ul className="mt-4 md:mt-6 text-[#808080] font-medium flex flex-col gap-3">
                <li>
                  <Link to="/" className="inline-block">Home</Link>
                </li>
                <li>
                  <Link to="about-us" className="inline-block">About Us</Link>
                </li>
                <li>
                  <Link to="/our-works" className="inline-block">Our Works</Link>
                </li>
                <li>
                  <Link className="inline-block">Blogs</Link>
                </li>
                <li>
                  <Link to="/terms-of-use" className="inline-block">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy" className="inline-block">Privacy Policy</Link>
                </li>
                <li>
                  <Link className="inline-block">Careers</Link>
                </li>
              </ul>
            </div>
            <div className="xs:order-2 2xl:order-3 xs:col-span-2 ">
              <h6 className="text-xl sm:text-2xl font-medium text-text2">
                Service and Support
              </h6>
              <ul className="mt-4 md:mt-6 text-[#808080] font-medium grid xs:grid-cols-2 gap-3">
                <li>
                  <Link to="/contact-us" className="inline-block">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="faq" className="inline-block">FAQs</Link>
                </li>
                <li>
                  <Link className="inline-block">Digital Transformation</Link>
                </li>
                <li>
                  <Link className="inline-block">Data Services</Link>
                </li>
                <li>
                  <Link className="inline-block">Artificial Intelligence</Link>
                </li>
                <li>
                  <Link className="inline-block">Application Development</Link>
                </li>
                <li>
                  <Link className="inline-block">Sustainability</Link>
                </li>
                <li>
                  <Link className="inline-block">Cloud</Link>
                </li>
                <li>
                  <Link className="inline-block">Devops</Link>
                </li>
                <li>
                  <Link className="inline-block">
                    Technology Consulting & Innovation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="xs:order-4">
              <h6 className="text-xl sm:text-2xl font-medium text-text2">
                Follow Us
              </h6>
              <ul className="mt-6 text-text2 font-medium flex gap-3">
                <li>
                  <Link className="inline-block">
                    <Instagram />
                  </Link>
                </li>
                <li>
                  <Link className="inline-block">
                    <LinkedIn />
                  </Link>
                </li>
                <li>
                  <Link className="inline-block">
                    <X />
                  </Link>
                </li>
                <li>
                  <Link className="inline-block">
                    <Facebook />
                  </Link>
                </li>
                <li>
                  <Link className="inline-block">
                    <YouTube className="!text-3xl" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8">
            <p className="text-text2 text-center">
              Copyright © 2024 Mexxiss Technologies Pvt. Ltd. All Right Reserved.{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
