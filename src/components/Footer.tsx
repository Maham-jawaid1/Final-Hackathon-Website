//i use chat gpt code for responsiveness
import React from "react";
import Image from "next/image";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-[135px] py-6 md:py-[50px]">
        <div className="text-white md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-lg md:text-2xl font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support
          </h2>
          <p className="text-sm md:text-base mt-4">
            Don&#39;t wait, make a smart & logical quote here. It&#39;s pretty easy.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:mt-0 mt-6 w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-2 px-4 md:py-[10px] md:px-[20px] mb-4 md:mb-0 md:mr-2 w-full md:w-auto"
          />
          <button className="text-[#FF9F0D] bg-white py-2 px-4 md:py-[10px] md:px-[20px] w-full md:w-auto">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-[#FF9F0D] mx-4 sm:mx-8 md:mx-[135px]" />

      {/* Links Section */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-[135px]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12 py-6">
          {/* About Us */}
          <div>
            <h2 className="mb-4 text-lg md:text-xl font-semibold uppercase text-white">About Us</h2>
            <p className="text-sm text-gray-400">
              Corporate clients and leisure travelers rely on Groundlink for dependable, safe, and professional chauffeured car service in major cities worldwide.
            </p>
            <div className="flex items-start mt-4">
              <div className="bg-[#FF9F0D] flex justify-center items-center w-16 h-16">
                <PiClockClockwiseBold className="text-white text-2xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm text-white">Opening Hours</h3>
                <p className="text-xs text-gray-400">Mon - Sat: 8.00 - 6.00</p>
                <p className="text-xs text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="mb-4 text-lg md:text-xl font-semibold uppercase text-white">Useful Links</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "About",
                "News",
                "Partner",
                "Team",
                "Menu",
                "Contact",
              ].map((link) => (
                <li key={link} className="hover:underline">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="mb-4 text-lg md:text-xl font-semibold uppercase text-white">Help?</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "FAQ",
                "Terms & Conditions",
                "Reporting",
                "Documentation",
                "Support Policy",
                "Privacy",
              ].map((link) => (
                <li key={link} className="hover:underline">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="mb-4 text-lg md:text-xl font-semibold uppercase text-white">Recent Posts</h2>
            <ul className="space-y-4">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex items-start">
                  <Image src={`../footer${item}.png`} alt="Post Thumbnail" className="w-16 h-16" />
                  <div className="ml-4">
                    <p className="text-xs text-gray-400">20 Feb 2022</p>
                    <h3 className="text-sm text-white">Keep Your Business</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-700 py-4 px-4 sm:px-8 md:px-[135px]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-xs text-gray-400">© 2023 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
          <div className="flex mt-4 md:mt-0 gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, index) => (
              <div key={index} className="bg-white w-9 h-9 flex justify-center items-center rounded">
                <Icon className="text-black" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
