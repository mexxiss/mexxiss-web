import React, { useState } from "react";
import img from "../../assets/images/banner3.png";
import cate4 from "../../assets/images/cate4.png";
import cate5 from "../../assets/images/cate5.png";
import cate6 from "../../assets/images/cate6.png";
import cate7 from "../../assets/images/cate7.png";
import realestate1 from "../../assets/images/realestate1.png";
import {
  CloseOutlined,
  KeyboardArrowDownOutlined,
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Products = () => {
  const [isOpen, setIsOpen] = useState({});
  const [cateShow, setCateShow] = useState(false);

  const toggleItem = (index) => {
    setIsOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleCate = () => {
    setCateShow(!cateShow);
  };

  const cate = [
    { cate: "Domains & Hosting Solutions", subCate: [] },
    { cate: "IT, Software & App Solutions", subCate: [] },
    {
      cate: "Industrial Machines",
      subCate: [
        { name: "Manufacturing Machines" },
        { name: "Packaging Machines" },
        { name: "Textile Machines" },
        { name: "Printing Machines" },
      ],
    },
    {
      cate: "Business Ready Applications & Platforms",
      subCate: [
        { name: "Manufacturing Machines" },
        { name: "Packaging Machines" },
        { name: "Textile Machines" },
        { name: "Printing Machines" },
      ],
    },
    { cate: "Global Real Estate Marketplace", subCate: [] },
    { cate: "Holiday Homes & Rentals", subCate: [] },
    { cate: "Luxury Cars Sales & Rentals", subCate: [] },
    { cate: "Travel & Hospitality Services", subCate: [] },
    { cate: "Steel Plants & Machinery", subCate: [] },
    { cate: "Industrial Plants & Machinery", subCate: [] },
    { cate: "Steel Meltshop Material Handling", subCate: [] },
    { cate: "eCommerce & Marketplace Solutions", subCate: [] },
    { cate: "Metal Scrap Recycling & Procurement", subCate: [] },
    { cate: "Automotive Machines", subCate: [] },
    { cate: "Construction and Mining Machines", subCate: [] },
    { cate: "Agricultural Machines", subCate: [] },
    { cate: "Building And Construction Machines", subCate: [] },
    { cate: "Medical Machines", subCate: [] },
    { cate: "Food Processing Machines", subCate: [] },
    { cate: "Energy Machines", subCate: [] },
  ];

  return (
    <div>
      <div
        className="bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="py-12 md:py-16 sm:py-20 backdrop-blur-[2px] bg-black bg-opacity-40">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold text-white tracking-wider">
              Products
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="pt-10 pb-20">
          <div className="div">
            <div className="flex items-center justify-between pb-3">
              <p className="text-2xl text-gray-600 font-semibold">Filter</p>
              <button className="uppercase flex items-center gap-1 text-red-600 text-sm sm:text-base">
                <CloseOutlined className="!text-xl " /> Clear Filter
              </button>
            </div>
            <div className="md:flex gap-6 lg:gap-10">
              <div className=" md:w-3/12">
                <div className="flex gap-3 md:block md:space-y-6 justify-between items-center">
                  <div>
                    <div className="flex items-center justify-between h-8 md:h-10 rounded border border-gray-300 px-3 py-1 bg-gray-50">
                      <input
                        type="text"
                        className="p-0 border-none focus:ring-0 w-full bg-transparent"
                        placeholder="search"
                      />
                      <button>
                        <Search />
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <p className="text-2xl text-gray-600 font-semibold hidden md:block">
                      Categories
                    </p>
                    <button
                      className="h-8 px-4 text-sm bg-primary text-white rounded md:hidden"
                      onClick={toggleCate}
                    >
                      Categories
                    </button>
                    <div
                      className={`mt-3 absolute right-0 bg-white z-10 md:static w-max md:w-auto duration-300 ${
                        cateShow
                          ? "visible opacity-100 translate-y-0"
                          : "-translate-y-4 md:translate-y-0 invisible md:visible opacity-0 md:opacity-100"
                      }`}
                    >
                      <ul className="flex flex-col border rounded bg-gray-50 py-1 px-3 max-h-[350px] overflow-auto shadow-lg">
                        {cate.map((item, index) => (
                          <li
                            key={index}
                            className="py-3 border-b border-gray-300 last:border-0"
                          >
                            <span
                              onClick={() => toggleItem(index)}
                              className="text-sm cursor-pointer hover:text-primary duration-300 flex items-center justify-between"
                            >
                              <span>{item.cate}</span>
                              {item.subCate.length > 0 && (
                                <span
                                  className={`${
                                    isOpen[index] && "rotate-180"
                                  } duration-300`}
                                >
                                  <KeyboardArrowDownOutlined />
                                </span>
                              )}
                            </span>

                            {/* Render sub-categories if they exist and item is open */}
                            {isOpen[index] && item.subCate.length > 0 && (
                              <ul className="ml-4 mt-3">
                                {item.subCate.map((subItem, subIndex) => (
                                  <li
                                    key={subIndex}
                                    className="py-3 border-t border-gray-300"
                                  >
                                    <span className="block text-sm cursor-pointer hover:text-primary duration-300">
                                      {subItem.name}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-0 md:w-3/4">
                <div>
                  <div className="grid xs:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="rounded overflow-hidden p-3 pb-5 border border-gray-300 shadow-lg">
                      <div className="flex flex-col gap-5 h-full justify-between">
                        <div>
                          <div className="img_thumb hover:brightness-125 duration-300 h-[200px]">
                            <img
                              src={cate4}
                              className="h-full w-full object-cover rounded"
                            />
                          </div>
                          <div className="mt-3">
                            <h4 className="font-medium text-lg cursor-pointer text-center hover:text-primary duration-300">
                              <Link to="/product/detail1">
                                IT, Software & App Solutions
                              </Link>
                            </h4>
                            <p className="text-center text-sm opacity-70 mt-2">
                              A compact and mobile machine-side collection unit
                              for cutting and extracting process waste
                            </p>
                          </div>
                        </div>
                        <div className="text-center">
                          <Link
                            to="/product/detail1"
                            className="py-2 px-6 uppercase text-sm bg-primary text-white rounded hover:scale-110 duration-300"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="rounded overflow-hidden p-3 pb-5 border border-gray-300 shadow-lg">
                      <div className="flex flex-col gap-5 h-full justify-between">
                        <div>
                          <div className="img_thumb hover:brightness-125 duration-300 h-[200px]">
                            <img
                              src={realestate1}
                              className="h-full w-full object-cover rounded"
                            />
                          </div>
                          <div className="mt-3">
                            <h4 className="font-medium text-lg cursor-pointer text-center hover:text-primary duration-300">
                              <Link to="/product/detail2">
                                Global Real Estate Marketplace
                              </Link>
                            </h4>
                            <p className="text-center text-sm opacity-70 mt-2">
                              A compact and mobile machine-side collection unit
                              for cutting and extracting process waste
                            </p>
                          </div>
                        </div>
                        <div className="text-center">
                          <Link
                            to="/product/detail2"
                            className="py-2 px-6 uppercase text-sm bg-primary text-white rounded hover:scale-110 duration-300"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="rounded overflow-hidden p-3 pb-5 border border-gray-300 shadow-lg">
                      <div className="flex flex-col gap-5 h-full justify-between">
                        <div>
                          <div className="img_thumb hover:brightness-125 duration-300 h-[200px]">
                            <img
                              src={cate5}
                              className="h-full w-full object-cover rounded"
                            />
                          </div>
                          <div className="mt-3">
                            <h4 className="font-medium text-lg cursor-pointer text-center hover:text-primary duration-300">
                              Steel Plants & Machinery
                            </h4>
                            <p className="text-center text-sm opacity-70 mt-2">
                              A compact and mobile machine-side collection unit
                              for cutting and extracting process waste
                            </p>
                          </div>
                        </div>
                        <div className="text-center">
                          <button className="py-2 px-6 uppercase text-sm bg-primary text-white rounded hover:scale-110 duration-300">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="rounded overflow-hidden p-3 pb-5 border border-gray-300 shadow-lg">
                      <div className="flex flex-col gap-5 h-full justify-between">
                        <div>
                          <div className="img_thumb hover:brightness-125 duration-300 h-[200px]">
                            <img
                              src={cate6}
                              className="h-full w-full object-cover rounded"
                            />
                          </div>
                          <div className="mt-3">
                            <h4 className="font-medium text-lg cursor-pointer text-center hover:text-primary duration-300">
                              Industrial Plants & Machinery
                            </h4>
                            <p className="text-center text-sm opacity-70 mt-2">
                              A compact and mobile machine-side collection unit
                              for cutting and extracting process waste
                            </p>
                          </div>
                        </div>
                        <div className="text-center">
                          <button className="py-2 px-6 uppercase text-sm bg-primary text-white rounded hover:scale-110 duration-300">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="rounded overflow-hidden p-3 pb-5 border border-gray-300 shadow-lg">
                      <div className="flex flex-col gap-5 h-full justify-between">
                        <div>
                          <div className="img_thumb hover:brightness-125 duration-300 h-[200px]">
                            <img
                              src={cate7}
                              className="h-full w-full object-cover rounded"
                            />
                          </div>
                          <div className="mt-3">
                            <h4 className="font-medium text-lg cursor-pointer text-center hover:text-primary duration-300">
                              Metal Scrap Recycling & Procurement
                            </h4>
                            <p className="text-center text-sm opacity-70 mt-2">
                              A compact and mobile machine-side collection unit
                              for cutting and extracting process waste
                            </p>
                          </div>
                        </div>
                        <div className="text-center">
                          <button className="py-2 px-6 uppercase text-sm bg-primary text-white rounded hover:scale-110 duration-300">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
