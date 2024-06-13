// NavbarCollapsible.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarCollapsible = ({ isOpen, toggleNavbar }) => {
  return (
    <nav className={`bg-black text-white h-screen fixed top-0 right-0 overflow-y-auto z-50 shadow-lg transition-transform ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={() => toggleNavbar(!isOpen)}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4">
          <div className="flex flex-col">
            <Link to="/about-us" className="block text-white py-2 px-4 hover:bg-gray-800">About Us</Link>
            <Link to="/mission" className="block text-white py-2 px-4 hover:bg-gray-800">Mission</Link>
            <Link to="/contact-us" className="block text-white py-2 px-4 hover:bg-gray-800">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCollapsible;
