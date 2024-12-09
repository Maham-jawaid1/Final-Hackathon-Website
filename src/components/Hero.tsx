//i use chatgpt code for responsiveness
import React from "react";

function Hero() {
  return (
    <section className="bg-black px-5 sm:px-10 md:px-[80px] lg:px-[135px] flex flex-col-reverse md:flex-row justify-between items-center py-[50px]">
      {/* Heading Section */}
      <div className="text-white w-full md:w-[50%] flex flex-col items-center md:items-start text-center md:text-left">
        {/* Subtitle Image */}
        <img
          src="../Its Quick & Amusing!.png"
          alt="Subtitle"
          className="w-[120px] sm:w-[150px] md:w-[200px] lg:w-[250px] mb-4"
        />

        {/* Title */}
        <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] font-bold mt-3">
          <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
        </h1>

        {/* Description */}
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue.
        </p>

        {/* Button */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start mt-6 space-y-3 md:space-y-0 md:space-x-4">
          <button className="bg-[#FF9F0D] text-white w-[120px] sm:w-[140px] h-[40px] sm:h-[45px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800 transition-all">
            See More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
        <img
          src="../Image.png"
          alt="Hero Image"
          className="w-[80%] max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;