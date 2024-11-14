import React from 'react'
import Banner from "../Components/Banner/Banner.jsx";
import HomeSec1 from "../Components/HomeSec1/HomeSec1.jsx";
import AboutUs from "../Components/AboutUs/AboutUs.jsx";
import WhyChoose from "../Components/WhyChoose/WhyChoose.jsx";
import OurCategories from "../Components/OurCategories/OurCategories.jsx";
import Subscribe from "../Components/Subscribe/Subscribe.jsx";
import OurCore from "../Components/OurCore/OurCore.jsx";

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeSec1/>
      <AboutUs/>
      <WhyChoose/>
      <OurCategories/>
      <OurCore/>
      <Subscribe/>
    </div>
  )
}

export default Home
