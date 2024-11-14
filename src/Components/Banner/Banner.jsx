import React, { useRef } from "react";
import homepagebanner from "../../assets/images/homepagebanner.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";
import {
  EastOutlined,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import icon5 from "../../assets/icons/icon5.png";
import icon6 from "../../assets/icons/icon6.png";
import icon7 from "../../assets/icons/icon7.png";
import icon8 from "../../assets/icons/icon8.png";
import icon17 from "../../assets/icons/icon17.png";
import icon18 from "../../assets/icons/icon18.png";
import icon19 from "../../assets/icons/icon19.png";
import icon20 from "../../assets/icons/icon20.png";
import icon21 from "../../assets/icons/icon21.png";
import icon22 from "../../assets/icons/icon22.png";
import icon23 from "../../assets/icons/icon23.png";
import icon25 from "../../assets/icons/icon25.png";
import icon26 from "../../assets/icons/icon26.png";
import icon27 from "../../assets/icons/icon27.png";
import icon24 from "../../assets/icons/icon24.png";
import icon28 from "../../assets/icons/icon28.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Banner.css";

const Banner = () => {
  let sliderRef = useRef(null);

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    fade: true,
    speed: 500,
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 8,
          dots: true,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 7,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          dots: true,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 5,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const cate = [
    {
      name: "Domains & Hosting Solutions",
      logo: icon23,
    },
    {
      name: "IT, Software & App Solutions",
      logo: icon25,
    },
    {
      name: "Business Ready Applications & Platforms",
      logo: icon26,
    },
    {
      name: "Global Real Estate Marketplace",
      logo: icon24,
    },
    {
      name: "Holiday Homes & Rentals",
      logo: icon20,
    },
    {
      name: "Luxury Cars Sales & Rentals",
      logo: icon27,
    },
    {
      name: "Travel & Hospitality Services",
      logo: icon22,
    },
    {
      name: "Steel Plants & Machinery",
      logo: icon17,
    },
    {
      name: "Industrial Plants & Machinery",
      logo: icon28,
    },
    {
      name: "Steel Meltshop Material Handling",
      logo: icon19,
    },
    {
      name: "eCommerce & Marketplace Solutions",
      logo: icon18,
    },
    {
      name: "Metal Scrap Recycling & Procurement",
      logo: icon21,
    },
    {
      name: "Automotive Machines",
      logo: icon1,
    },
    {
      name: "Construction and Minning Machines",
      logo: icon2,
    },
    {
      name: "Agricultural Machines",
      logo: icon3,
    },
    {
      name: "Building And Construction Machines",
      logo: icon4,
    },
    {
      name: "Industrial Machines",
      logo: icon5,
    },
    {
      name: "Medical Machines",
      logo: icon6,
    },
    {
      name: "Food Processing Machines",
      logo: icon7,
    },
    {
      name: "Energy Machines",
      logo: icon8,
    },
  ];
  return (
    <div className="Banner relative">
      <div
        // className="pt-[100px] py-36 bg-cover bg-no-repeat"
        // style={{ backgroundImage: `url(${homepagebanner})` }}
        className="relative after:absolute after:w-full after:h-[460px] after:md:h-[500px]  after:left-0 after:top-0 after:bg-black after:bg-opacity-60 "
      >
        <div className="">
          <Slider {...settings2}>
            <div className="h-[460px] md:h-[500px] ">
              <img
                src={homepagebanner}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-[460px] md:h-[500px] ">
              <img
                src={banner2}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-[460px] md:h-[500px] ">
              <img
                src={banner3}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-[460px] md:h-[500px] ">
              <img
                src={banner4}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </Slider>
        </div>
        <div className="w-full sm:w-fit flex items-start justify-center absolute z-20 h-[460px] md:h-[500px] top-0 left-1/2 -translate-x-1/2">
          <div className="container mx-auto">
            <div className="text-center pt-[60px]">
              <div className="bg-[#FFFFFF4D] px-3 sm:px-6 md:px-8 py-2.5 text-white rounded flex justify-center items-center backdrop-filter backdrop:blur-xl sm:w-max mx-auto text-sm sm:text-base">
                <p>Empowering businesses through cutting edge</p>
              </div>
              <h1 className="mt-6 text-[26px] 2xs:text-3xl xs:text-4xl md:text-5xl font-bold text-primary left-8 sm:leading-[52px] sm:text-nowrap">
                Technology Solutions
              </h1>
              <div className=" max-w-[600px] mx-auto mt-6 md:mt-10">
                <p className="text-heading mb-4 text-sm sm:text-base">
                  Search Products & Verified Resources Near You.
                </p>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Enter Product/Service Name"
                    className="text-[#212529] border-none w-full h-9 sm:h-11"
                  />
                  <button className="bg-red-gradient py-2 px-4 text-white h-9 sm:h-11">
                    Search
                  </button>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <Link
                  to="/explore"
                  className=" w-fit text-white bg-red-gradient px-5 py-1.5 sm:py-2 text-sm font-medium rounded flex items-center gap-2 group mx-auto lg:mx-0"
                >
                  <span>Explore Now</span>
                  <span className="duration-300 group-hover:translate-x-2">
                    <EastOutlined />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-[50px]">
        <div className="container mx-auto">
          <div className="sm:px-10 relative BannerSlider">
            <button
              className="hidden sm:inline-block w-8 h-8 bg-primary rounded-full text-white opacity-50 absolute top-[60px]  z-10 -left-2 hover:!opacity-100 group-hover:opacity-60 duration-300"
              onClick={() => previous()}
            >
              <KeyboardArrowLeftOutlined />
            </button>
            <Slider {...settings} ref={sliderRef}>
              {cate.map((e, index) => (
                <div key={index} className="px-2">
                  <div className="card relative px-2 py-4 flex items-center justify-center flex-col border-2 border-primary border-opacity-80 bg-white rounded min-h-[100px] hover:bg-[#ffd4d4] duration-300 select-none group">
                    <Link
                      to="/products"
                      className="absolute w-full h-full left-0 top-0 rounded"
                    ></Link>
                    <img src={e.logo} className="h-7 mb-2" />
                    <p className="text-text1 font-medium text-center line-clamp-2 group-hover:line-clamp-none duration-200">
                      {e.name}
                    </p>
                    {/* <p className="text-white bg-black bg-opacity-70 px-3 py-1 text-sm text-nowrap font-medium text-center opacity-0 group-hover:opacity-100 z-10 duration-300 invisible group-hover:visible absolute -bottom-8 tooltip">
                      {e.name}
                    </p> */}
                  </div>
                </div>
              ))}
            </Slider>
            <button
              className="hidden sm:inline-block w-8 h-8 bg-primary rounded-full text-white opacity-50 absolute top-[60px]  z-10 -right-2 hover:!opacity-100 group-hover:opacity-60 duration-300"
              onClick={() => next()}
            >
              <KeyboardArrowRightOutlined />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
