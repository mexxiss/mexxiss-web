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
                At Mexxiss Technologies, we are strongly committed to protecting
                your privacy and providing a safe & high-quality online
                experience for all of our visitors. We understand that you care
                about how the information you provide to us is used and shared.
                We have developed a Privacy Policy to inform you of our policies
                regarding the collection, use, and disclosure of information we
                receive from users of our website. Mexxiss Technologies operates
                the Website.
              </p>
              <p className="mt-4 opacity-80 leading-6">
                Our Privacy Policy, along with our Terms & Conditions, governs
                your use of this site. By using <Link to="/" className="underline">https://mexxiss.com</Link> and any of
                our affiliated sites, or by accepting the Terms of Use (via
                opt-in, checkbox, pop-up, or clicking an email link confirming
                the same), you agree to be bound by our Terms & Conditions and
                our Privacy Policy.
              </p>
              <p className="mt-4 opacity-80 leading-6">
                If you have provided personal, billing, or other voluntarily
                provided information, you may access, review, and make changes
                to it by emailing us at <span className="font-medium">support@mexxiss.com.</span> To manage your
                receipt of marketing and non-transactional communications, you
                may unsubscribe by clicking the "unsubscribe" link located at
                the bottom of any marketing email. Emails related to the
                purchase or delivery of orders are provided automatically –
                customers are not able to opt out of transactional emails. We
                will try to accommodate any requests related to the management
                of personal information in a timely manner. However, it is not
                always possible to completely remove or modify information in
                our databases (for example, if we have a legal obligation to
                keep it for certain timeframes, for example). If you have any
                questions, simply reply to this email or visit our website to
                view our official policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
