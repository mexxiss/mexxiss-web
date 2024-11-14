import { HomeOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
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
            <p className="opacity-70 text-sm">Terms of Use</p>
          </li>
        </ul>
      </div>
      <div className="mt-4 sm:mt-8 pb-20">
        <div>
          <div className="max-w-[1080px] mx-auto">
            <div>
              <h4 className="text-4xl md:text-5xl font-bold text-gray-600">
                Terms & Conditions
              </h4>
            </div>
            <div className="mt-10">
              <h6 className="text-xl font-semibold text-black-900 opacity-80">
                Copyright
              </h6>
              <p className="mt-4 opacity-80 leading-6">
                Aufhauser hereby authorizes you to view, print, copy and
                distribute information published by Aufhauser on this or any
                other publicly accessed site maintained by Aufhauser's web
                server linked to this Legal Notice, provided that (a) the
                information may be used internally (by you or any third party to
                whom you distribute it) only for informational, non-commercial
                purposes; (b) no fee may be charged for distribution of any
                information to any third party; and (c) any and all copyright or
                other proprietary notices that appear herein, together with this
                Legal Notice, must appear on all copies that you make or
                distribute.
              </p>
            </div>
            <div className="mt-10">
              <h6 className="text-xl font-semibold text-black-900 opacity-80">
                Disclaimers
              </h6>
              <p className="mt-4 opacity-80 leading-6">
                The sole purpose of this web site is to provide information
                about Aufhauser Corporation, its products and its services. The
                information contained herein has been compiled in good faith by
                the Company; however, no representation is made as to the
                completeness or accuracy of the information presented.
                Information may be incomplete, contain errors or be outdated.
                Aufhauser Corporation reserves the right to make any changes,
                additions or deletions to this site at any time.
              </p>
              <p className="mt-4 opacity-80 leading-6">
                Any suggestion of product applications or results is given
                without representation or warranty, either expressed or implied.
                Without exception or limitation, there are no warranties of
                merchantability or of fitness for particular purpose or
                application. The user must fully evaluate every process and
                application in all aspects, including suitability, compliance
                with applicable law and non-infringement of the rights of
                others. Aufhauser Corporation shall have no liability in respect
                thereof.
              </p>
              <p className="mt-4 opacity-80 leading-6">
                Technical information and data regarding the composition,
                properties or use of the products described herein is believed
                to be reliable. However, no representation or warranty is made
                with respect thereto except as made by Aufhauser Corporation at
                the time of sale. Aufhauser Corporation cannot assume
                responsibility for any patent liability which may arise from the
                use of any product in a process, manner or formula not designed
                by Aufhauser Corporation.
              </p>
            </div>
            <div className="mt-10">
              <h6 className="text-xl font-semibold text-black-900 opacity-80">
                Feedback
              </h6>
              <p className="mt-4 opacity-80 leading-6">
                Unless expressly provided otherwise by Aufhauser, all comments,
                feedback to Aufhauser through or in association with the
                Aufhauser web site shall be considered non-confidential and
                Aufhauser's property. As a matter of policy Aufhauser does not
                sell or distribute client information to outside parties. Any
                information submitted will be used only to comply with your
                request.
              </p>
            </div>
            <div className="mt-10">
              <h6 className="text-xl font-semibold text-black-900 opacity-80">
                Links
              </h6>
              <p className="mt-4 opacity-80 leading-6">
                This site may contain links to other websites, some of which are
                operated by Aufhauser or its affiliates and others of which are
                operated by third parties. These links are provided as a
                convenience to you and as an additional avenue of access to the
                information contained therein. We have not necessarily reviewed
                all the information on those other sites and are not responsible
                for the content of those or any other sites or any products or
                services that may be offered through those or any other sites.
                Inclusion of links to other sites should not be viewed as an
                endorsement of the content of linked sites. Different terms and
                conditions may apply to your use of any linked sites. Aufhauser
                is not responsible for any losses, damages or other liabilities
                incurred as a result of your use of any linked sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
