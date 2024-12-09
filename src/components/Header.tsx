import { IoSearch } from "react-icons/io5";
import { PiHandbagBold } from "react-icons/pi";
import Link from "next/link";
export default function Header (){
  return(
    <nav className="bg-black text-white shadow-md ">
      <div className="container mx-auto px-6 lg:px-12 py-4">
        <div className="flex justify-center items-center">
          
              <Link href="/" className="text-2xl font-bold">
              Food<span className="text-orange-500">tuck </span></Link>
        </div>
        <div className="hidden md:flex justify-center mt-3 space-x-6 lg:space-x-11">
          <Link href="" className="hover:text-orange-500 transition">Home</Link>
          <Link href="#" className="hover:text-orange-500 transition">Menu</Link>
          <Link href="#" className="hover:text-orange-500 transition">Blog</Link>
          <Link href="#" className="hover:text-orange-500 transition">Pages</Link>
            <Link href="#" className="hover:text-orange-500 transition">About</Link>
            <Link href="#" className="hover:text-orange-500 transition">Shop</Link>
            <Link href="#" className="hover:text-orange-500 transition">Contact</Link>
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex bg-gray-800 px-4 py-2 rounded-full outline outline-orange-500">
                  <input type="text" 
                  placeholder="Search..."
                  className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-32 lg:w-48" />
                    <IoSearch className="text-orange-500 ml-2" />
              </div>
              <PiHandbagBold className="text-white text-2xl hover:text-orange-500 transition" />
            </div>
        </div>
      </div>
    </nav>
  )
}
