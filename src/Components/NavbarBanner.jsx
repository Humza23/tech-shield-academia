import React from 'react';
import { Link } from 'react-router-dom';

const NavbarBanner = ({ toggleNavbar }) => {
  return (
    <nav className="bg-zinc-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-lg font-bold oxanium-font">TechShield Academia</Link>
      <div className="md:hidden">
        <button
          type="button"
          className="text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link to="/course-details" className="text-base oxanium-font">Course Details</Link>
        <Link to="/about-us" className="text-base oxanium-font">About Us</Link>
        <Link to="/meet-the-team" className="text-base oxanium-font">Meet The Team</Link>
        <Link to="/contact-us" className="text-base oxanium-font">Contact Us</Link>
      </div>
    </nav>
  );
};

export default NavbarBanner;
