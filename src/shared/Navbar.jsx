import React, { useState } from "react";
import logo from "../assets/images/khuda-lagche.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = (
    <>
      <NavLink
        to="/"
        className={`${
          isMenuOpen ? "block" : ""
        } text-gray-700 hover:text-blue-500`}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={`${
          isMenuOpen ? "block" : ""
        } text-gray-700 hover:text-blue-500`}
      >
        About
      </NavLink>

      <NavLink
        to="/recipes"
        className={`${
          isMenuOpen ? "block" : ""
        } text-gray-700 hover:text-blue-500`}
      >
        Recipes
      </NavLink>
      <NavLink
        to="/contact"
        className={`${
          isMenuOpen ? "block" : ""
        } text-gray-700 hover:text-blue-500`}
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <div>
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-800">
                <img className="w-40" src={logo} alt="" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Left Menu */}
              <div className="flex space-x-4">{menu}</div>
              {/* Right Menu */}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="space-y-4 px-4 py-3">{menu}</div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
