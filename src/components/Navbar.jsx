import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { IoCallOutline, IoClose } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between h-12 w-full px-16 bg-black text-white">
      {/* Left: Navigation Links */}
      <nav className="flex space-x-6 ">
        <a href="#" className="">
          Our Story
        </a>
        <a href="#" className="">
          Shop
        </a>
        <a href="#" className="hover:text-gray-400">
          Categories
        </a>
        <a href="#" className="hover:text-gray-400">
          Blogs
        </a>
        <a href="#" className="hover:text-gray-400">
          Contact us
        </a>
      </nav>

      {/* Right: Social and Functional Icons */}
      <div className="flex items-center space-x-4">
        <FaInstagram className="text-xl hover:text-purple-500 cursor-pointer" />
        <FaWhatsapp className="text-xl hover:text-green-500 cursor-pointer" />
        <IoClose className="text-xl hover:text-gray-500 cursor-pointer" />
        <FaFacebook className="text-xl hover:text-blue-500 cursor-pointer" />
        <IoCallOutline className="text-xl hover:text-gray-500 cursor-pointer" />
      </div>
    </header>
  );
}
