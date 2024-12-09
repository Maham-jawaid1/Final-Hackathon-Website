import { PiHamburger } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiDrinks2Line } from "react-icons/ri";
export default function WhyChooseUs(){
  return(
    <section className="bg-black text-white py-10 px-6 sm:px-10 md:px-16 lg:px-24 flex flec-col lg:flex-row items-center justify-between ">
      <div className="flex flex-col items-center lg:item-start space-y-6 lg:space-x-6 lg:flex-row">
        <img src="../choose1.png" 
        alt="Choose" 
        className="w-[70%] sm:w-[50%] lg:w-auto h-auto object-contain"/>
                <img src="../choose2.png" 
        alt="Choose" 
        className="w-[70%] sm:w-[50%] lg:w-auto h-auto object-contain"/>
      </div>
      <div className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-12">
      <img
          src="../choseusf.png"
          alt="Why Choose Us"
          className="w-[50%] sm:w-[40%] lg:w-auto h-auto object-contain mb-4 mx-auto lg:mx-0"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug text-center lg:text-left">
          Extra Ordinary Taste <br /> And Experienced
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-6 text-center lg:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum.
        </p>
        <div className="grid grid-cols-3 gap-6 mb-6">
        {[
            { icon: <PiHamburger />, label: "Fast Food" },
            { icon: <IoFastFoodOutline />, label: "Lunch" },
            { icon: <RiDrinks2Line />, label: "Dinner" },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-orange-500 text-black p-4 rounded-full mb-2 text-2xl">
                {feature.icon}
              </div>
              <p className="text-sm md:text-base">{feature.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-white text-black p-5 rounded-lg flex items-center justify-center">
          <h4 className="text-2xl md:text-3xl font-bold text-orange-500 mr-4">30+</h4>
          <p className="text-sm md:text-base">Years of Experience</p>
        </div>
      </div>
    </section>
  )
}
