import React, { useState } from "react";
import { NavbarLinks } from "../Utils/constants";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-3 inset-x-0 flex justify-center z-50 w-full before:absolute before:inset-0 before:max-w-[66rem] before:mx-auto before:rounded-full before:backdrop-blur-md before:bg-white/30">
      <nav className="relative max-w-[66rem] w-full py-2 px-5 flex items-center justify-between border rounded-full mx-2 lg:mx-auto shadow-sm">
        <div className="flex justify-between items-center w-full">
          <div>
            <a
              className="flex items-center space-x-3 text-xl font-semibold text-lime-600 hover:text-lime-700 transition-colors duration-300"
              href="/"
            >
              <img src="/lomiLogo.png" alt="Logo" className="w-8 h-8" />
              <span>1omi</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NavbarLinks.map((link, idx) => (
              <a
                key={idx}
                className="text-sm font-medium text-gray-700 hover:text-lime-500 transition-colors duration-300"
                href={`#${link.href}`}
              >
                {link.name}
              </a>
            ))}
            <a
              className="inline-flex items-center py-2 px-4 bg-lime-500 text-white font-medium text-sm rounded-full hover:bg-lime-600 transition-colors duration-300"
              href="../templates/agency/index.html#contact"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-4xl p-1 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center mt-4 space-y-4 bg-white rounded-lg shadow-lg p-5 absolute top-full inset-x-0 z-40">
            {NavbarLinks.map((link, idx) => (
              <a
                key={idx}
                className="text-sm font-medium text-gray-700 hover:text-lime-500 transition-colors duration-300"
                href={`#${link.href}`}
              >
                {link.name}
              </a>
            ))}
            <a
              className="inline-flex items-center py-2 px-4 bg-lime-500 text-white font-medium text-sm rounded-full hover:bg-lime-600 transition-colors duration-300"
              href="../templates/agency/index.html#contact"
            >
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
