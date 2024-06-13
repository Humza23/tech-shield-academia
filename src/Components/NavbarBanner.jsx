import React from 'react';
import { Link } from 'react-router-dom';

const NavbarBanner = ({ toggleNavbar }) => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold">Tech Shield Academia</Link>
      </div>
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
    </nav>
  );
};

export default NavbarBanner;
