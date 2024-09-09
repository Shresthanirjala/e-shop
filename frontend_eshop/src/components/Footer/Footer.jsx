import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6";

const FooterLinks = [
  {
    id: 1,
    title: "Home",
    link: "/#",
  },
  {
    id: 2,
    title: "Shop",
    link: "/#",
  },
  {
    id: 3,
    title: "About",
    link: "/#",
  },
  {
    id: 4,
    title: "Blogs",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop{" "}
            </a>
            <p className="text-gray-600 dark:text-white lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            </p>
            <p className="text-gray-500 mt-4">
              Made with ❤️ by Nirjala The Developer
            </p>
            <a
              href="https://www.instagram.com/nirjala_shrestha34/?fbclid=IwZXh0bgNhZW0CMTEAAR2lW3abDpLiJ1A-OzEu-0nrm4NPXZdcz07bqh9Iykwy2d1tJ_z9KsGPWv8_aem_tN87biYh6ySc5Dj"
              target="_blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit My instagram
            </a>
          </div>

          {/* footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
             {/* Company address */}
          <div className="py-8 px-4 col-span-2 sm:col-auto">
            <h1 className="text-xl font-bold sm:text-left mb-3">Address </h1>
            <div>
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Kathmandu</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <FaMobileAlt />
                <p>9807465847</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-200" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-200"/>
              </a>

              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-200"/>
              </a>

            </div>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
