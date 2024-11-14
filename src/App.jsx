import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home.jsx";
import UnderConstruct from "./Pages/UnderConstruct.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import TermsOfUse from "./Pages/TermsOfUse/TermsOfUse.jsx";
import Privacy from "./Pages/Privacy/Privacy.jsx";
import FAQ from "./Pages/FAQ/FAQ.jsx";
import OurWorks from "./Pages/OurWorks/OurWorks.jsx";
import Products from "./Pages/Products/Products.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";
import ProductDetail2 from "./Pages/ProductDetail/ProductDetail2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Ensure Layout is used here, so it gets the Router context
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/terms-of-use",
        element: <TermsOfUse />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/our-works",
        element: <OurWorks />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/detail1",
        element: <ProductDetail />,
      },
      {
        path: "/product/detail2",
        element: <ProductDetail2 />,
      },
      {
        path: "*",
        element: <UnderConstruct />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
