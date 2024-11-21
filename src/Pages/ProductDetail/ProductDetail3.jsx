import React from "react";
import img from "../../assets/images/banner3.png";
import img1 from "../../assets/images/EcomeltLogo.png";
import img2 from "../../assets/images/img15.png";
import img3 from "../../assets/images/img16.png";
import img17 from "../../assets/images/img17.png";
import img18 from "../../assets/images/img18.png";
import img19 from "../../assets/images/img19.png";
import img20 from "../../assets/images/img20.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const ProductDetail3 = () => {
  const images = [img1, img2, img3];
  const data = [img2, img3, img17, img18, img19, img20];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    customPaging: function (i) {
      return (
        <a>
          <img
            src={images[i]}
            alt={`Thumbnail ${i + 1}`}
            className="w-20 h-16 object-contain rounded-lg"
          />
        </a>
      );
    },
    responsive: [
      {
        breakpoint: 540,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="max-w-[1280px] mx-auto pb-20 productDetail">
      {/* breadcrumb */}
      <div className="breadcrumb py-5">
        <div className="container mx-auto">
          <ul className="flex items-center text-sm gap-2">
            <li className="text-gray-600 hover:text-gray-800">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-700">|</li>
            <li className="text-gray-600 hover:text-gray-800">
              <Link to="/products">Products</Link>
            </li>
            <li className="text-gray-700">|</li>
            <li className="text-gray-900">Product Name</li>
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
            <div className="w-full md:w-1/2">
              <div className="pb-20">
                <div className="border p-3 rounded-xl">
                  <Slider {...settings}>
                    {images.map((image, index) => (
                      <div key={index} className="px-2 ">
                        <img
                          src={image}
                          alt={`Product Image ${index + 1}`}
                          className="object-contain w-full h-64 sm:h-80 rounded-xl"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div></div>
            </div>
            <div className="w-full md:w-1/2">
              <div>
                <p className="sm:text-lg font-medium text-primary">Ecomelt®</p>
                <h4 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#3F3F3F]">
                  Ecomelt® Brand Induction{" "}
                </h4>
                <p className="mt-3 sm:mt-5 opacity-80">
                  Brand Induction Melting & Heating Furnace Units From 5.0 Kg to
                  30,000 Kg Capacity.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  {/* <Link
                    to="https://real-estate-front-end-lemon.vercel.app/"
                    target="blank"
                    className="py-2 px-3 lg:px-8 uppercase bg-primary border border-primary rounded text-white"
                  >
                    Preview
                  </Link> */}
                  <button className="py-2 px-3 lg:px-8 uppercase text-primary border border-primary rounded">
                    Talk to a Specialist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-4 gap-3">
              {data.map((e, index) => (
                <div className="max-h-64 rounded-xl overflow-hidden">
                  <img src={e} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail3;
