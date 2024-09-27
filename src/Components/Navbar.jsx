import React, { useState } from "react";
import { NavbarLinks } from "../Utils/constants";
import { HiMenu, HiX } from "react-icons/hi";
import { TbMenu } from "react-icons/tb";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-3 inset-x-0 flex justify-center z-[9999] before:absolute before:inset-0 max-sm:mx-2 sm:before:max-w-[66rem] before:mx-auto before:rounded-full before:backdrop-blur-md before:bg-white/10">
      <nav className="relative max-w-[66rem] w-full py-1 px-1 md:px-3 md:py-2 sm:px-5 flex items-center justify-between  rounded-full mx-2 lg:mx-auto shadow-sm sm:border border-white/10">
        <div className="flex justify-between items-center w-full">
          <div>
            <a
              className="flex items-center space-x-3 text-lg md:text-xl md:font-semibold text-gray-50 hover:text-lime-400 transition-colors duration-300"
              href="/"
            >
              <img
                src="/lomiLogo.png"
                alt="Logo"
                className="w-6 h-6 md:w-8 md:h-8"
              />
              <span>1omi.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NavbarLinks.map((link, idx) => (
              <a
                key={idx}
                className="text-sm font-medium text-gray-50 hover:text-lime-500 transition-colors duration-300"
                href={`#${link.href}`}
              >
                {link.name}
              </a>
            ))}
            <a
              className="inline-flex items-center py-2 px-4 bg-lime-500 text-white font-medium text-sm rounded-full hover:bg-lime-600 transition-colors duration-300"
              href="../templates/agency/index.html#contact"
            >
              Connect wallet
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-3xl p-1 focus:outline-none text-white"
            onClick={toggleMenu}
          >
            {isOpen ? <LiaTimesSolid /> : <TbMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex flex-col items-center mt-4 space-y-4 bg-white/10 rounded-3xl shadow p-5 absolute top-full inset-x-0 z-[9999] border border-white/5 transition-all duration-500 ease-in-out backdrop-blur-xl transform ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          {NavbarLinks.map((link, idx) => (
            <a
              key={idx}
              className="text-sm font-medium text-gray-200 hover:text-lime-500 transition-colors duration-300"
              href={`#${link.href}`}
            >
              {link.name}
            </a>
          ))}
          <a
            className="inline-flex items-center py-2 px-4 bg-lime-500 text-white font-medium text-sm rounded-full hover:bg-lime-600 transition-colors duration-300"
            href="#"
          >
            Connect wallet
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
