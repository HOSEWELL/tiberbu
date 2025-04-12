// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaUserDoctor, FaBars } from 'react-icons/fa6';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

function Navbar() {
  // State to toggle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-br from-blue-50 to-blue-200 text-gray-900 py-5 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and User Icon */}
        <div className="flex items-center space-x-2">
          <ScrollLink
            to="landing"
            smooth={true}
            duration={500}
            className="flex items-center text-2xl font-bold text-gray-900 cursor-pointer"
          >
            <FaUserDoctor size={32} className="mr-2" /> Tiberbu
          </ScrollLink>
        </div>

        {/* Hamburger Icon (Visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-900 text-3xl p-3" 
          >
            {isMenuOpen ? (
              <span className="text-2xl">X</span> 
            ) : (
              <FaBars />
            )}
          </button>
        </div>

        {/* Center Navbar Links (Visible on large screens) */}
        <div className={`hidden md:flex space-x-20`}>
          <ScrollLink
            to="landing"
            smooth={true}
            duration={500}
            className="text-gray-900 hover:text-blue-400 cursor-pointer"
            activeClass="text-blue-500 font-semibold"
          >
            Landing
          </ScrollLink>
          <ScrollLink
            to="explore"
            smooth={true}
            duration={500}
            className="text-gray-900 hover:text-blue-400 cursor-pointer"
            activeClass="text-blue-500 font-semibold"
          >
            Explore
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-900 hover:text-blue-400 cursor-pointer"
            activeClass="text-blue-500 font-semibold"
          >
            About Us
          </ScrollLink>
          <ScrollLink
            to="contacts"
            smooth={true}
            duration={500}
            className="text-gray-900 hover:text-blue-400 cursor-pointer"
            activeClass="text-blue-500 font-semibold"
          >
            Contacts
          </ScrollLink>
        </div>

        {/* Admin Link on the far right (Visible on large screens) */}
        <div className="hidden md:flex">
          <Link
            to="/admin"
            className="ml-6 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow"
          >
            Admin
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Visible on small screens) */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full bg-gradient-to-br from-blue-50 to-blue-200 text-gray-900 py-5 shadow-md transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <ScrollLink
            to="landing"
            smooth={true}
            duration={500}
            className="text-gray-900 hover:text-blue-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Landing
          </ScrollLink>
          <ScrollLink
            to="explore"
            smooth={true}
            duration={500}
            className="text-gray-900 hover:text-blue-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Explore
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-900 hover:text-blue-400 cursor-pointer"
            onClick={toggleMenu}
          >
            About Us
          </ScrollLink>
          <ScrollLink
            to="contacts"
            smooth={true}
            duration={500}
            className="text-gray-900 hover:text-blue-400 cursor-pointer"
            onClick={toggleMenu}
          >
            Contacts
          </ScrollLink>
          <Link
            to="/admin"
            className="ml-6 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow"
            onClick={toggleMenu}
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
