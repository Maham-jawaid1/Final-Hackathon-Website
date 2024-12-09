//i use chat gpt code for responsiveness
import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function Second() {
  return (
    <div className="bg-black w-full flex justify-center items-center">
      <section className="bg-black px-5 md:px-[135px] flex flex-col-reverse md:flex-row justify-between items-center py-[50px] mt-20">
        {/* Text Section */}
        <div className="text-white w-full md:w-[40%] space-y-4">
          <img
            src="../about.png"
            className="w-20 md:w-32 mx-auto md:mx-0"
            alt="About"
          />

          <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold text-center md:text-left">
            <span className="text-[#FF9F0D]">We</span> Create the Best Product
          </h1>

          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          <ul className="space-y-4">
            {[
              "Lacus nisi, et ac dapibus sit eu velit in consequat.",
              "Quisque diam pellentesque bibendum non dui volutpat fringilla",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-[14px] md:text-[16px] lg:text-[18px]">
                <FaCheck className="text-[#FF9F0D] mr-3" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex justify-center md:justify-start">
            <button className="bg-[#FF9F0D] text-white w-[120px] md:w-[160px] lg:w-[190px] h-[40px] md:h-[50px] lg:h-[60px] rounded-[40px] mt-8 hover:bg-yellow-800">
              See More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-end space-y-8 md:space-y-4">
          <img
            src="../1pic.png"
            alt="Main"
            className="w-[80%] md:w-[90%] object-contain"
          />
          <div className="flex justify-center md:justify-end space-x-4">
            <img
              src="../2pic.png"
              alt="Secondary 1"
              className="w-[40%] md:w-[45%] object-contain"
            />
            <img
              src="../3pic.png"
              alt="Secondary 2"
              className="w-[40%] md:w-[45%] object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
