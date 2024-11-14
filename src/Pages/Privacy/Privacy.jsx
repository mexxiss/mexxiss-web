import { HomeOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
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
            <p className="opacity-70 text-sm">Privacy</p>
          </li>
        </ul>
      </div>
      <div className="mt-4 sm:mt-8 pb-20">
        <div>
          <div className="max-w-[1080px] mx-auto">
            <div>
              <h4 className="text-4xl md:text-5xl font-bold text-gray-600">
                Privacy Policy
              </h4>
            </div>
            <div className="mt-10">
              <h6 className="text-xl md:text-2xl font-semibold text-black-900 opacity-80">
                February 2024
              </h6>
              <p className="mt-4 opacity-80 leading-6">
                compliance with EU General Data Protection Regulation (GDPR,
                679/2016/UE) and Spanish Personal Data Protection and Digital
                Rights Guarantees Act (LO 3/2018), we provide you with the
                following information about the processing of your personal data
                on our website(s). This privacy policy applies to the following
                websites (including any subdomain or section) property and
                responsibility of FREEPIK COMPANY, S.L.U. (hereinafter,
                "Website" as corresponds):
              </p>
              <p className="mt-4 opacity-80 leading-6">
                In this legal document, the legally obligatory information on
                the processing carried out on your personal data in the context
                of our Website is provided.
              </p>
              <p className="mt-4 opacity-80 leading-6">
                The present Privacy Policy regulates the processing of your
                personal data performed by Freepik Company, S.L.U. (hereinafter,
                "Freepik Company"), collected through the use of the services
                offered on the Website (hereinafter, "Services").
              </p>
              <p className="mt-4 opacity-80 leading-6">
                The latest update of this Privacy Policy is indicated at the top
                of this text and it will become effective as of the date
                indicated in each version. Freepik Company, thus, recommends
                reviewing this Privacy Policy from time to time.
              </p>
              <p className="mt-4 opacity-80 leading-6"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
