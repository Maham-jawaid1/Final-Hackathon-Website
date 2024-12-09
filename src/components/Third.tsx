//i use chatgpt code for responsivenesss
import React from "react";
import Image from "next/image";

const Food = () => {
  // Items array containing food details
  const items = [
    { id: 1, img: "/food1.png" },
    { id: 2, img: "/food2.png" },
    { id: 3, img: "/food3.png" },
    { id: 4, img: "/food4.png" },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-10 w-full flex justify-center items-center">
      <div className="container mx-auto text-center relative">
        {/* Centered Title Image */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 mt-11">
          <img
            src="/Food Category.png"
            alt="Food Category"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 relative z-10 mt-20">
          <span className="text-orange-500">Choose</span> Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={item.img}
                alt={`Food item ${item.id}`}
                width={300}
                height={224}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Food;