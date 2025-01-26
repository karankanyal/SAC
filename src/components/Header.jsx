import { FiMenu } from "react-icons/fi";
import Navbar from "./Navbar.jsx";

const Header = () => {
  return (
    <>
      <header className="flex items-center bg-teal-950 justify-between h-20 w-100vw px-16 shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-20 w-30" />
        </div>

        {/* Center Text */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold font-serif">
            Artistry in Every Detail
          </h1>
        </div>

        {/* Menu Bar */}
        <div className="">
          <FiMenu className="text-gray-100 text-3xl cursor-pointer hover:text-teal-600" />
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
