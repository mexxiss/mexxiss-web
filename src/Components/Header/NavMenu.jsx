import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <>
      <ul className="md:flex items-center justify-between gap-6 lg:gap-12 xl:gap-20 hidden">
        <li className=""> 
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              `flex items-center py-5 font-medium hover:border-primary hover:text-primary border-b-[3px]  duration-300 text-white ${
                isActive ? "border-primary" : "border-transparent"
              }`
            }
          >
            <span>Home</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/about-us"
            className={({ isActive, isPending }) =>
              `flex items-center py-5 font-medium hover:border-primary hover:text-primary border-b-[3px]  duration-300 text-white ${
                isActive ? "border-primary" : "border-transparent"
              }`
            }
          >
            <span>About Us</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/products"
            className={({ isActive, isPending }) =>
              `flex items-center py-5 font-medium hover:border-primary hover:text-primary border-b-[3px]  duration-300 text-white ${
                isActive ? "border-primary" : "border-transparent"
              }`
            }
          >
            <span>Products</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/contact-us"
            className={({ isActive, isPending }) =>
              `flex items-center py-5 font-medium hover:border-primary hover:text-primary border-b-[3px]  duration-300 text-white ${
                isActive ? "border-primary" : "border-transparent"
              }`
            }
          >
            <span>Contact Us</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavMenu;
