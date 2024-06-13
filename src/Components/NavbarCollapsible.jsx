// NavbarCollapsible.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarCollapsible = ({ isOpen, toggleNavbar }) => {
  return (
    <nav
      className={`bg-zinc-900 text-white fixed inset-x-0 top-0 z-50 overflow-y-auto shadow-lg transition-transform ${
        isOpen ? 'h-screen transform translate-y-0' : 'h-0 transform -translate-y-full'
      }`}
    >
      <div className="p-4">
        <div className="flex justify-end">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-4">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Tech Shield Academia</h1>
            <Link to="/about-us" className="text-white py-2 px-4 hover:bg-gray-800 block w-full text-center">
              About Us
            </Link>
            <Link to="/mission" className="text-white py-2 px-4 hover:bg-gray-800 block w-full text-center">
              Mission
            </Link>
            <Link to="/contact-us" className="text-white py-2 px-4 hover:bg-gray-800 block w-full text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCollapsible;
