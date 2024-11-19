import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import NavMenu from "./NavMenu";
import phoneIcon from "../../assets/icons/phone.png";
import emailIcon from "../../assets/icons/email.png";
import helpIcon from "../../assets/icons/help.png";
import supportIcon from "../../assets/icons/support.png";
import {
  AccountCircleOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <>
      <div className="bg-[#212121]">
        <div className="container mx-auto">
          <div className="sm:flex items-center justify-between pt-4 pb-3 hidden">
            <div className="text-white text-xs md:text-sm flex gap-4 md:gap-10">
              <div className="flex items-center gap-1.5 md:gap-2.5 ">
                <img src={emailIcon} alt="" className="w-4 sm:w-5" />
                <span className="opacity-80">sales@mexxiss.com</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2.5">
                <img src={phoneIcon} alt="" className="w-4 sm:w-5" />
                <span className="opacity-80">+91 8779043458</span>
              </div>
            </div>
            <div className="text-white text-xs md:text-sm flex gap-4 md:gap-10">
              <div className="flex items-center gap-1.5 md:gap-2.5">
                <img src={supportIcon} alt="" className="w-4 sm:w-5" />
                <span className="opacity-80">Support</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2.5">
                <img src={helpIcon} alt="" className="w-4 sm:w-5" />
                <span className="opacity-80">Helpp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="bg-[#212121] sticky top-0 z-[9999] shadow-md pt-4 pb-3 sm:py-3 md:py-0">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="text-white md:hidden" onClick={() => setMenuShow(true)}>
                <MenuOutlined className="!text-3xl" />
              </button>
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  alt="Mexxiss_Logo"
                  className="w-[100px] sm:w-[130px] lg:w-[150px]"
                />
              </Link>
            </div>
            <div className="NavMenu">
              <NavMenu />
            </div>
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
              <Link className="text-sm flex items-center gap-1 sm:gap-2 text-primary px-2 sm:px-3 py-1.5 bg-white rounded font-semibold">
                <AccountCircleOutlined className="!text-xl" />
                Login
              </Link>
              <Link className="pr-2 sm:px-3 text-white relative">
                <ShoppingCartOutlined className="!text-2xl" />
                <span className="absolute bg-white rounded-full px-2 text-text1 text-sm -top-2 -right-2">
                  0
                </span>
              </Link>
            </div>
          </nav>
        </div>
        <MobileMenu menuShow={menuShow} setMenuShow={setMenuShow} />
      </header>
    </>
  );
};

export default Header;
