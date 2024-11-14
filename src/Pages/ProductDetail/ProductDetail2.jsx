import React from "react";
import img from "../../assets/images/banner3.png";
import cate1 from "../../assets/images/cate4.png";
import cate2 from "../../assets/images/cate5.png";
import realestate from "../../assets/images/realestate.png";
import realestate1 from "../../assets/images/realestate1.png";
import realestate2 from "../../assets/images/realestate2.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const ProductDetail2 = () => {
  const images = [realestate, realestate2];

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
            className="w-20 h-16 object-cover rounded-lg"
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
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index} className="px-2">
                      <img
                        src={image}
                        alt={`Product Image ${index + 1}`}
                        className="object-cover w-full h-64 sm:h-80 rounded-xl"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div></div>
            </div>
            <div className="w-full md:w-1/2">
              <div>
                <p className="sm:text-lg font-medium text-primary">
                  Real Estate
                </p>
                <h4 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#3F3F3F]">
                  Global Real Estate Marketplace
                </h4>
                <p className="mt-3 sm:mt-5 opacity-80">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                  maiores ipsam quas, excepturi nulla ipsa dolor soluta enim
                  accusamus omnis. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Sed aliquid fuga optio asperiores enim, cup.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  <Link
                    to="https://real-estate-front-end-lemon.vercel.app/"
                    target="blank"
                    className="py-2 px-3 lg:px-8 uppercase bg-primary border border-primary rounded text-white"
                  >
                    Preview
                  </Link>
                  <button className="py-2 px-3 lg:px-8 uppercase text-primary border border-primary rounded">
                    Talk to a Specialist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-3xl font-bold text-gray-700">Features</h4>
            <div className="mt-4">
              <h4 className="text-xl md:text-2xl font-semibold text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
                id?
              </h4>
              <p className="mt-2 opacity-80">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                asperiores eaque in quam atque deleniti incidunt non ipsa id?
                Incidunt suscipit sit aspernatur recusandae eveniet. Laudantium
                quis quo exercitationem deleniti? sectetur adipisicing elit.
                Natus, asperiores eaque in quam atque deleniti incidunt non ipsa
                id? Incidunt suscipit sit aspernatur recusandae eveniet.
                Laudantium quis quo exercitationem deleniti?
              </p>
              <p className="mt-2 opacity-80">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                asperiores eaque in quam atque deleniti incidunt non ipsa id?
                Incidunt suscipit sit aspernatur recusandae eveniet. Laudantium
                quis quo exercitationem deleniti?
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-xl md:text-2xl font-semibold text-gray-700">
                Lorem ipsum dolor sit amet, consectetur?
              </h4>

              <img
                src={realestate1}
                className="w-auto max-h-80 md:float-right py-5 md:p-4"
              />
              <div className="mt-2">
                <div className="flex-1 pr-4">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Natus, asperiores eaque in quam atque deleniti incidunt non
                    ipsa id? Incidunt suscipit sit aspernatur recusandae
                    eveniet. Laudantium quis quo exercitationem deleniti?
                  </p>
                  <p className="mt-2 opacity-80">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Natus, asperiores eaque in quam atque deleniti incidunt non
                    ipsa id? Incidunt suscipit sit aspernatur recusandae
                    eveniet. Laudantium quis quo exercitationem deleniti?
                  </p>
                  <div className="mt-8">
                    <h4 className="text-3xl font-bold text-gray-700">
                      Highlights
                    </h4>
                    <ul className="mt-5 list-disc pl-5 space-y-1">
                      <li className="opacity-80">
                        Capable of cleaning both shredded and granulated
                        plastic.
                      </li>
                      <li className="opacity-80">
                        Ideally suited for use with in-house recycling or at a
                        materials recycling facility.
                      </li>
                      <li className="opacity-80">
                        Automatic loading is possible using Kongskilde pneumatic
                        conveying technology.
                      </li>
                      <li className="opacity-80">
                        A variable speed electric motor can be supplied as extra
                        equipment for KIA 20 and KIA 60 to drive the distributor
                        impeller.
                      </li>
                    </ul>
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

export default ProductDetail2;
