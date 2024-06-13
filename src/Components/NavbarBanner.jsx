import React from 'react';
import { Link } from 'react-router-dom';

const NavbarBanner = ({ toggleNavbar }) => {
  return (
    <nav className="bg-zinc-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">Tech Shield Academia</Link>
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
      <div className="hidden md:flex">
        <Link to="/about-us" className="mx-4 text-base">About Us</Link>
        <Link to="/mission" className="mx-4 text-base">Mission</Link>
        <Link to="/contact-us" className="mx-4 text-base">Contact Us</Link>
      </div>
    </nav>
  );
};

export default NavbarBanner;
